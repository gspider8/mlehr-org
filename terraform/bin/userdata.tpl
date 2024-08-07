#!/bin/bash

# Variables
#PROJECT_MAIN_DIR_NAME="djangoProject"
#GIT_REPO_URL="https://github.com/gspider8/mlehr-org.git"
#GIT_REPO_URL="https://<your_username>:<your_PAT>@github.com/codewithmuh/django-aws-ec2-autoscaling.git"
PROJECT_MAIN_DIR_NAME="${project_main_dir_name}"
GIT_REPO_URL="${git_repo_url}"
NGINX_SITE_NAME="${nginx_site_name}"

# --- Git ---
git clone "$GIT_REPO_URL" "/home/ubuntu/$PROJECT_MAIN_DIR_NAME"
cd "/home/ubuntu/$PROJECT_MAIN_DIR_NAME"
sudo chown -R ubuntu:ubuntu "/home/ubuntu/$PROJECT_MAIN_DIR_NAME"

# --- OS Dependencies ---
sudo apt-get update
sudo apt-get -y upgrade

sudo apt-get install -y python3-pip
sudo apt-get install -y python3-venv
sudo apt-get install -y nginx

sudo apt install docker.io
sudo apt install docker-compose

# --- Python Dependencies ---
echo "Activating virtual environment..."
python3 -m venv .venv
source .venv/bin/activate

echo "Installing Python dependencies..."
pip install -r "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/requirements.txt"
echo "Dependencies installed successfully."
deactivate

# --- Gunicorn Application Server ---
# Copy gunicorn socket and service files
sudo cp "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/gunicorn/gunicorn.socket" "/etc/systemd/system/gunicorn.socket"
sudo cp "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/gunicorn/gunicorn.service" "/etc/systemd/system/gunicorn.service"

# Start and enable Gunicorn service
sudo systemctl start gunicorn.service
sudo systemctl enable gunicorn.service

# --- NGINX Web Server ---
sudo systemctl daemon-reload
# Remove default Nginx site if exists
sudo rm -f /etc/nginx/sites-enabled/default
# Copy Nginx configuration file
sudo cp "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/nginx/nginx.conf" "/etc/nginx/sites-available/$NGINX_SITE_NAME"
# Create symbolic link to enable Nginx site
sudo ln -s "/etc/nginx/sites-available/$NGINX_SITE_NAME" "/etc/nginx/sites-enabled/"
# Add www-data user to ubuntu group
sudo gpasswd -a www-data ubuntu
# Restart Nginx service
sudo systemctl restart nginx

# --- Start App ---
# Activate virtual environment
echo "Activating virtual environment..."
source "/home/ubuntu/$PROJECT_MAIN_DIR_NAME/.venv/bin/activate"
# Manage static files
echo "Running collectstatic command..."
python manage.py collectstatic --noinput
# Restart Gunicorn and Nginx services
echo "Restarting Gunicorn and Nginx services..."
sudo service gunicorn restart
sudo service nginx restart

#!/bin/bash
sudo apt-get update
sudo apt-get -y upgrade #  wont work because of daemon shit

# Install Python3 pip and venv
sudo apt install -y python3-pip
sudo apt install -y python3-venv


# Clone repository
git clone "${git_repo_url}" "/home/ubuntu/${project_main_dir}"
#git clone "https://github.com/gspider8/mlehr-org.git" "/home/ubuntu/djangoProject"
cd ${project_main_dir}

# set up virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
echo "Installing Python dependencies..."
pip install -r "/home/ubuntu/${project_main_dir}/requirements.txt"
echo "Dependencies installed successfully."

# NGINX
sudo apt-get install -y nginx


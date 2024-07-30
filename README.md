https://github.com/codewithmuh/django-aws-ec2-nginx-gunicorn
* nginx, scripts, gunicorn directories & UserData.sh
  * Doesn't work for my project
gunicorn.conf
```

```
```python
# --- settings.py ---
WSGI_APPLICATION = "djangoProject.wsgi.application"
```
```
command=/home/ubuntu/env/bin/djangoProject --workers 3 --bind unix:/home/ubuntu/djangoProject/app.sock djangoProject.wsgi.application
```

Resources for continuing 
https://www.youtube.com/watch?v=7O1H9kr1CsA 26:30
https://github.com/codewithmuh/django-aws-ec2-nginx-gunicorn/tree/main scripts
terraform apply then try to go through scripts to get it working
make sure bad security settings are in effect


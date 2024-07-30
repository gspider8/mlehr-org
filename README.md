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


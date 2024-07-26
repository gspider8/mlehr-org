# --- djangoProject/urls.py ---
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    # Django admin
    path("holygrail/", admin.site.urls),

    # User Management
    path("accounts/", include("django.contrib.auth.urls")),

    # Local Apps
    path("", include("core.urls")),
]

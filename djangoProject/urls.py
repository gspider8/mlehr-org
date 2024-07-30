# --- djangoProject/urls.py ---
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # new
from django.conf.urls.static import static  # new

urlpatterns = [
    # Django admin
    path("holygrail/", admin.site.urls),

    # User Management
    path("accounts/", include("django.contrib.auth.urls")),

    # Local Apps
    path("", include("core.urls")),
]
if settings.DEBUG:  # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)

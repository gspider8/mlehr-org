# --- core/urls.py ---
from django.urls import path
from .views import HomePageView, MusicPlayer

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("music_player/", MusicPlayer.as_view()),
]

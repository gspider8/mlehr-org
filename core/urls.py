# --- core/urls.py ---
from django.urls import path
from .views import *

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("music_player/", MusicPlayer.as_view()),
    path("football_cards/", FootballCards.as_view()),
    path("statistics_calculator/", StatisticsCalculator.as_view())
]

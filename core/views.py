from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class MusicPlayer(TemplateView):
    template_name = "fcc_javascript/music_player/index.html"


class FootballCards(TemplateView):
    template_name = "fcc_javascript/football_cards/index.html"

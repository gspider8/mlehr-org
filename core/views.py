from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class MusicPlayer(TemplateView):
    template_name = "fcc_javascript/music_player/index.html"

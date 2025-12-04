from django.urls import path
from .views import VueChat

modeles_url = [
    path('message/', VueChat.as_view(), name='message_chat'),
]

urlpatterns = modeles_url

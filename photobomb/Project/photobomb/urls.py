from django.urls import path
from . import views

app_name = 'photobomb'

urlpatterns = [
    path("", views.index, name="Home")
]

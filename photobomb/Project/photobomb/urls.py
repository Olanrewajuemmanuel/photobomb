from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter

app_name = 'photobomb'

router = DefaultRouter()
router.register('collections', views.ArtViewSet, basename="art_collections")

urlpatterns = [
    path("", views.index, name="Home"),
    path("api/", include(router.urls))
]

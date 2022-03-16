from django.urls import path
from . import views

urlpatterns = [
    path('simple_view', views.simple_view)
]

from django.urls import path
from . import views
from django.contrib.staticfiles.views import serve

urlpatterns = [
    path('', views.index, name='home'),
    path('catalog/', views.catalog, name='catalog'),
    path('category/', views.category, name='category'),
    path('about/', views.about_us, name='about'),
    path('checkout/', views.checkout, name='checkout'),
    path('profile/', views.profile, name='profile'),
    path('contact/', views.contact, name='contact'),

    path('product', views.product, name='product'),

    path('favicon.ico', serve, {'path': 'images/favicon.ico'}),
]

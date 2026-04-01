from django.shortcuts import render


def index(request):
    return render(request, 'store/index.html')


def catalog(request):
    return render(request, 'store/catalog.html')


def category(request):
    return render(request, 'store/categories.html')


def about_us(request):
    return render(request, 'store/about_us.html')


def checkout(request):
    return render(request, 'store/check_out.html')


def profile(request):
    return render(request, 'store/profile.html')


def contact(request):
    return render(request, 'store/contact.html')


def product(request):
    return render(request, 'store/product_card.html')
from django.shortcuts import render


def index_page(request):
    return render(request, 'index.html')


def test_page(request):
    return render(request, 'test.html')


def about_me(request):
    return render(request, 'about_me.html')
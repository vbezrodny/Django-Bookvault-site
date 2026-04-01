from django.contrib import admin
from .models import Book, Category

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'price', 'rating', 'reviews', 'category', 'is_new')
    list_filter = ('category', 'is_new')
    search_fields = ('title', 'author')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'count', 'icon', 'is_new', 'is_favorite')
    search_fields = ('name',)
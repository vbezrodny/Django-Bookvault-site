from rest_framework import serializers
from .models import Book, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    categoryId = serializers.IntegerField(source='category_id', read_only=True)
    isNew = serializers.BooleanField(source='is_new', read_only=True)

    class Meta:
        model = Book
        fields = '__all__'

    def get_image(self, obj):
        image_name = str(obj.image)
        if image_name.startswith(('http://', 'https://', '/static/')):
            return image_name
        return obj.image.url

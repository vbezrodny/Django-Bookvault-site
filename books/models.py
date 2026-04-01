from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    count = models.IntegerField(default=0)
    icon = models.CharField(max_length=50)
    is_new = models.BooleanField(default=False)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.IntegerField()
    reviews = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    is_new = models.BooleanField(default=False)
    image = models.ImageField(upload_to='books/')

    def __str__(self):
        return self.title
from django.db import models


class TheUser(models.Model):
    username = models.CharField(max_length=50, unique=True, blank=False)
    password = models.CharField(max_length=255, blank=False)
    date_created = models.DateField(auto_now_add=True)
    email = models.EmailField(max_length=254, unique=True, null=True)
    phone_number = models.CharField(max_length=15, null=True)

    class Meta:
        db_table = 'photobomb_users'
        ordering = ['date_created']

    def __str__(self):
        return self.username

class Art(models.Model):
    CATEGORIES = [
        ('PT', 'painting'),
        ('GRA', 'Graphics Design'),
        ('MUS', 'music'),
        ('PHO', 'Photography'),
        ('MOD', 'modeling')
    ]
    image = models.CharField(max_length=255)
    user = models.ForeignKey("TheUser", on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)
    category = models.CharField(choices=CATEGORIES, max_length=3, default='PT')

    class Meta:
        ordering = ['category']

    def __str__(self):
        return self.user.username


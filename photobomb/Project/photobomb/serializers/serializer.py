from rest_framework import serializers
from photobomb.models import Art

class ArtSerializer(serializers.Serializer):
    class Meta:
        model = Art
        fields = '__all__'    
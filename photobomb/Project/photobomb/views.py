from django.shortcuts import render, get_object_or_404
from django.http import request, HttpResponse, JsonResponse
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Art
from .serializers.serializer import ArtSerializer

# Create your views here.

def index(request):
    return render(request, 'index.html')


class ArtViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving Art collections.
    """
    def list(self, request):
        "method: GET"
        queryset = Art.objects.all()
        serializer = ArtSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        "method: GET params: pk"
        queryset = Art.objects.all()
        single_object = get_object_or_404(queryset, pk=pk)
        serializer = ArtSerializer(single_object)
        return Response(serializer.data, status=201)

    def destroy(self, request, pk=None):
        "method: DELETE params: pk"
        queryset = Art.objects.all()
        single_object_to_be_deleted = get_object_or_404(queryset, pk=pk)
        single_object_to_be_deleted.delete()
        return Response(status=204)

    def update(self, request, pk):
        "method: PUT, params: pk"
        old_object = Art.objects.get(pk=pk)
        serializer = ArtSerializer(old_object, request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=203)
        return Response(status=500)

    def create(self, request):
        "method: POST"
        serializer = ArtSerializer(request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=203)
        return Response(serializer.errors, status=500)








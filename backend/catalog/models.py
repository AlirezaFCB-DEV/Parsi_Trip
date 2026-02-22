from django.db import models

# Create your models here.

class Product(models.Model) :
    category = models.ForeignKey(model="Category" , on_delete=models.PROTECT , related_name="products")
    brand = models.ForeignKey(model = "Brand" , on_delete=models.SET_NULL , null=True , blank=True) 
    
    weight = models.DecimalField(max_digits=8 , decimal_places=2 , null=True , blank=True)
    sku = models.CharField(max_length=50 , unique=True)
    discount_percent = models.PositiveIntegerField(null=True , blank=True)
    
    title = models.CharField(max_length=255) #! Field
    slug = models.SlugField(unique=True) #! url field
    
    description = models.TextField() #! Desc
    category = models.ForeignKey() #! category
    
    price = models.DecimalField(max_digits=12, decimal_places=2) #! price
    stock = models.PositiveIntegerField(default=0) #! in stock
    
    is_active = models.BooleanField(default=True) #! is active
    
    created_at = models.DateTimeField(auto_now_add=True) #! date created
    updated_at = models.DateTimeField(auto_now=True) #! updated at
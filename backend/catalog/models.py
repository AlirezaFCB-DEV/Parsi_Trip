from django.db import models

# Create your models here.

class Product(models.Model) :
    category = models.ForeignKey("Category" , on_delete=models.PROTECT , related_name="products")
    brand = models.ForeignKey("Brand" , on_delete=models.SET_NULL , null=True , blank=True) 
    
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
    
class ProductAttribute(models.Model) :
    data_type_choices = [
        ("string" , "String"),
        ("bool" , "Bool"),
        ("date" , "Date"),
        ("float" , "Float"),
        ("decimal" , "Decimal"),
        ("long_text" , "Long Text"),
        ("integer" , "Integer")
    ]
    
    name = models.CharField(max_length=255 , unique=True)
    label = models.CharField(max_length=255)
    data_type = models.CharField(choices=data_type_choices , max_length=30)
    is_filterable = models.BooleanField(default=False)
    is_searchable = models.BooleanField(default=True)
    
    def __str__(self):
        return self.label
    
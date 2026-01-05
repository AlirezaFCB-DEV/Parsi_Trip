import re

def is_email (email) :
    # email pattern
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern , email) is not None

def is_phone(phone_number) :
    pattern = r"^\+?\d{10,15}$"
    return re.match(pattern , phone_number) is not None
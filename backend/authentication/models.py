from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, password =None, **extra_field):
        if not email:
            raise ValueError("User Must hav an email")
        email = self.normalize_email(email)
        user = self.model(email = email , **extra_field)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password , **extrafields):
        extrafields.setdefault('is_active' ,True)
        extrafields.setdefault('is_staff',True)
        extrafields.setdefault('is_superuser',True)
        if extrafields.get('is_active') is not True:
            raise ValueError('Suer user must be active')
        if extrafields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser True")
        if extrafields.get('is_staff') is not True:
            raise ValueError("SuperUser must be is_staff")
        
        return self.create_user(email, password, **extrafields)

    

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=256, unique=True)
    username = models.CharField(max_length=50,unique=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_short_name(self):
        return self.username

    def __str__(self):
        return self.email




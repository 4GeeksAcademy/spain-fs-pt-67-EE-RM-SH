from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import Column, ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role  = db.Column(db.String(120), unique=True, nullable=False)
    name  = db.Column(db.String(120), unique=True, nullable=False)
    lastname  = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            # do not serialize the password, its a security breach
        }

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import Column, ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role  = db.Column(db.String(120), unique=True, nullable=False)
    name  = db.Column(db.String(120), unique=True, nullable=False)
    lastname  = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            # do not serialize the password, its a security breach
        }
    
class Courses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
    
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price
        }


class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url_video = db.Column(db.String(120), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey(Courses.id), nullable=False)
   

    def serialize(self):
        return {
            "id": self.id,
            "url_video": self.url_video,
            "category": self.category,
            "title": self.title,
            "description": self.description,
            "author": self.author,
            "user_id": self.user_id,
            "course_id": self.course_id
        }
    

class Orders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    methods_payment = db.Column(db.String(120), unique=True, nullable=False)
    payment_date = db.Column(db.String(120), unique=True, nullable=False)
    total = db.Column(db.String(120), unique=True, nullable=False)
    status = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "methods_payment": self.methods_payment,
            "payment_date": self.payment_date,
            "total": self.total,
            "status": self.status,
            "user_id": self.user_id
        }
    
class Order_item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey(Courses.id), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey(Orders.id), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "course_id": self.course_id,
            "order_id": self.order_id,
        }
    
class Courses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
    
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price
        }


class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url_video = db.Column(db.String(120), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey(Courses.id), nullable=False)
   

    def serialize(self):
        return {
            "id": self.id,
            "url_video": self.url_video,
            "category": self.category,
            "title": self.title,
            "description": self.description,
            "author": self.author,
            "user_id": self.user_id,
            "course_id": self.course_id
        }
    

class Orders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    methods_payment = db.Column(db.String(120), unique=True, nullable=False)
    payment_date = db.Column(db.String(120), unique=True, nullable=False)
    total = db.Column(db.String(120), unique=True, nullable=False)
    status = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "methods_payment": self.methods_payment,
            "payment_date": self.payment_date,
            "total": self.total,
            "status": self.status,
            "user_id": self.user_id
        }
    
class Order_item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey(Courses.id), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey(Orders.id), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "course_id": self.course_id,
            "order_id": self.order_id,
        }





  
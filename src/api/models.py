from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id= db.Column(db.Integer, primary_key=True)
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

class Lesson(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    url_video= db.Column(db.String(120), unique=True, nullable=False)
    category= db.Column(db.String(120), unique=True, nullable=False)
    title= db.Column(db.String(120), unique=True, nullable=False)
    description= db.Column(db.String(120), unique=True, nullable=False)
    author= db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "category": self.category,
            "title": self.title,
            "description": self.description,
            "author": self.author
            # do not serialize the password, its a security breach
        }
    




  
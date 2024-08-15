from flask import Blueprint, request, jsonify, abort
from api.models import db, User, Courses, Lesson, Orders, Order_item
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, get_jwt
from datetime import timedelta
# import redis
from api.models import db
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_cors import CORS

api = Blueprint("api", __name__)
CORS(api)

current_user = User.name


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200


@api.route('/registration', methods=['POST'])
def create_user():
    body = request.json
    hashed_password = generate_password_hash(body["password"]).decode('utf-8') 
    me = User(name=body["name"], lastname=body["lastname"], email=body["email"], password= hashed_password, role=body["role"] , is_active=True)
    db.session.add(me)
    db.session.commit()
    access_token = create_access_token(identity=me.email)
    response_body = {
        "msg": "Ok",
        "id": me.id,
        "access_token": access_token
    }
    return jsonify(response_body), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_query = User.query.filter_by(email=email).first()
    is_valid = check_password_hash(user_query.password, password) 
    print(user_query.serialize())
    if email != user_query.email or not is_valid:
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/logout", methods=["DELETE"])
def logout():
    # Obtener el JWT del usuario
    jti = get_jwt()["jti"]  # jti es el identificador del JWT
    
    # Añadir el jti a la blocklist
    # jwt_redis_blocklist.set(jti, "", ex=timedelta(days=30)) # Ejemplo con Redis
    
    return jsonify(jti), 200


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    return jsonify(user.serialize())


@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    data = request.get_json()
    user.role = data['role']
    user.name = data['name']
    user.lastname = data['lastname']
    user.email = data['email']
    user.password = data['password']
    user.is_active = data['is_active']
    db.session.commit()
    return jsonify(user.serialize())

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    db.session.delete(user)
    db.session.commit()
    return "", 204

@api.route("/courses", methods=["GET"])
@jwt_required()
def get_courses():
   
    courses = Courses.query.all()
    return jsonify([course.serialize() for course in courses])

@api.route("/course/<int:id>", methods=["GET"])
@jwt_required()
def get_course(id):
    
    course = Courses.query.get(id)
    if not course:
        abort(404)
    return jsonify(course.serialize())

@api.route('/course', methods=['POST'])
@jwt_required()
def create_course():
   
    data = request.get_json()
    new_course = Courses(
        name=data['name'],
        description=data['description'],
        clases=data['clases'],
        price_original=data['price_original'],
        price=data['price']
    )
    db.session.add(new_course)
    db.session.commit()
    return jsonify(new_course.serialize()), 201

@api.route('/course/<int:id>', methods=['PUT'])
@jwt_required()
def update_course(id):
    
    course = Courses.query.get(id)
    if not course:
        abort(404)
    data = request.get_json()
    course.name = data['name']
    course.description = data['description']
    course.clases = data['clases']
    course.price_original = data['price_original']
    course.price = data['price']
    
    db.session.commit()
    return jsonify(course.serialize())

@api.route('/course/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_course(id):
    course = Courses.query.get(id)
    if not course:
        abort(404)
    db.session.delete(course)
    db.session.commit()
    return '', 204

@api.route('/lessons', methods=['GET'])
@jwt_required()
def get_lessons():
    lessons = Lesson.query.all()
    return jsonify([lesson.serialize() for lesson in lessons])

@api.route('/lesson/<int:id>', methods=['GET'])
@jwt_required()
def get_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    return jsonify(lesson.serialize())

@api.route('/lesson', methods=['POST'])
@jwt_required()
def create_lesson():
    data = request.get_json()
    new_lesson = Lesson(
        url_video=data['url_video'],
        category=data['category'],
        title=data['title'],
        description=data['description'],
        author=data['author'],
        user_id=data['user_id'],
        course_id=data['course_id']
    )
    db.session.add(new_lesson)
    db.session.commit()
    return jsonify(new_lesson.serialize()), 201

@api.route('/lesson/<int:id>', methods=['PUT'])
@jwt_required()
def update_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    data = request.get_json()
    lesson.url_video = data['url_video']
    lesson.category = data['category']
    lesson.title = data['title']
    lesson.description = data['description']
    lesson.author = data['author']
    lesson.user_id = data['user_id']
    lesson.course_id = data['course_id']
    db.session.commit()
    return jsonify(lesson.serialize())

@api.route('/lesson/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    db.session.delete(lesson)
    db.session.commit()
    return '', 204

@api.route('/orders', methods=['GET'])
@jwt_required()
def get_orders():
    orders = Orders.query.all()
    return jsonify([order.serialize() for order in orders])

@api.route('/order/<int:id>', methods=['GET'])
@jwt_required()
def get_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    return jsonify(order.serialize())

@api.route('/order', methods=['POST'])
@jwt_required()
def create_order():
    data = request.get_json()
    new_order = Orders(
        user_id=data['user_id'],
        methods_payment=data['methods_payment'],
        payment_date=data['payment_date'],
        total=data['total'],
        status=data['status']
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify(new_order.serialize()), 201

@api.route('/order/<int:id>', methods=['PUT'])
@jwt_required()
def update_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    data = request.get_json()
    order.user_id = data['user_id']
    order.methods_payment = data['methods_payment']
    order.payment_date = data['payment_date']
    order.total = data['total']
    order.status = data['status']
    db.session.commit()
    return jsonify(order.serialize())

@api.route('/order/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    db.session.delete(order)
    db.session.commit()
    return '', 204

@api.route('/order_items', methods=['GET'])
@jwt_required()
def get_order_items():
    order_items = Order_item.query.all()
    return jsonify([order_item.serialize() for order_item in order_items])

@api.route('/order_item/<int:id>', methods=['GET'])
@jwt_required()
def get_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    return jsonify(order_item.serialize())

@api.route('/order_item', methods=['POST'])
@jwt_required()
def create_order_item():
    data = request.get_json()
    new_order_item = Order_item(
        quantity=data['quantity'],
        course_id=data['course_id'],
        order_id=data['order_id']
    )
    db.session.add(new_order_item)
    db.session.commit()
    return jsonify(new_order_item.serialize()), 201

@api.route('/order_item/<int:id>', methods=['PUT'])
@jwt_required()
def update_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    data = request.get_json()
    order_item.quantity = data['quantity']
    order_item.course_id = data['course_id']
    order_item.order_id = data['order_id']
    db.session.commit()
    return jsonify(order_item.serialize())

@api.route('/order_item/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    db.session.delete(order_item)
    db.session.commit()
    return '', 204


@api.route("/", methods=["GET"])
def home():
    response_body = {
        "message": "Bienvenido a la página principal"
    }
    return jsonify(response_body), 200

@api.route("/blog", methods=["GET"])
def blog():
    response_body = {
        "message": "Bienvenido al blog"
    }
    return jsonify(response_body), 200


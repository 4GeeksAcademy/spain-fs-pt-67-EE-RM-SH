from flask import Blueprint, request, jsonify, abort
from api.models import db, User, Courses, Lesson, Orders, Order_item
api = Blueprint("api", __name__)

@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200
@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])
@api.route("/user/<int:id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    return jsonify(user.serialize())
@api.route("/user", methods=["POST"])
def create_user():
    data = request.get_json()
    new_user = User(
        role=data["role"],
        name=data["name"],
        lastname=data["lastname"],
        email=data["email"],
        password=data["password"],
        is_active=data["is_active"]
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201
@api.route("/user/<int:id>", methods=["PUT"])
def update_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    data = request.get_json()
    user.role = data["role"]
    user.name = data["name"]
    user.lastname = data["lastname"]
    user.email = data["email"]
    user.password = data["password"]
    user.is_active = data["is_active"]
    db.session.commit()
    return jsonify(user.serialize())
@api.route("/user/<int:id>", methods=["DELETE"])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        abort(404)
    db.session.delete(user)
    db.session.commit()
    return "", 204
@api.route("/courses", methods=["GET"])
def get_courses():
    courses = Courses.query.all()
    return jsonify([course.serialize() for course in courses])
@api.route("/course/<int:id>", methods=["GET"])
def get_course(id):
    course = Courses.query.get(id)
    if not course:
        abort(404)
    return jsonify(course.serialize())
@api.route("/course", methods=["POST"])
def create_course():
    data = request.get_json()
    new_course = Courses(
        name=data["name"],
        description=data["description"],
        price=data["price"]
    )
    db.session.add(new_course)
    db.session.commit()
    return jsonify(new_course.serialize()), 201
@api.route("/course/<int:id>", methods=["PUT"])
def update_course(id):
    course = Courses.query.get(id)
    if not course:
        abort(404)
    data = request.get_json()
    course.name = data["name"]
    course.description = data["description"]
    course.price = data["price"]
    db.session.commit()
    return jsonify(course.serialize())
@api.route("/course/<int:id>", methods=["DELETE"])
def delete_course(id):
    course = Courses.query.get(id)
    if not course:
        abort(404)
    db.session.delete(course)
    db.session.commit()
    return "", 204
@api.route("/lessons", methods=["GET"])
def get_lessons():
    lessons = Lesson.query.all()
    return jsonify([lesson.serialize() for lesson in lessons])
@api.route("/lesson/<int:id>", methods=["GET"])
def get_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    return jsonify(lesson.serialize())
@api.route("/lesson", methods=["POST"])
def create_lesson():
    data = request.get_json()
    new_lesson = Lesson(
        url_video=data["url_video"],
        category=data["category"],
        title=data["title"],
        description=data["description"],
        author=data["author"],
        user_id=data["user_id"],
        course_id=data["course_id"]
    )
    db.session.add(new_lesson)
    db.session.commit()
    return jsonify(new_lesson.serialize()), 201
@api.route("/lesson/<int:id>", methods=["PUT"])
def update_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    data = request.get_json()
    lesson.url_video = data["url_video"]
    lesson.category = data["category"]
    lesson.title = data["title"]
    lesson.description = data["description"]
    lesson.author = data["author"]
    lesson.user_id = data["user_id"]
    lesson.course_id = data["course_id"]
    db.session.commit()
    return jsonify(lesson.serialize())
@api.route("/lesson/<int:id>", methods=["DELETE"])
def delete_lesson(id):
    lesson = Lesson.query.get(id)
    if not lesson:
        abort(404)
    db.session.delete(lesson)
    db.session.commit()
    return "", 204
@api.route("/orders", methods=["GET"])
def get_orders():
    orders = Orders.query.all()
    return jsonify([order.serialize() for order in orders])
@api.route("/order/<int:id>", methods=["GET"])
def get_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    return jsonify(order.serialize())
@api.route("/order", methods=["POST"])
def create_order():
    data = request.get_json()
    new_order = Orders(
        user_id=data["user_id"],
        methods_payment=data["methods_payment"],
        payment_date=data["payment_date"],
        total=data["total"],
        status=data["status"]
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify(new_order.serialize()), 201
@api.route("/order/<int:id>", methods=["PUT"])
def update_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    data = request.get_json()
    order.user_id = data["user_id"]
    order.methods_payment = data["methods_payment"]
    order.payment_date = data["payment_date"]
    order.total = data["total"]
    order.status = data["status"]
    db.session.commit()
    return jsonify(order.serialize())
@api.route("/order/<int:id>", methods=["DELETE"])
def delete_order(id):
    order = Orders.query.get(id)
    if not order:
        abort(404)
    db.session.delete(order)
    db.session.commit()
    return "", 204
@api.route("/order_items", methods=["GET"])
def get_order_items():
    order_items = Order_item.query.all()
    return jsonify([order_item.serialize() for order_item in order_items])
@api.route("/order_item/<int:id>", methods=["GET"])
def get_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    return jsonify(order_item.serialize())
@api.route("/order_item", methods=["POST"])
def create_order_item():
    data = request.get_json()
    new_order_item = Order_item(
        quantity=data["quantity"],
        course_id=data["course_id"],
        order_id=data["order_id"]
    )
    db.session.add(new_order_item)
    db.session.commit()
    return jsonify(new_order_item.serialize()), 201
@api.route("/order_item/<int:id>", methods=["PUT"])
def update_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    data = request.get_json()
    order_item.quantity = data["quantity"]
    order_item.course_id = data["course_id"]
    order_item.order_id = data["order_id"]
    db.session.commit()
    return jsonify(order_item.serialize())
@api.route("/order_item/<int:id>", methods=["DELETE"])
def delete_order_item(id):
    order_item = Order_item.query.get(id)
    if not order_item:
        abort(404)
    db.session.delete(order_item)
    db.session.commit()
    return "", 204
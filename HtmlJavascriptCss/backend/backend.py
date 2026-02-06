from flask import Flask, request, jsonify
from flask_cors import CORS

port = "6666"
url = "localhost"


app = Flask(__name__)
CORS(app)



@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/users")
def hello_users():
    return "<p>Hello, World!</p>"

@app.route("/process", methods = ["POST"])
def process_data():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No body in message"}), 400
    
    name = data.get('name','Stranger')

    response = {
        "status": "ok",
        "message": f"I've saved the user:{name}"
    }

    return jsonify(response), 200

" Recibo cosas, proceso cosas, guardo cosas y o regreso cosas"
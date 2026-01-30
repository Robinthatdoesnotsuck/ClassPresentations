from flask import Flask
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

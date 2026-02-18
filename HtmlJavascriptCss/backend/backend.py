from dotenv import loadenv
import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime

port = "6666"
url = "localhost"

username = os.environ.get("POSTGRES_USER")
password = os.enrion.get("POSTGRES_PASSWORD")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABSE_URI"] = 'postgresql://username:password@localhost:5432/myapp'
CORS(app)

db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime, default = datetime.datetime.utcnow)

@app.route("/process", methods = ["POST"])
def process_data():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No body in message"}), 400
    
    name = data.get('name','Stranger')
    new_user = Users(username= data['username'], email = email['email'])
    db.session.add(new_user)
    db.session.commit()
    response = {
        "status": "ok",
        "message": f"I've saved the user:{name}"
    }
    print(response)
    return jsonify(response), 200

CRUD
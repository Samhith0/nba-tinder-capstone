import logging
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello, World!"})

@app.route("/status", methods=["GET"])
def status():
    return jsonify({"status": "running"})

if __name__ == "__main__":
    app.run(debug=True)
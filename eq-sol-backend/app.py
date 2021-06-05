from flask import Flask, jsonify
from flask.globals import request
from flask_cors import CORS, cross_origin 
app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['POST'])
def index():
    data = request.get_json()

    EqnImg = data['image']
    return { 'id': 1,
        'Eqn':'x + 3 = 23',
       'TypeEqn':'linear Equation',
       'EqnAns':'x = 4',
       'image':EqnImg
       }
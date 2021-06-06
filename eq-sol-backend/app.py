from flask import Flask
from flask.globals import request
from flask_cors import CORS 
from model import model 

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def index():
    data = request.get_json()
    image = data['image']
    return model(image)
    # return { 'id': 1,
    #     'Eqn':'4+5',
    #    'TypeEqn':'Connected to backend',
    #    'EqnAns':'9',
    #    'image':'EqnImg'
    #    }


    
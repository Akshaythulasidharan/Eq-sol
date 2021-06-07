from flask import Flask
from flask.globals import request
from flask_cors import CORS 
from werkzeug.utils import secure_filename
import base64
import os
from model import model 
from io import BytesIO
from flask import Flask, flash, request, redirect, url_for
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

CORS(app)

image_req_args = reqparse.RequestParser()
image_req_args.add_argument("image", type=str)


@app.route('/api', methods=['POST'])
def index():

    args = image_req_args.parse_args()
    image = BytesIO(base64.urlsafe_b64decode(args['image']))
    Result  = model(image)
    print(Result)

    return Result 
    # return { 'id': 1,
    #     'Eqn':'4+5',
    #    'TypeEqn':'Connected to backend',
    #    'EqnAns':'9',
    #    'image':'EqnImg'
    #    }


    
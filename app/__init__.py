from flask import Flask, render_template, request, Markup, jsonify

# For dataset reading and writing
import pandas as pd

unlabeled_dataset = pd.read_csv('./dataset/all_unlabeled_data.tsv', sep='\t')


# get a random data
def get_random_data():
	data = unlabeled_dataset.sample().values.tolist()
	return data[0]

def convert_str(data):
	return Markup(data[3].replace('<MEDICINE>', '<span class="medicine">'+data[1]+'</span>').replace('<EFFECT>', '<span class="effect">'+data[2]+'</span>'))


# labeled_dataset = 

app = Flask(__name__)

@app.route('/')
@app.route('/index', methods=['GET'])
def index():
	
	return render_template('index.html')

@app.route('/getdata', methods=['GET'])
def handle_getdata():
	data = get_random_data()
	_id=str(data[0])
	text=convert_str(data)
	d = {'_id': _id, 'text': text}
	return jsonify(d)

@app.route('/submit', methods=['POST'])
def handle_submit():
	print('---------------------')
	print(request.form)
	print('---------------------')
	data = get_random_data()
	_id=str(data[0])
	text=convert_str(data)
	d = {'_id': _id, 'text': text}
	return jsonify(d)
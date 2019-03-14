from flask import Flask, render_template, request, Markup, jsonify

# For dataset reading and writing
import pandas as pd
from pathlib import Path

unlabeled_dataset = pd.read_csv('./dataset/all_unlabeled_data.tsv', sep='\t')

out_path = './dataset/labeled_dataset.pkl'
out_file = Path(out_path)
if out_file.exists():
    labeled_dataset = pd.read_pickle(out_path)
else:
    labeled_dataset = pd.DataFrame(columns=['tagger_name', 'id', 'medicine', 'effect', 'text', 'relation', 'outcome', 'case'])

# get a random data
def get_random_data():
	data = unlabeled_dataset.sample().values.tolist()
	return data[0]

def convert_str(data):
	return Markup(data[3].replace('<MEDICINE>', '<span class="medicine">'+data[1]+'</span>').replace('<EFFECT>', '<span class="effect">'+data[2]+'</span>'))



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
	global labeled_dataset

	print(request.form)
	tagger_name = request.form.get('tagger_name', '')
	_id = int(request.form['_id'])
	medicine = unlabeled_dataset.loc[_id, 'medicine']
	effect = unlabeled_dataset.loc[_id, 'effect']
	text = unlabeled_dataset.loc[_id, 'text']
	relation = request.form['relation']
	if relation in ['symptom_medicine', 'medicine_side', 'medicine_withdrawal']:
		if relation == 'symptom_medicine':
			outcome = request.form['outcome_symptom_medicine']
		elif relation == 'medicine_side':
			outcome = request.form['outcome_medicine_side']
		elif relation ==  'medicine_withdrawal':
			outcome = request.form['outcome_medicine_withdrawal']

		case = request.form['case']


		if case != 'null':
			labeled_dataset = labeled_dataset.append(
		            {
		             'tagger_name': tagger_name,
		             'id': _id,
		             'medicine': medicine,
		             'effect':effect,
		             'text': text,
		             'relation': relation,
		             'outcome': outcome,
		             'case': case
		            },
		        ignore_index=True)
		else:
			labeled_dataset = labeled_dataset.append(
		            {
		             'tagger_name': tagger_name,
		             'id': _id,
		             'medicine': medicine,
		             'effect':effect,
		             'text': text,
		             'relation': relation,
		             'outcome': outcome
		            },
		        ignore_index=True)
	else:
		labeled_dataset = labeled_dataset.append(
            {
             'tagger_name': tagger_name,
             'id': _id,
             'medicine': medicine,
             'effect': effect,
             'text': text,
             'relation': relation
            },
        ignore_index=True)
	labeled_dataset.to_pickle(out_path)


	# print('---------------------')
	# print(request.form)
	# print('---------------------')
	data = get_random_data()
	_id=str(data[0])
	text=convert_str(data)
	d = {'_id': _id, 'text': text}
	return jsonify(d)
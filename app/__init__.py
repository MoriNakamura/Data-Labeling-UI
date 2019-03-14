from flask import Flask, render_template, request, Markup

# For dataset reading and writing
import pandas as pd

unlabeled_dataset = pd.read_csv('./dataset/all_unlabeled_data.tsv', sep='\t')


# labeled_dataset = 

app = Flask(__name__)

@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def main():
	if request.method == 'GET':
		data = get_random_data()
		print(data)
		return render_template('index.html', _id=str(data[0]), text=convert_str(data))
	else:
		#TODO receive data
		return ender_template('index.html')

# get a random data
def get_random_data():
	data = unlabeled_dataset.sample().values.tolist()
	return data[0]

def convert_str(data):
	return Markup(data[3].replace('<MEDICINE>', '<span class="medicine">'+data[1]+'</span>').replace('<EFFECT>', '<span class="effect">'+data[2]+'</span>'))
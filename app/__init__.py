from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def main():
	if request.method == 'GET':
		return render_template('index.html')
	else:
		#TODO receive data
		return ender_template('index.html')
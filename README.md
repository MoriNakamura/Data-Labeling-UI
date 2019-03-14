# Data-Labeling-UI
A simple flask-based web interface for labeling dataset. My first web application.

This project should only be run within a safe network environment and executed by trusted labellers.

Right now it only supports my own dataset and labels.

# DO NOT run it in a public environment!

When I have some time, I will attempt to add more features such as login.

(I tried to apply a simple login mechanism with [flask-login](https://github.com/maxcountryman/flask-login), but didn't have time to finish it)

## To start this thing

First, clone it.

    $ git clone https://github.com/phejimlin/esun_hackathon.git
    $ cd esun_hackathon

Create a virtualenv, and activate this: 

    $ python3 -m venv env
    $ source env/bin/activate

After, install all necessary to run:

    $ pip install -r requirements.txt

Than, run the application:

	$ python run.py

To see your application, access this url in your browser: 

	http://localhost:5000
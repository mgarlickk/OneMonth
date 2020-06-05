from imdb import IMDb
from flask import Flask, render_template, request

app = Flask(__name__)
# create an instance of the IMDb class
ia = IMDb()

movie = ia.get_movie('0133093')
directors_list = movie['directors']
top = ia.get_top250_movies()


@app.route('/')
def index():
    return render_template('index.html', movie=movie)

@app.route('/directors')
def directors():
    return render_template('directors.html', directors=directors_list)

@app.route('/top_250')
def top_250():
    return render_template('top_250.html', top_250=top)

@app.route('/genre')
def genres():
    return render_template('genres.html', genres=genres)

@app.route('/genres')
def json():
    return render_template('genres.html')




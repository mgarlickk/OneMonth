# App for TMDB API

import tmdbsimple as tmdb
from flask import Flask, render_template, request, session

app = Flask(__name__)

tmdb.API_KEY = '5de7a0eee27b6eae8c0e543c8ac33ed8'

#for s in search.results:
#    print(s['video'], s['title'], s['id'], s['release_date'], s['popularity'])

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

@app.route('/movie_search', methods=['POST', 'GET'])
def movie_search():
    if request.method == 'POST':
        user_search = request.form.get('nm')
        search = tmdb.Search()
        response = search.movie(query=user_search)
        poster_base = 'http://image.tmdb.org/t/p/w300'
        # sort = sorted(response, key=lambda d: d['vote_average'])
        return render_template('movie_search.html', movies=search.results, last_search=user_search, poster_base=poster_base)
    else:
        return render_template('movie_search.html')

@app.route('/tv_search', methods=['POST', 'GET'])
def tv_search():
    if request.method == 'POST':
        user_search = request.form.get('nm')
        search = tmdb.Search()
        response = search.tv(query=user_search)
        poster_base = 'http://image.tmdb.org/t/p/w300'
        # sort = sorted(response, key=lambda d: d['vote_average'])
        return render_template('tv_search.html', shows=search.results, last_search=user_search, poster_base=poster_base)
    else:
        return render_template('tv_search.html')

@app.route('/people_search', methods=['POST', 'GET'])
def people_search():
    if request.method == 'POST':
        user_search = request.form.get('nm')
        search = tmdb.Search()
        response = search.person(query=user_search)
        poster_base = 'http://image.tmdb.org/t/p/w300'
        # sort = sorted(response, key=lambda d: d['vote_average'])
        return render_template('people_search.html', people=search.results, last_search=user_search, poster_base=poster_base)
    else:
        return render_template('people_search.html')



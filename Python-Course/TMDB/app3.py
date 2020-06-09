# App for TMDB API

import tmdbsimple as tmdb
from flask import Flask, render_template, request

app = Flask(__name__)

tmdb.API_KEY = '5de7a0eee27b6eae8c0e543c8ac33ed8'

#for s in search.results:
#    print(s['video'], s['title'], s['id'], s['release_date'], s['popularity'])

@app.route('/', methods=['POST', 'GET'])
def index():
    user_search = request.form.get('nm')
    search = tmdb.Search()
    response = search.movie(query=user_search)
    poster_base = 'http://image.tmdb.org/t/p/w300'
    return render_template('TMDB_testing.html', movies=search.results, last_search=user_search, poster_base=poster_base)



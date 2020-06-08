# App for TMDB API

import tmdbsimple as tmdb
from flask import Flask, render_template, request

app = Flask(__name__)

tmdb.API_KEY = '5de7a0eee27b6eae8c0e543c8ac33ed8'

search = tmdb.Search()
response = search.movie(query='Ocean''s')
search_results = search.results
for s in search_results:
    print(s['title'], s['id'], s['release_date'], s['popularity'])

@app.route('/TMDB_testing')
def index():
    return render_template('TMDB_testing.html', result=search.results)
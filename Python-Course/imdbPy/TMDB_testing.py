import tmdbsimple as tmdb
tmdb.API_KEY = '5de7a0eee27b6eae8c0e543c8ac33ed8'

search = tmdb.Search()
response = search.movie(query='Ocean''s')
for s in search.results:
    print(s['title'], s['id'], s['release_date'], s['popularity'])
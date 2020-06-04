from imdb import IMDb
ia = IMDb()

top = ia.get_top250_movies()

def get_top_250():
    for movie in top:
        print(movie)

get_top_250()
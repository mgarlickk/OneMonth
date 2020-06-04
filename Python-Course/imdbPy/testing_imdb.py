from imdb import IMDb
ia = IMDb()

people = ia.search_person('test')
len(people)
for person in people:
    print(person)
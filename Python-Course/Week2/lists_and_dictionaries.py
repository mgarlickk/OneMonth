# Dictionaries and lists can be inside of each other

animal_sounds = {
    'cat': ['meow', 'purr'],
    'dog': ['woof', 'bark'],
    'fox': []
}

mattan = {'name': 'Mattan', 'height': 70, 'shoe size': 10.5, 'hair': 'Brown', 'eyes': 'Brown'}

chris = {'name': 'Chris', 'height': 68, 'shoe size': 10, 'hair': 'Brown', 'eyes': 'Brown'}

sarah = {'name': 'Sarah', 'height': 72, 'shoe size': 8, 'hair': 'Brown', 'eyes': 'Brown'}

people = [mattan, chris, sarah]

for person in people:
    names = person.get('name')
    heights = person.get('height')
    print(names + ' is ' + str(heights) + ' inches tall')
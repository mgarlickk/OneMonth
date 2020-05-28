the_count = [1, 2, 3, 4, 5]
stocks = ["AAPL", "GOOG", "TSLA"]
random_things = ["Puppies", 55, "Anthony Weiner", 1/2, ["Oh no", "A list in a list"]]

people = []
people.append('Matt')
people.append(4)

for person in people:
    print("person is", person)

another_list = random_things[-2]
print(another_list)
print(type(another_list))
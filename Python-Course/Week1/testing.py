import random

bars = ["Schoolbred's",
        "The Wren",
        "The Scratcher",
        "ACME",
        "Blind Barber",
        "Testing"]

people = ["Mattan",
        "Chris",
        "that person",
        "kanye west",
        "Samuel L. Jackson"]

random_bar = random.choice(bars)
random_person_one = random.choice(people)
random_person_two = random.choice(people)

if random_person_one == random_person_two:
  people_equal = True
  while people_equal == True:
    random_person_one = random.choice(people)
    break

for x in people:
        print(x)

print(f"How about you go to {random_bar} with " + random_person_one + ' and ' + random_person_two)



def greet(name):
    return f"Hey {name}!"

print(greet('matt'))
print(greet('guy'))


def concatenate(word_one='test', word_two='test2'): # default arguments will be overridden if passed into the function
    return word_one + word_two

print(concatenate('Matt ', 'Garlick'))


def age_in_dog_years(age):
    return age * 7

print(age_in_dog_years(20))
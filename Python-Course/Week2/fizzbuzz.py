
numbers = list(range(1, 101))

for number in numbers:
    if (number % 3 == 0) and (number % 5 == 0):
        print(str(number) + " FizzBuzz")
    elif number % 3 == 0:
        print(str(number) + " Fizz")
    elif number % 5 == 0:
        print(str(number) + " Buzz")
    else:
        print(number)
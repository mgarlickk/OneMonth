# Dictionaries are key value pairs. Use the key to finds its pair
states = {'NY': 'New York', 'PA': 'Pennsylvania', 'CA': 'California'}

# print(states['PA'])
print(states.get('FL', 'Not Found')) # Use the get function. The second criteria is what's returned if key is not found

# Get all keys in a dictionairy
print(states.keys())
# Get all values in a dictionairy
print(states.values())
# Add items to dictionairy
states['FL'] = 'Florida'

print(states)
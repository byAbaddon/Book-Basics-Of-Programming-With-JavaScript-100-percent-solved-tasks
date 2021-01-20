def animal_type(animal):
    switcher = {
        'dog': 'mammal',
        'crocodile': 'reptile',
        'tortoise': 'reptile',
        'snake': 'reptile'
    }

    return switcher.get(animal ,'unknown')


print(animal_type(input()))


'''
snake
#reptile 
'''

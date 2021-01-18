num, arg1, arg2 = [input() for _ in range(3)]

convertor_dict = {
    'm' : 1,     
    'mm': 1000,
    'cm': 100,
    'mi': 0.000621371192,
    'in': 39.3700787,
    'km': 0.001,
    'ft': 3.2808399,
    'yd': 1.0936133
  }

print(float(num) / convertor_dict[arg1] * convertor_dict[arg2])


'''
12
km
ft
#39370.0788
'''

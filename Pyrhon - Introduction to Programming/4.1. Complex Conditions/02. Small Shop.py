items, town, count = [input() for _ in range(3)]

items_dict = {
    'coffee' : {'Sofia' : 0.50, 'Plovdiv' : 0.40, 'Varna' : 0.45},
    'water' : {'Sofia' : 0.80, 'Plovdiv' : 0.70, 'Varna' : 0.70},
    'beer' : {'Sofia' : 1.20, 'Plovdiv' : 1.15, 'Varna' : 1.10},
    'sweets' : {'Sofia' : 1.45, 'Plovdiv' : 1.30, 'Varna' : 1.35},
    'peanuts' : {'Sofia' : 1.60, 'Plovdiv' : 1.50, 'Varna' : 1.55},
  }
  
print(round(items_dict[items][town] * float(count), 2))



'''
coffee
Varna
2
#0.90
'''

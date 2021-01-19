from math import floor

volume, pipe1, pipe2, hours = [float(input()) for _ in range(4)]
water = (pipe1 + pipe2) * hours
pool = floor(water / volume * 100)
p1 = floor(pipe1 * hours / water * 100)
p2 = floor(pipe2 * hours / water * 100)

if water > volume:
    print(f'For {hours} hours the pool overflows with {water - volume:.2f} liters.')
else:
    print(f'The pool is {pool}% full. Pipe 1: {p1}%. Pipe 2: {p2}%.')



'''
1000
100
120
3
#The pool is 66% full. Pipe 1: 45%. Pipe 2: 54%.
'''

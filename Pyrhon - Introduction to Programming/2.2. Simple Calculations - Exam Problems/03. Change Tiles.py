square, w_tiles, l_tiles, w_bench, l_bench = [float(input()) for _ in range(5)]
area_square = square ** 2
area_tiles = w_tiles * l_tiles
timeTiles = 0.2
area_bench = w_bench * l_bench
final_area = area_square - area_bench
number_tiles = final_area / area_tiles
final_time = number_tiles * timeTiles
           
print(f'{number_tiles:.2f}\n{final_time:.2f}')

'''
20
5
4
1
2
'''


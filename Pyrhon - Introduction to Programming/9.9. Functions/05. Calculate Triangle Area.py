def calculate_triangle_area(a, b):
    area = a * b / 2
    return area if len(str(area)) in range(9,100) else ('%g' %area)


print(calculate_triangle_area(float(input()), float(input())))


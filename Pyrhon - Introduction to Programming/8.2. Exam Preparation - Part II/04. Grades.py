students_count = int(input())
arg = [float(input()) for _ in range(students_count)]
sum_grades = sum(arg)

print(f'Top students: {len(list(filter(lambda el: el >= 5.00, arg))) / students_count * 100:.2f}%')
print(f'Between 4.00 and 4.99: {len(list(filter(lambda el: 4.00 <= el <= 4.99, arg))) / students_count * 100:.2f}%')
print(f'Between 3.00 and 3.99: {len(list(filter(lambda el: 3.00 <= el <= 3.99, arg))) / students_count * 100:.2f}%')
print(f'Fail: {len(list(filter(lambda el: 2.00 <= el <= 2.99, arg))) / students_count * 100:.2f}%')
print(f'Average: {(sum_grades / students_count):.2f}')



'''
6
2
3
4
5
6
2.2

Top students: 33.33%
Between 4.00 and 4.99: 16.67%
Between 3.00 and 3.99: 16.67%
Fail: 33.33%
Average: 3.70
'''

from math import floor,ceil

project_time, days, workers = [int(input()) for _ in range(3)]

working_days = days * 0.90
working_hours = working_days * workers * (8 + 2)
total_hours = abs(project_time - working_hours)

if working_hours >= project_time:
    print(f'Yes!{floor(total_hours)} hours left.')
else:
    print(f'Not enough time!{ceil(total_hours)} hours needed.')


'''
90
7
3
#Yes!99 hours left.
'''


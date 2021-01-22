ex_hour, ex_min, ar_hour, ar_min = [int(input()) for _ in range(4)]

exam_min = ex_min +  ex_hour * 60
arrive_min = ar_min + ar_hour * 60

if arrive_min > exam_min:
    print("Late")
elif exam_min - arrive_min <= 30:
    print("On time")
else:
    print("Early")

result = abs(exam_min - arrive_min)
if exam_min - arrive_min > 0:
    if result < 60:
        print(f"{result} minutes before the start")
    else:
        print(f"{result // 60}:{result % 60:02d} hours before the start")
elif arrive_min - exam_min > 0:
    if result < 60:
        print(f"{result} minutes after the start")
    else:
        print(f"{result // 60}:{result % 60:02d} hours after the start")



'''
10
00
10
00
#On time
'''

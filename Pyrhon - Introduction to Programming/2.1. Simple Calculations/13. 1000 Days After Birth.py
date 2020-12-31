from datetime import datetime, timedelta

day, month, year = list(map(lambda x: int(x), input().split('-')))
current_date = datetime(year, month, day)
date_more_1000_days = (current_date + timedelta(days=1000)).strftime('%d-%m-%Y')
print(date_more_1000_days)


'''
#wrong condition !!!
#That working...  100pts
#input : 25-02-1995
#otuput: 21-11-1997
'''

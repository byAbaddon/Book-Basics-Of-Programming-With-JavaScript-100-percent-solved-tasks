def get_day(day):
  switcher = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday',
  }

  return switcher.get(day , 'Error')


print(get_day(int(input())))


'''
1
#Monday
'''

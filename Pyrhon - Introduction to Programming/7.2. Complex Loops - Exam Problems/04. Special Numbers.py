num = int(input())
num_collection = ''

for i in range(1, 10):
    for j in range(1, 10):
        for k in range(1, 10):
            for l in range(1, 10):
              if num % i == 0 and num % j == 0 and num % k == 0 and num % l == 0:
                  num_collection += (str(i) + str(j) + str(k) + str(l) + ' ')

print(num_collection)


#11 //1111

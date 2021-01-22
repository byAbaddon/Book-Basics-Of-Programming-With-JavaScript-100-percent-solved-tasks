text = input()
sum_num = 0
catalog_list = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}

for l in text:
    if l in catalog_list:
        sum_num += catalog_list[l]

print(sum_num)



# hello

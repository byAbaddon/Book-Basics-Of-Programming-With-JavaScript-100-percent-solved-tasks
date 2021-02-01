def get_min(*args):
    return list(sorted(list(args)[0]))[0]

print(get_min([int(input()) for _ in range(3)]))

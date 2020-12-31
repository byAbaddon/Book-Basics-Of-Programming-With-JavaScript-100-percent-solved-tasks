x1, y1, x2, y2 = [float(input()) for _ in range(4)]
corX = max(x1, x2) - min(x1, x2)
corY = max(y1, y2) - min(y1, y2)

print(f'{corX * corY}\n{(corX + corY) * 2}')



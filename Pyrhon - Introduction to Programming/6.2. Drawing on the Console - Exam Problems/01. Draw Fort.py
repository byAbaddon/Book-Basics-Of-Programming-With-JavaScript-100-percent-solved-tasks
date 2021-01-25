n = int(input())
col_size = n // 2
mid_size = (2 * n - 2 * (n // 2) - 4)
#top
print(f"/{'^' * col_size}\\{'_' * mid_size}/{'^' * col_size}\\")
#middle
[print(f"|{' ' * (2 * n - 2)}|") for row in range(1, n - 2)]

print(f"|{' ' * (col_size + 1)}{('_' * mid_size)}{' ' * (col_size + 1)}|")
#bottom
print(f"\\{'_' * col_size}/{' ' * mid_size}\\{'_' * col_size}/")




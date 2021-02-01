def integer_to_base(n,base):
   convert_string = "0123456789ABCDEF"
   if n < base:
      return convert_string[n]
   else:
      return integer_to_base(n // base, base) + convert_string[n % base]

print(integer_to_base(int(input()), int(input())))

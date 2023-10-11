import math
from decimal import Decimal

# NaN (Not a Namber)
a = float('nan')
print(f'a: {a}')

# Modulo math
a = float('nan')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')

# Modulo decimal
a = Decimal('nan')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')
from sympy import solve
from sympy.abc import x, y, z, a, b
from sympy.parsing.sympy_parser import parse_expr

if "x" in s:
    try:
        solution = solve(s)
        print(solution[0])
    except:
        print("invalid equation")
else:
    print(eval(s))
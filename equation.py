from sympy import solve
from sympy import sympify
from sympy.abc import x, y, z, a, b
from sympy.parsing.sympy_parser import parse_expr

equation  = s.replace('x','*x')
if "x" in equation:
    try:
        solution = solve(equation)
        print(solution[0])
    except:
        print("invalid equation")
else:
    print(eval(equation))
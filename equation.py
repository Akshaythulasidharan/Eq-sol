from sympy import solve
from sympy import sympify
from sympy.abc import F, x, y, z, a, b
from sympy.parsing.sympy_parser import parse_expr

if '*' in s:
    t = s.replace('x','')
    s=t
  
if "x" in s:
    try:
        equation = s.replace('--','=')
        a = []
        for i in range(0,len(equation)):
            if i==0:
                continue
            if equation[i] == 'x':
                if equation[i-1] == '+' or equation[i-1] == '-' or equation[i-1] == '=':
                    continue
                else:
                    a.append(i)

        counts = 0
        for i in a:
            if counts == 0:
                counts=1
                equation = equation[:i] + '*' + equation[i:]
            else:
                i=i+counts
                equation = equation[:i] + '*' + equation[i:]
                counts+=1

        lhs =  parse_expr(equation.split("=")[0])
        rhs =  parse_expr(equation.split("=")[1])
        solution = solve(lhs-rhs)
        decSol = round(solution[0]*1.0,2)

        print(solution[0]) #fractional solution
        print(decSol) #decimal solution
    except:
        print("invalid equation")
else:
    print(eval(s))
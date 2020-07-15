# To continue, please consult the code grid in the manual.  Enter the code at row 2981, column 3075.

def compute(n):
    return (n * 252533) % 33554393

# Repeats indefinitely   
#    | 1   2   3   4   5   6  
# ---+---+---+---+---+---+---+
#  1 |  1   3   6  10  15  21
#  2 |  2   5   9  14  20
#  3 |  4   8  13  19
#  4 |  7  12  18
#  5 | 11  17
#  6 | 16

def main():
    row, col = 1, 1
    code = 20151125
    while(True):
        row -= 1
        col += 1
        if (row == 0):
            row = col
            col = 1
        code = compute(code)
        if row == 2981 and col == 3075:
            break
    print(code)
main()

print(sum([_.count('"') + _.count('\\')+2  for _ in open('day8.txt')]))
# Count backslashes
# Count quotes
# +2 since " -> "\
# 2117

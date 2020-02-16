from collections import defaultdict
from itertools import permutations

def run(f1='day13.txt'):
    with open(f1, 'r') as fp:
        text_from_file = fp.readlines()
    lines= [line.rstrip().split(" ") for line in text_from_file]

    d = defaultdict(lambda: defaultdict(dict))
    for l in lines:
        d[l[0]][l[-1][:-1]] = (-int(l[3])) if (l[2] == 'lose') else (int(l[3]))

    # part two
    for k in list(d.keys()):
        d['self'][k] = 0
        d[k]['self'] = 0

    people = [ _  for _ in d.keys()]

    people_at_party = len(people)

    maxSum = -1
    for p in permutations(people,people_at_party):
        newSum = 0
        for idx,val in enumerate(p):
            newSum += d[val][p[(idx+1)%people_at_party]]
            newSum += d[val][p[(idx-1)%people_at_party]]
        if newSum > maxSum:
            maxSum = newSum

    print(maxSum)

run()

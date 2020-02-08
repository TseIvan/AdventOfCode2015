from itertools import combinations
from functools import reduce
from operator import add
def run(f1='day17.txt'):
    with open(f1, 'r') as fp:
        text_from_file = fp.readlines()
    containers = list(map(lambda x:int(x),[line.strip('\n') for line in text_from_file]))

    equal_to_150 = 0
    min_container = 10**6
    for l  in range(1,len(containers)+1):
        for subset in combinations(containers,l):
                if reduce(add,subset) == 150:
                    if (l < min_container):
                        min_container = l
                        equal_to_150 = 1
                    elif (l == min_container):
                        equal_to_150 += 1
    print(equal_to_150) # 1304 #18
run()

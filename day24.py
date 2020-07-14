from itertools import combinations
from operator import mul
from functools import reduce

def quantumEntanglement(partition, weights):
    minimizer = sum(weights) // partition # smallest possible combination with x partition discard rest
    for index in range(len(weights)):
        qe = [reduce(mul, comb) for comb in combinations(weights, index) if sum(comb) == minimizer]
        if qe:
            print(min(qe))
            return # exit on first condition set no need to reconsider other groupings

def run(f1='day24.txt'):
    with open(f1, 'r') as fp:   
        text_from_file = fp.readlines()
        weights = [int(line.strip('\n')) for line in text_from_file]
    # quantumEntanglement(3, weights)
    quantumEntanglement(4, weights)
run()
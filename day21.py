import itertools
import copy
# Cost Damage Armor
weapon_shop={
"Dagger"        : [8,     4,       0],
"Shortsword"   : [10,     5,       0],
"Warhammer"    : [25,     6,       0],
"Longsword"   : [40,     7,       0],
"Greataxe"    : [ 74,     8,       0],
}

armor_shop={
    "None"      : [0,    0,         0],
    "Leather"      : [13,    0,       1],
    "Chainmail"    : [31,     0,      2],
    "Splintmail"   : [53,    0,       3],
    "Bandedmail"   : [75,    0,       4],
    "Platemail"   : [102,     0,       5],
}

ring_shop={
    "None"      : [0,    0,       0],
    "Damage +1"   : [25,     1,       0],
    "Damage +2"   : [50,    2,       0],
    "Damage +3"   : [100,     3,       0],
    "Defense +1"  : [20,     0,       1],
    "Defense +2"  : [40,     0,       2],
    "Defense +3"  : [80,     0,       3],
}

class Character:
    def __init__(self,hp,armor,damage,cost):
        self.health = hp
        self.armor = armor
        self.damage = damage
        self.cost = cost

    def takeDamage(self,damage):
        self.health -= (damage-self.armor)
        return

    def fatal(self):
        return int(self.health <= 0)

def runSimulation(player,boss):
    while(True):
        boss.takeDamage(player.damage)
        if (boss.fatal()): return True
        player.takeDamage(boss.damage)
        if (player.fatal()): return False

def play():

    minCost = 10**6
    maxCost = -1
    for weapon in weapon_shop.keys():
        for armor in armor_shop.keys():
            for ring in itertools.combinations(ring_shop.keys(),2):
                #Cost Damage Armor
                cost = weapon_shop[weapon][0] + armor_shop[armor][0] + ring_shop[ring[0]][0] + ring_shop[ring[1]][0]
                dmg = weapon_shop[weapon][1] + armor_shop[armor][1] + ring_shop[ring[0]][1] + ring_shop[ring[1]][1]
                arm = weapon_shop[weapon][2] + armor_shop[armor][2] + ring_shop[ring[0]][2] + ring_shop[ring[1]][2]
                player = Character(100,arm,dmg,cost)
                boss = Character(104,1,8,0)
                if (runSimulation(copy.deepcopy(player),copy.deepcopy(boss)) and (player.cost < minCost)):
                    minCost = player.cost
                if (not runSimulation(copy.deepcopy(player),copy.deepcopy(boss)) and (player.cost >= maxCost)):
                    maxCost = player.cost

    print(minCost)
    print(maxCost)
    return

play()

    # runSimluation works
    # For example, suppose you have 8 hit points, 5 damage, and 5 armor, and that the boss has 12 hit points, 7 damage, and 2 armor:
    # player = Character(8,5,5,0)
    # boss = Character(12,2,7,0)
    #
    # print(runSimulation(player,boss))

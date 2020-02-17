import itertools
# Cost Damage Armor
weapon_shop={
"Dagger"        : [8,     4,       0],
"Shortsword"   : [10,     5,       0],
"Warhammer"    : [25,     6,       0],
"Longsword"   : [40,     7,       0],
"Greataxe"    : [ 74,     8,       0],
}

armor_shop={
    "Leather"      : [13,    0,       1],
    "Chainmail"    : [31,     0,      2],
    "Splintmail"   : [53,    0,       3],
    "Bandedmail"   : [75,    0,       4],
    "Platemail"   : [102,     0,       5],
}

ring_shop={
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

    def getCost(self):
        return self.cost

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
    wep_iter = itertools.combinations(weapon_shop.keys(),1) # no dupes
    armor_iter = itertools.combinations(armor_shop.keys(),1) # no dupes
    ring_iter_1 = itertools.combinations(ring_shop.keys(),1) # no duplicates
    ring_iter_2 = itertools.combinations(ring_shop.keys(),2) # need to clean duplicates

    # print(*wep_iter)
    # [print(_) for _ in list(ring_iter_2)]

    # Can only be wep + ring, wep + ring 2, wep + armor + ring, wep + armor + ring2, wep + armor.
    # Need to run combination on each *iter then columnwise summation create character then run simulation, if success append player.cost into list.
    # Finally, run  arr.reduce( x,y => (x<y) ? (x) : (y))
    


    return

play()

    # runSimluation works
    # For example, suppose you have 8 hit points, 5 damage, and 5 armor, and that the boss has 12 hit points, 7 damage, and 2 armor:
    # player = Character(8,5,5,0)
    # boss = Character(12,2,7,0)
    #
    # print(runSimulation(player,boss))

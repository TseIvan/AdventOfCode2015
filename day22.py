import itertools
import copy
# Spell : [cost, damage, heal,]
weapon_shop={
"Missle"        : [53, 4, 9],
"Drain"         : [73, 2, 2],
"Shield"        : [113, 0, 0],
"Poison"        : [173, 0, 0],
"Recharge"      : [229, 0, 0],
}

class Character:
    def __init__(self,hp,armor,damage,cost):
        self.health = hp
        self.damage = damage
        self.cost = cost
        self.armor = armor
        self.mana = 500
        self.dot = 0

    def takeDamage(self,damage):
        self.health -= (damage-self.armor)

    def applyShield(self):
        self.armor += 7

    def applyPoison(self):
        return

    def applyRecharge(self):
        self.mana += 101

    def fatal(self):
        return int(self.health <= 0)

def runSimulation(player, boss):
    while(True):
        boss.takeDamage(player.damage)
        if (boss.fatal()): return True
        player.takeDamage(boss.damage)
        if (player.fatal()): return False

def play():

    minCost = 10**6
    maxCost = -1

    return

play()
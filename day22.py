import random

class Game:
    def __init__(self):
        self.state = None
        self.player = Character().player()
        self.boss = Character().boss()
        self.shield = False
        self.shield_timer = 0
        self.poison = False
        self.poison_timer = 0
        self.recharge = False
        self.recharge_timer = 0
        self.move = 'player'

    def apply_spell(self):
        if self.recharge:
            self.player.mana += 101
            self.recharge_timer += 1
            if self.recharge_timer == 5:
                self.recharge = False

        if self.shield:
            self.player.armor = 7
            self.shield_timer += 1
            if self.shield_timer == 6:
                self.shield = False
        else:
            self.player.armor = 0
        
        if self.poison:
            self.boss.health -= 3
            if self.boss.health <= 0:
                return 1
            self.poison_timer += 1
            if self.poison_timer == 6:
                self.poison = False
        return 0

    def play(self):
        while (True):
            if (self.apply_spell()):
                break

            if self.move == 'player':
                self.player.health -= 1
                if self.player.health <= 0:
                    break

                spells = [53, 73, 113, 173, 229]
                if (self.shield):
                    spells.remove(113)
                
                if (self.poison):
                    spells.remove(173)
            
                if (self.recharge):
                    spells.remove(229)
                
                if self.player.mana < min(spells):
                    break
                
                choice = random.choice(spells)

                self.player.mana_used += choice
                self.player.mana -= choice

                if choice == 53:
                    self.boss.health -= 4
                    if self.boss.health <= 0:
                        break

                elif choice == 73:
                    self.boss.health -= 2
                    if self.boss.health <= 0:
                        break
                    self.player.health += 1

                elif choice == 113:
                    self.player.armor = 7
                    self.shield = True
                    self.shield_timer = 0

                elif choice == 173:
                    self.poison = True
                    self.poison_timer = 0
                
                elif choice == 229:
                    self.recharge = True
                    self.recharge_timer = 0
                
                self.move = 'boss'
            else:
                self.player.health -= (self.boss.damage - self.player.armor)
                if self.player.health <= 0:
                    break
                self.move = 'player'
        
        if self.boss.health <= 0 and self.player.health > 0:
            return self.player.mana_used
        else:
            return 1000000

class Character:
    def __init__(self):
        self.health = 0
        self.armor = 0
        self.mana = 0
        self.damage = 0
        self.mana_used = 0

    def boss(self):
        self.health = 51
        self.damage = 9
        return self

    def player(self):
        self.health = 50
        self.mana = 500
        return self

minimum = 100000
while True:
    g = Game()
    mana = g.play()
    if mana <= minimum:
        minimum = mana
        print(minimum) 

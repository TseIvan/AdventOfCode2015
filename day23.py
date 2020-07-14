# hlf r sets register r to half its current value, then continues with the next instruction.
# tpl r sets register r to triple its current value, then continues with the next instruction.
# inc r increments register r, adding 1 to it, then continues with the next instruction.
# jmp offset is a jump; it continues with the instruction offset away relative to itself.
# jie r, offset is like jmp, but only jumps if register r is even ("jump if even").
# jio r, offset is like jmp, but only jumps if register r is 1 ("jump if one", not odd).
import sys  
  
sys.setrecursionlimit(100000)

storage = {
    'a': 1,
    'b': 0,
}

def execute(index, instruction):
    try: 
        command = instruction[index].split(" ")
        print(command)
        # # split by space
        if command[0] == 'hlf':
            storage[command[1]] = storage[command[1]]//2
            execute(index+1, instruction)
        elif command[0] == 'tpl':
            storage[command[1]] = storage[command[1]] * 3
            execute(index+1, instruction)
        elif command[0] == 'inc':
            storage[command[1]] = storage[command[1]] + 1
            execute(index + 1, instruction)
        elif command[0] == 'jmp':
            execute(index + int(command[1]), instruction)
        elif command[0] == 'jie':
            if storage[command[1].replace(',', '')]%2 == 0:
                execute(index + int(command[2]), instruction)
            else:
                execute(index + 1, instruction) 
        elif command[0] == 'jio':
            if storage[command[1].replace(',', '')] == 1:
                execute(index + int(command[2]), instruction)
            else:
                execute(index+1, instruction)
        else:
            print('Critical Error')
    except IndexError:
        print(storage)

def run(f1='day23.txt'):
    with open(f1, 'r') as fp:   
        text_from_file = fp.readlines()
        instructions = [line.strip('\n') for line in text_from_file]
    execute(0, instructions)
run()

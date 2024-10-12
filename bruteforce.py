from random import randint, choice
import time

text = input("")

target = list(text)
empty = [" "] * len(target)

i = 0

while i < len(target):
    if empty[i] != target[i]:
        random = chr(choice([33, 35, 36, randint(48, 57), randint(97, 122)]))
        empty[i] = random
    else:
        i += 1

    color = choice([
        "\033[1;30;50m", "\033[1;31;50m", "\033[1;32;50m", "\033[1;33;50m",
        "\033[1;34;50m", "\033[1;35;50m", "\033[1;36;50m", "\033[1;37;50m"
    ])
    print(color + "\r" + " ".join(empty), end=" ")
    time.sleep(0.05)

print("\n")

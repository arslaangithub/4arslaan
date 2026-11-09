import math

def get_order(key):
    return sorted(range(len(key)), key=lambda k: key[k])


def encrypt(text, key):
    cols = len(key)
    rows = math.ceil(len(text) / cols)

    text += 'X' * (rows * cols - len(text))

    matrix = [list(text[i:i + cols])
              for i in range(0, len(text), cols)]

    order = get_order(key)

    cipher = ""

    for c in order:
        for r in range(rows):
            cipher += matrix[r][c]
    
    return cipher


def decrypt(cipher, key):
    cols = len(key)
    rows = math.ceil(len(cipher) / cols)

    order = get_order(key)

    matrix = [['' for _ in range(cols)] for _ in range(rows)]

    index = 0

    for c in order:
        for r in range(rows):
            matrix[r][c] = cipher[index]
            index += 1

    plain = ""

    for r in matrix:
        plain += "".join(r)

    return plain.rstrip('X')


text = input("Enter plaintext: ")
key = input("Enter key: ")

cipher = encrypt(text, key)
print("Encrypted:", cipher)

plain = decrypt(cipher, key)
print("Decrypted:", plain)
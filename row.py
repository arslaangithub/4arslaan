
import math

def get_order(key):
    return sorted(range(len(key)), key=lambda k: key[k])

def encrypt(text, key):
    rows = len(key)

    if rows == 0:
        raise ValueError("Key must not be empty")

    cols = math.ceil(len(text) / rows)

    # Pad the text to fill the matrix
    text += 'X' * (rows * cols - len(text))

    # Fill the matrix row by row
    matrix = [
        list(text[i:i + cols])
        for i in range(0, len(text), cols)
    ]

    order = get_order(key)

    # Read rows according to the sorted key order
    cipher = ""
    for r in order:
        for c in range(cols):
            cipher += matrix[r][c]

    return cipher


def decrypt(cipher, key):
    rows = len(key)

    if rows == 0:
        raise ValueError("Key must not be empty")

    cols = math.ceil(len(cipher) / rows)
    order = get_order(key)

    # Create an empty matrix
    matrix = [['' for _ in range(cols)] for _ in range(rows)]

    index = 0

    # Fill rows according to the sorted key order
    for r in order:
        for c in range(cols):
            matrix[r][c] = cipher[index]
            index += 1

    # Read the matrix row by row
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
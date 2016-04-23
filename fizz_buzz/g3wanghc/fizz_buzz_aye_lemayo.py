def main():
    print ([fizz_buzz(n) for n in range(1, 100)])


def fizz_buzz(n):
    if (n % 15 == 0):
        return 'FizzBuzz'
    if (n % 3 == 0):
        return 'Fizz'
    if (n % 5 == 0):
        return 'Buzz'
    return n

if __name__ == "__main__":
    main()

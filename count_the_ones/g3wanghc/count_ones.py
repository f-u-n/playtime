def countTheOnes (number):
	return len(list(filter(lambda n: n == '1', str(number))))

print(countTheOnes(467))
print(countTheOnes(81511))
print(countTheOnes(123))
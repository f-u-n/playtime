(function fizzBuzz(limit) {
	for(count=0; count <= limit; count++) {
		if(count % 5 == 0 && count % 3 == 0) {
			console.log(count + " fizzbuzz");
		} else if (count % 5 == 0) {
			console.log(count + " buzz");
		} else if (count % 3 == 0) {
			console.log(count + " fizz");
		} else {
			console.log(count);
		}
	}
})(100);

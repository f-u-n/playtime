module.exports.compare = function (str1, str2) {
	var str1Length = str1.length,
		str2Length = str2.length;

	// compare the length.
	if(str1Length !== str2Length)
		return false;

	for(var i = str1Length; i--;) {
		if(str1[i] !== str2[str2Length - 1 - i])
			return false;
	}

    return true;
}
module.exports = function check(str, bracketsConfig) {
	const inputArray = str.split('');
	let outputArray = inputArray.slice(0,1);

	for (i = 1; i < inputArray.length; i++) {

		let currentElement = inputArray[i];

		for (j = 0; j < bracketsConfig.length; j++) {

			let checkedOpenConfigBracket = bracketsConfig[j][0];
			let checkedClosedConfigBracket = bracketsConfig[j][1];
			let lastElementInOuputArray = (outputArray !== []) ? outputArray.slice(-1) : '';

  			if (currentElement == checkedClosedConfigBracket)  {
  				if (checkedOpenConfigBracket == lastElementInOuputArray) {
  					outputArray.pop();
  				} else {
  					outputArray.push(currentElement);
  				}
  			} else if (currentElement == checkedOpenConfigBracket) {
  				outputArray.push(currentElement);
  			}
		}
	}

  return outputArray.length == 0;
}

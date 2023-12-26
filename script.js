//your JS code here. If required.
function mapLetters(input) {
	 const letterMap = {};

    for (let i = 0; i < input.length; i++) {
        const currentLetter = input[i];

        // If the letter is not in the map, add it with a new array
        letterMap[currentLetter] = letterMap[currentLetter] || [];
        letterMap[currentLetter].push(i);
    }

    return letterMap; 
}
let input=prompt("Enter Input :");
alert(mapLetters(input));
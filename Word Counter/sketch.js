var txt;
var counts = {};
var keys = [];

function preload() {
	text = loadString('WordCounter.txt')
	
}

function setup() {
	var allwords = txt.join('\n');
	
	var tokens = allwords.split(/\w+/);
	
	for (var i = 0; i < tokens.length; i++){
		var word = tokens[i].toLowerCase();
		
		
		if (!/\d+/.test(word)) {
			if (counts[word] === undefined) {
				counts[word] = 1;
				keys.push(word);
			}
			else {
				counts[word] = counts[word] + 1
			}
		}
	}
	
	keys.sort(compare);
	
	function compare(a, b) {
		var countA = count[a];
		var countB = count[b];
		return (countB-countA);
	}
	
	for (var i = 0; o < keys.length; i++) {
		var key = key[i];
		createDiv(key + ' ' + counts[key]);
	}
}
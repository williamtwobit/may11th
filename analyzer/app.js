$(function(){
	$('button').click(event => {
		event.preventDefault()
		let userIn = $('#user-text').val();
        console.log(userIn);

		let normalized = userIn.replace(/\n/g, " ").replace(/[^a-zA-Z/ ]/g, "");
		// console.log(normalized);
		let arr = normalized.split(" ");
		// console.log(arr);
		let normalizedArr = arr.filter(word => word.length > 0);
		// console.log(normalizedArr);

		let wordCount = 0
		let uniqueWordCount = 0
		let countedWords = []

		normalizedArr.forEach(word => {
			console.log(word);
			wordCount++ ;
			console.log(wordCount);
		})
		var counts = {};
		for (var i = 0; i < normalizedArr.length; i++) {
		    counts[normalizedArr[i]] = 1 + (counts[normalizedArr[i]] || 0);
		}
		console.log(counts);
		// console.log(wordCount);
		// console.log(uniqueWordCount);
	})
});
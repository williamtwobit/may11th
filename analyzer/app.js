$(function(){
	$('button').click(event => {
		event.preventDefault()
		let userIn = $('#user-text').val();
        console.log(userIn);

		let normalized = userIn.replace(/\n/g, " ").replace(/[^a-zA-Z/ ]/g, "");
		// console.log(normalized);
		let arr = normalized.split(" ");
		// console.log(arr);
		let normalizedArr = arr.filter(Boolean);

		console.log(normalizedArr);

		let wordCount = 0
		let uniqueWordCount = 0
		let wordLength = 0
		let countedWords = {}

		normalizedArr.forEach(word => {
			if(!countedWords[word]){
				uniqueWordCount++;
				countedWords[word] = 1
			}
			else {
				countedWords[word] ++
			}
			console.log(countedWords);
			wordCount++ ;
			wordLength += word.length
		});
		console.log('Word count: ' + wordCount);
		console.log('Unique word count: ' + uniqueWordCount);
		console.log('Total length of the words: ' + wordLength);
		console.log('Average word length is: ' + (wordLength / wordCount));
		$('dl').removeClass('hidden');
		$('.wordCount').text(wordCount);
		$('.unique').text(uniqueWordCount);
		$('.average').text((wordLength / wordCount));
	})
});
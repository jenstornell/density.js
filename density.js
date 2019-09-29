class Density {
  constructor(limit = 1) {
    this.limit = limit;
  }
  set(content) {
    this.content = content;
  }
  get density() {
    return this.results;
  }
  process() {
    this.sanitize();
    let array = this.content.split(' ');
    let object_unsorted = {};
    let array_words = [];
    let array_results = [];

    // Set x number of words to array
    for(let i=0; i<array.length; i++) {
      let collection = '';
      for(let j=0; j<this.limit; j++) {
        if(typeof array[i+j] === 'undefined') continue;
        if(j > 0) collection += ' ';
        collection += array[i+j];
      }
      array_words[i] = collection;
    }

    // Put the words as key and count the words occurrences
    array_words.forEach((item) => {
      object_unsorted[item] = (typeof object_unsorted[item] === 'undefined') ? 1 : object_unsorted[item]+1;
    });

    // Put it back as array to get it sortable by occurrences
    let i = 0;
    for(let collection in object_unsorted) {
      array_results[i] = {
        count: object_unsorted[collection],
        word: collection
      }
      i++;
    }

    // Sort array by occurrences
    array_results.sort((a, b) => b.count - a.count);
    this.results = array_results;
  }
  toWords() {
		let div = document.createElement('div');
    div.innerHTML = html;
    
		let text = div.textContent || div.innerText || '';
		this.content = text.replace(/(\r\n|\n|\r)/gm, ' ');
	}
  sanitize() {
    this.toWords();
    this.content = this.content.toLowerCase();
    this.content = this.content.replace(/[^a-zA-Z0-9À-ž\s]/g, "");
    this.content = this.content.replace(/\s+/g, ' ').trim();
  }
}
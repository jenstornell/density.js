class density {
  static defaults() {
    return {
      words: 1,
      characters: 0,
      stopwords: [],
      filter: ["toText", "toAlpha", "toLowercase", "stripWhitespace"]
    };
  }
  static set(content) {
    this.add(content);
    
    this.o.filter.forEach(filter => {
      switch(filter) {
        case 'toText':
          this.toText();
          break;
        case 'toAlpha':
          this.toAlpha();
          break;
        case 'toLowercase':
          this.toLowercase();
          break;
        case 'stripWhitespace':
          this.stripWhitespace();
          break;
      }
      this.process();
    });
  }
  static setOptions(options) {
    this.o = Object.assign({}, this.defaults(), options);
  }
  static getUnsorted(content, options) {
    this.setOptions(options);
    this.set(content);
    return this.unsorted;
  }
  static getSorted(content, options = {}) {
    this.setOptions(options);
    this.set(content);
    this.sort();
    return this.sorted;
  }
  static sort() {
    // Put it back as array to get it sortable by occurrences
    let i = 0;
    let array_results = [];
    for(let collection in this.unsorted) {
      array_results[i] = {
        count: this.unsorted[collection],
        word: collection
      }
      i++;
    }

    this.sorted = array_results.sort((a, b) => b.count - a.count);
  }
  static process() {
    let array = this.content.split(' ');
    let object_unsorted = {};
    let array_words = [];

    // Set x number of words to array
    for(let i=0; i<array.length; i++) {
      let collection = '';
      // Loop limit to set x number of words
      for(let j=0; j<this.o.words; j++) {
        if(typeof array[i+j] === 'undefined') continue;
        if(j > 0) collection += ' ';
        collection += array[i+j];
      }
      if(this.o.stopwords.includes(collection)) continue;
      if(collection.length <= this.o.characters) continue;
      array_words[i] = collection;
    }

    // Put the words as key and count the words occurrences
    array_words.forEach((item) => {
      object_unsorted[item] = (typeof object_unsorted[item] === 'undefined') ? 1 : object_unsorted[item]+1;
    });

    this.unsorted = object_unsorted;
  }
  static add(content) {
    this.content = content;
  }
  static toText() {
		let div = document.createElement('div');
    div.innerHTML = this.content;
    
		let text = div.textContent || div.innerText || '';
		this.content = text.replace(/(\r\n|\n|\r)/gm, ' ');
  }
  static toLowercase() {
    this.content = this.content.toLowerCase();
  }
  static toAlpha() {
    this.content = this.content.replace(/[^a-zA-Z0-9À-ž\s]/g, "");
  }
  static stripWhitespace() {
    this.content = this.content.replace(/\s+/g, ' ').trim();
  }
}

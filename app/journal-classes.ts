
module JournalApp {
  export class Entry {
    currentVotes: number;
    id: number;
    constructor(public title: string, public content: string){
      this.currentVotes = 0;
      this.id = new Date().valueOf();
    }

    charCount(){
      // Count some characters
    }

    upVote(){
      this.currentVotes = this.currentVotes +1;
    }

    downVote(){
      // decrement votes
    }
  }

  export class TextEntry extends Entry {
    constructor(public title: string, public content: string){
      super(title, content);
    }
  }
}


// to do: create module to wrap our Journal class, create actual journal class and objects, test upVote method, lots of other things.

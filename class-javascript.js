//  create class 
// create claas with word (class + name of class)
class Episode {
    // i use constructor for create attribut of object 
    constructor(title, duration, hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  // i create object with parameters 
  let firstEpisode = new Episode("croc blanc", 45, true);
  
  let secondEpisode = new Episode("croc noir", 50, false);
  
  let thirdEpisode = new Episode("croc rouge", 60, true);
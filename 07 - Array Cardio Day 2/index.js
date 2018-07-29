const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 } //2018 - 2015 = 3
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

function olderThanNineteen(person) {
  let date = new Date();
  return date.getFullYear() - person.year >= 19;
}

const someoneOlderThanNineteen = people.some(olderThanNineteen);
//console.log(someoneOlderThanNineteen);

const everyoneOlderThanNineteen = people.every(olderThanNineteen);
//console.log(everyoneOlderThanNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

function matchID(comment) {
  return comment.id === 823423;
}

let comment = comments.find(matchID);
//console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
let index = comments.findIndex(matchID);
//console.log(index);
// delete the comment with the ID of 823423
//comments.splice(index, 1);
//console.log(comments);

//return a new comment array without the comment with ID of 823423 without mutating to original array
let restOfComments = comments.filter(comment => comment.id !== 823423);
//console.log(restOfComments);

let rest = [...comments.slice(0, index), ...comments.slice(index + 1)];
//console.log(rest);

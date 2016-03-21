// hard coded stuff and variables go here
/// <reference path="./journal-classes.ts"/>

var testEntries = [];

var getEntryInfo = function(entry) {
  var entryStuff = "<li>" + entry.title + "</li><ul><li>" + entry.content + "</li></ul><button class='upvote' id='" + entry.id + "'>Upvote</button></li>";
  console.log(entry.id);
  return entryStuff;
}

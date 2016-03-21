var testID = 0;

$(document).ready(function() {
  $("#journalEntries").submit(function(event){
    event.preventDefault();
    $("#displayEntries").empty();
    var newTitle = $("#title").val();
    var newContent = $("#entry").val();
    testEntries.push(new JournalApp.TextEntry(newTitle, newContent));

    for(var entry of testEntries){
      var journalEntryInfo = getEntryInfo(entry);
      $("#displayEntries").append(journalEntryInfo);
    }
  });
  $(document).on("click", ".upvote", function(event) {
    var testID = parseInt(this.id);

    var isMatched = matchID(testID);
    console.log(testEntries);
  });
});


var matchID = function(testID) {
  for(var i = 0; i < testEntries.length; i++) {
    var thisID = testEntries[i].id;
    if (thisID === testID) {
      testEntries[i].upVote();
    } else {
      console.log("this one isn't the one we're matching");
    }
  }
}

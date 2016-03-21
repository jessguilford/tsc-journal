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
    console.log(testID);
    var gimme = findEntry(testID);
    console.log(gimme);


    var testEntry01 = testEntries.find(findEntry);
    console.log(testEntry01);
    // currently returning undefined
  });
});

var findEntry = function(var01) {
  console.log(var01);
  return JournalApp.TextEntry.id === testID;
}

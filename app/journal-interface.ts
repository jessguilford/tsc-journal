// jQuery and stuff goes here

// var newTitle = "An Awesome Journal Entry";
// var newContent = "This is a super cool journal entry. Wow! It's amazing.";
//
// testEntries.push(new JournalApp.TextEntry(newTitle, newContent));
// console.log(testEntries);

$(document).ready(function() {
  $("#journalEntries").submit(function(event){
    event.preventDefault();
    $("#displayEntries").empty();
    var newTitle = $("#title").val();
    var newContent = $("#entry").val();
    testEntries.push(new JournalApp.TextEntry(newTitle, newContent));
    console.log(testEntries);
    for(var entry of testEntries){
      console.log(entry.title);
    }

    for(var entry of testEntries){
      $("#displayEntries").append("<li>" + entry.title + "</li><ul><li>" + entry.content + "</li></ul></li>");

    }
  });
});

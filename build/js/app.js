var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JournalApp;
(function (JournalApp) {
    var Entry = (function () {
        function Entry(title, content) {
            this.title = title;
            this.content = content;
            this.currentVotes = 0;
            this.id = new Date().valueOf();
        }
        Entry.prototype.charCount = function () {
            // Count some characters
        };
        Entry.prototype.upVote = function () {
            this.currentVotes = this.currentVotes + 1;
        };
        Entry.prototype.downVote = function () {
            // decrement votes
        };
        return Entry;
    }());
    JournalApp.Entry = Entry;
    var TextEntry = (function (_super) {
        __extends(TextEntry, _super);
        function TextEntry(title, content) {
            _super.call(this, title, content);
            this.title = title;
            this.content = content;
        }
        return TextEntry;
    }(Entry));
    JournalApp.TextEntry = TextEntry;
})(JournalApp || (JournalApp = {}));
// to do: create module to wrap our Journal class, create actual journal class and objects, test upVote method, lots of other things.
var testID = 0;
$(document).ready(function () {
    $("#journalEntries").submit(function (event) {
        event.preventDefault();
        $("#displayEntries").empty();
        var newTitle = $("#title").val();
        var newContent = $("#entry").val();
        testEntries.push(new JournalApp.TextEntry(newTitle, newContent));
        for (var _i = 0, testEntries_1 = testEntries; _i < testEntries_1.length; _i++) {
            var entry = testEntries_1[_i];
            var journalEntryInfo = getEntryInfo(entry);
            $("#displayEntries").append(journalEntryInfo);
        }
    });
    $(document).on("click", ".upvote", function (event) {
        var testID = parseInt(this.id);
        var isMatched = matchID(testID);
        console.log(testEntries);
    });
});
var matchID = function (testID) {
    for (var i = 0; i < testEntries.length; i++) {
        var thisID = testEntries[i].id;
        if (thisID === testID) {
            testEntries[i].upVote();
        }
        else {
            console.log("this one isn't the one we're matching");
        }
    }
};
// hard coded stuff and variables go here
/// <reference path="./journal-classes.ts"/>
var testEntries = [];
var getEntryInfo = function (entry) {
    var entryStuff = "<li>" + entry.title + "</li><ul><li>" + entry.content + "</li></ul><button class='upvote' id='" + entry.id + "'>Upvote</button></li>";
    //console.log(entry.id);
    return entryStuff;
};

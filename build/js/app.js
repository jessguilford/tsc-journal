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
// jQuery and stuff goes here
// var newTitle = "An Awesome Journal Entry";
// var newContent = "This is a super cool journal entry. Wow! It's amazing.";
//
// testEntries.push(new JournalApp.TextEntry(newTitle, newContent));
// console.log(testEntries);
$(document).ready(function () {
    $("#journalEntries").submit(function (event) {
        event.preventDefault();
        $("#displayEntries").empty();
        var newTitle = $("#title").val();
        var newContent = $("#entry").val();
        testEntries.push(new JournalApp.TextEntry(newTitle, newContent));
        console.log(testEntries);
        for (var _i = 0, testEntries_1 = testEntries; _i < testEntries_1.length; _i++) {
            var entry = testEntries_1[_i];
            console.log(entry.title);
        }
        for (var _a = 0, testEntries_2 = testEntries; _a < testEntries_2.length; _a++) {
            var entry = testEntries_2[_a];
            $("#displayEntries").append("<li>" + entry.title + "</li><ul><li>" + entry.content + "</li></ul></li>");
        }
    });
});
// hard coded stuff and variables go here
/// <reference path="./journal-classes.ts"/>
var testEntries = [];
// testEntries.push(new JournalApp.TextEntry("An Awesome Journal Entry", "This is a super cool journal entry. Wow! It's amazing."));
// console.log(testEntries);
// testEntries[0].upVote();
// testEntries[0].upVote();
// console.log(testEntries[0]);

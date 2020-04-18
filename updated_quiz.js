
var viewModel = function() {
    var self = this;
    self.index = ko.observable(0);
    self.questions = [
        new questionViewModel("JavaScript statements are separated by what?",
                                ["A: Periods", "B: Colons","C: Semi-Colons"]),
        new questionViewModel("JavaScript variables are __________ for storing data values.",
                                ["A: Examples","B: Containers","C: Placeholders"]),
        new questionViewModel("________________ is a block of code designed to perform a particular task.",
                                ["A: A JavaScript object","B: A JavaScript expression","C: A JavaScript function"]),
        new questionViewModel("What are JavaScript strings used for?",
                                ["A: Storing and manipulating text","B: Adding numbers","C: Concatenation"]),
        new questionViewModel("What operator is used for concatenation?",
                                ["A: *","B: +","C: -"]),
        new questionViewModel("What does DOM stand for?",
                                ["A: Document Objective Model","B: Document Oriented Model","C: Document Object Model"]),
        new questionViewModel("jQuery is a JavaScript library.",
                                ["A: True","B: False","C: Maybe"]),
        new questionViewModel("What is $ shorthand for in this statement: \n$('button').click.toggleClass('hidden')?",
                                ["A: jQuery","B: Node","C: Ajax"]),
        new questionViewModel("What is the purpose of this JavaScript code: var = database?",
                                ["A: It declares a function named database","B: It declares a variable named database","C: It is a callback named database"]),
        new questionViewModel("How many times does this loop run? \nfor(i=0, i<=10, i++) { \nconsole.log(i); \n};",
                                ["A: 1","B: 11","C: 10"]),
    ];
        self.currentQuestion = ko.observable(self.questions[0]);
            self.next = function() {
                self.index(self.index() + 1);
                self.currentQuestion(self.questions[self.index()]);
            };
            self.prev = function() {
                self.index(self.index() - 1);
                self.currentQuestion(self.questions[self.index()]);
            };

        return self;
    };

    var answerViewModel = function(answer) {
        this.answer = answer;
    };

    var questionViewModel = function(question, answers) {
        var self = this;
        self.question = question;
        self.answers = [];
        for (var n = 0; n < answers.length; n++) {
            self.answers.push(new answerViewModel(answers[n]));
        }
        return self;
    };

    ko.applyBindings(new viewModel());

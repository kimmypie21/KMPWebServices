
var viewModel = function() {
    var self = this;
    self.index = ko.observable(0);
    self.questions = [
        new questionViewModel("JavaScript statements are separated by what?", 
                                ["Periods", "Colons","Semi-Colons"]),
        new questionViewModel("JavaScript variables are __________ for storing data values.", 
                                ["Examples","Containers","Placeholders"]),
        new questionViewModel("________________ is a block of code designed to perform a particular task.", 
                                ["A JavaScript object","A JavaScript expression","A JavaScript function"]),
        new questionViewModel("What are JavaScript strings used for?", 
                                ["Storing and manipulating text","Adding numbers","Concatenation"]),
        new questionViewModel("What operator is used for concatenation?", 
                                ["*","+","-"]),
        new questionViewModel("What does DOM stand for?", 
                                ["Document Objective Model","Document Oriented Model","Document Object Model"]),
        new questionViewModel("jQuery is a JavaScript library.", 
                                ["True","False","Maybe"]),
        new questionViewModel("What is $ shorthand for in this statement: \n$('button').click.toggleClass('hidden')?", 
                                ["jQuery","Node","Ajax"]),
        new questionViewModel("What is the purpose of this JavaScript code: var = database?", 
                                ["It declares a function named database","It declares a variable named database","It is a callback named database"]),
        new questionViewModel("How many times does this loop run? \nfor(i=0, i<=10, i++) { \nconsole.log(i); \n};", 
                                ["1","11","10"]),
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


function QuestionsViewModel (){
  this.Questions = ko.observableArray([
    {question: "JavaScript statements are separated by what?", answerA: "A: Periods", answerB: "B: Colons", answerC: "C: Semi-Colons" },
    {question: "JavaScript variables are __________ for storing data values.", answerA: "A: Examples" , answerB: "B: Containers", answerC: "C: Placeholders"},
    {question: "________________ is a block of code designed to perform a particular task.", answerA: "A: A JavaScript object" , answerB: "B: A JavaScript expression", answerC:"C: A JavaScript function"},
    {question: "What are JavaScript strings used for?", answerA: "A: Storing and manipulating text" , answerB: "B: Adding numbers", answerC: "C: Concatenation"},
    {question: "What operator is used for concatenation?", answerA: "A: *" , answerB: "B: +" , answerC: "C: -" },
    {question: "What does DOM stand for?", answerA: "A: Document Objective Model", answerB: "B: Document Oriented Model", answerC:"C: Document Object Model"},
    {question: "JQuery is a JavaScript library.", answerA: "A: True", answerB: "B: False" , answerC: "C: Maybe"},
    {question: "What is $ shorthand for in this statement: \n$('button').click.toggleClass('hidden')?", answerA: "A: jQuery", answerB: "B: Node", answerC: "C: Ajax"},
    {question: "What is the purpose of this JavaScript code: var = database?", answerA: 'A: It declares a function named database', answerB:'B: It declares a variable named database' , answerC:'C: It is a callback named database'},
    {question: "How many times does this loop run? \nfor(i=0, i<=10, i++) { \nconsole.log(i); \n};", answerA: "A: 1", answerB: "B: 11" , answerC:"C: 10" }
  ]);



};

ko.applyBindings (new QuestionsViewModel());



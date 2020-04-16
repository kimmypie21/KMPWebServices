


var QuizViewModel = ko.observableArray([
  {AnswerA: "A: Periods",  AnswerB: "B: Colons" , AnswerC: "C: Semi-Colons"},
  {AnswerA: "A: Examples",  AnswerB: "B: Containers", AnswerC:"C: Placeholders"},
  {AnswerA: "A: A JavaScript object" , AnswerB: "B: A JavaScript expression" , AnswerC: "C: A JavaScript function"},
  {AnswerA: "A: Storing and manipulating text" , AnswerB:  "B: Adding numbers",  AnswerC: "C: Concatenation"},
  {AnswerA: "A: *" , AnswerB:  "B: + ",  AnswerC: "C: - "},
  {AnswerA: "A: Document Objective Model",  AnswerB: "B: Document Oriented Model", AnswerC: "C: Document Object Model"},
  {AnswerA: "A: True", AnswerB: "B: False", AnswerC: "C: Maybe"},
  {AnswerA: "A: jQuery", AnswerB: "B: Node", AnswerC: "C: Ajax"},
  {AnswerA: "A: It declares a function named database", AnswerB: "B: It declares a variable named database" , AnswerC: "C: It is a callback named database"},
  {AnswerA: "A: 1" ,  AnswerB: "B: 11" , AnswerC: "C: 10"}
]);

  ko.applyBindings (new QuizViewModel ());









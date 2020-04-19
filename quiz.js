/*
============================================
; Title:  quiz.js
; Author: Diandra McKenzie
; Date:   24 February 2020
; Description: Quiz for Web 330
;===========================================
*/

//start program

//variables
var currentQuestion = 0;
var score = 0;

var ul = document.getElementById('ul');
var quiz = document.getElementById('question');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var scoreCard = document.getElementById('scoreCard');
var previousButton = document.getElementById('previousButton');
var nextButton = document.getElementById('nextButton');

//questions array

var app = {
            questions : [

            {
                q:"JavaScript statements are separated by what?",
                options:['A: Periods','B: Colons','C: Semi-Colons'],
                answer:3
            },

            {
                q:"JavaScript variables are __________ for storing data values.",
                options:['A: examples','B: containers','C: placeholders'],
                answer:2
            },

            {
                q:"________________ is a block of code designed to perform a particular task.",
                options:['A: A JavaScript object','B: A JavaScript expression','C: A JavaScript function'],
                answer:3
            },

            {
            q: "What are JavaScript strings used for?",
            options:['A: Storing and manipulating text','B: Adding numbers', 'C: Concatenation'],
            answer: 1
            },

            {
            q: "What operator is used for concatenation?",
            options:['A: *','B: +','C: -'],
            answer: 2
            },

            {
            q: "What does DOM stand for?",
            options:['A: Document Objective Model','B: Document Oriented Model','C: Document Object Model'],
            answer: 3
            },

            {
            q: "JQuery is a JavaScript library.",
            options:['A: True','B: False', 'C: Maybe'],
            answer: 1
            },

            {
            q: "What is $ shorthand for in this statement: \n$('button').click.toggleClass('hidden')?",
            options:['A: jQuery','B: Node','C: Ajax'],
            answer: 1
            },

            {
            q: "What is the purpose of this JavaScript code: var = database?",
            options:['A: It declares a function named database','B: It declares a variable named database', 'C: It is a callback named database'],
            answer: 2
            },

            {
            q: "How many times does this loop run? \nfor(i=0, i<=10, i++) { \nconsole.log(i); \n};",
            options:['A: 1','B: 11','C:10'],
            answer: 3
            },


        ],

            index: 0,
            load: function() {
               quiz.innerHTML = this.questions[this.index].q;
                op1.innerHTML = this.questions[this.index].options[0];
                op2.innerHTML = this.questions[this.index].options[1];
                op3.innerHTML = this.questions[this.index].options[2];
            },

            next: function() {
                this.index++;
                this.load();
            },

            previous: function() {
                window.history.back();
                this.load();
            },

            check: function(element) {
                var id = element.id.split('');
                if(id[id.length-1]==this.questions[this.index].answer) {
                    this.score++;
                    element.innerHTML="<span class='color-correct'>Correct!</span>"
                    this.scoreCard();
                }
                else {
                    element.innerHTML="<span class='color-incorrect'>Incorrect</span>"
                }
            },


            notClickable: function() {
                for (let i=0;i<ul.children.length;i++) {
                    ul.children[i].style.pointerEvents="none";

                }
            },


            clickable: function() {
                for (let i=0;i<ul.children.length;i++) {
                    ul.children[i].style.pointerEvents="auto";
                }
            },

            score : 0,
            scoreCard: function() {
                scoreCard.innerHTML = "Score: " + this.score + "/" + this.questions.length;
            }

            

        }

        window.onload = app.load();

        function button(element) {
            app.check(element);
            app.notClickable();
        }

        function previous() {
            app.previous();

        }

        function next() {
            app.next();
            app.clickable();
        }





//end program

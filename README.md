# Quiz-in-Js-Task1
 The provided code is a JavaScript implementation of a simple quiz game. It's a basic interactive web application that presents questions to the user, allows them to select answers, calculates their score, and provides an option to restart the quiz. Let's break down the code step by step:

An array called questions is defined. Each element in this array represents a question, along with its possible answers and the correct answer.

Two variables are declared: currentarrayindex to keep track of the current question index, and score to keep track of the user's score.

The window.addEventListener("load", ...) is used to execute code when the web page has finished loading. It contains a callback function that sets up the initial state of the quiz by attaching an event listener to a "Start Quiz" button. The button's click event triggers the startgame function.

The startgame function sets up the initial state of the quiz container by populating it with a "Start Quiz" button. When this button is clicked, the showquestion function is called.

The showquestion function is responsible for displaying a question along with its answer options in the quiz container. It also attaches click event listeners to the answer option buttons. If an answer option is clicked, it checks if the selected answer is correct and updates the score accordingly. Then, it proceeds to the next question.

When there are no more questions to display (when currentarrayindex is greater than the number of questions), the endgame function is called.

The endgame function displays the final score and offers an option to restart the quiz by clicking a "Restart Game" button. Clicking this button will reset the quiz to its initial state.

Overall, the code creates a simple quiz interface where users can answer questions and get feedback on their performance. It uses event listeners and HTML manipulation to create an interactive experience. However, there are a couple of minor issues in the code:

The option buttons in the showquestion function have the same id ("btn"). id attributes should be unique within an HTML document.
In the "Where does bee live?" question, the correct answer is mentioned as "javascript," which seems to be incorrect. It should be fixed to the actual correct answer.
The final score calculation in the endgame function should use the calculated score rather than multiplying the number of questions by 10.
Feel free to fix these issues and enhance the code further as needed.

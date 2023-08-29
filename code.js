let questions = [
    {
      question: " Saeed Anwar hightest ODI score ?",
      ans1: "152",
      ans2: "156",
      ans3: "140",
      ans4: "194",
      correct: "194",
    },
    {
      question: "First marshel law Administrator",
      ans1: "yahya khan",
      ans2: "Ayub khan",
      ans3: "Asim Munir Whisky",
      ans4: "Musharaf",
      correct: "Ayub khan",
    },
    {
      question: "Who is the most favorite Politician of Pakistan ?",
      ans1: "Nawaz Sharif",
      ans2: "Mulana Fazool",
      ans3: "Zardari",
      ans4: "Imran Khan",
      correct: "Imran Khan",
    },
    {
      question: "php Stands For ",
      ans1: "preprocessor hypertext",
      ans2: "hypertext",
      ans3: "java",
      ans4: "personal home page",
      correct: "preprocessor hypertext",
    },
    {
      question: "Where does bee live?",
      ans1: "In the nest",
      ans2: "In the hives",
      ans3: "On the tree",
      ans4: "In the home",
      correct: "javascript",
    },
  ];
  let currentarrayindex = 0;
  let score = 0;
  window.addEventListener("load", function (e) {
    e.preventDefault();
    let quizContainer = document.getElementById("quizcontainer");
  
    startgame(quizContainer);
  });
  function startgame(quizContainer) {
    quizContainer.innerHTML = `<button id="btn">Start Quiz</button>`;
    document.getElementById("btn").addEventListener("click", function (e) {
      e.preventDefault();
  
      showquestion(currentarrayindex, quizContainer);
    });
  }
  function showquestion(currentarrayindex, quizContainer) {
  
    if (currentarrayindex + 1 > questions.length) {
      
      endgame(quizContainer);
      
    }
  
  
    quizContainer.innerHTML = `<h3 id="quizquestion">${questions[currentarrayindex].question}</h3>
    <div id="answers">
  
         <button class="options" id="btn">${questions[currentarrayindex].ans1}</button> 
         <button class="options" id="btn">${questions[currentarrayindex].ans2}</button>
         <button class="options" id="btn">${questions[currentarrayindex].ans3}</button>
         <button class="options" id="btn">${questions[currentarrayindex].ans4}</button>
         </div>
         `;
    let correct = questions[currentarrayindex].correct;
    let option = document.querySelectorAll(".options");
  
    for (let a = 0; a < option.length; a++) {
      option[a].addEventListener("click", function () {
        if (this.innerHTML == correct) {
          score += 10;
          currentarrayindex++;
          showquestion(currentarrayindex, quizContainer);
  
          console.log(score);
        } else {
          currentarrayindex++;
          showquestion(currentarrayindex, quizContainer);
        }
      });    
    }
  }
  function endgame(quizContainer)
  {
    quizContainer.innerHTML = `<h2 class="text">End Game</h2>
    <h3 class="text">Your Score ${score+"/"+ questions.length * 10}</h3>
    <button id="btn">Restart Game</button>`;
    document.getElementById('btn').addEventListener('click',function() {
      startgame(quizContainer);
      
    })
    
  }
  
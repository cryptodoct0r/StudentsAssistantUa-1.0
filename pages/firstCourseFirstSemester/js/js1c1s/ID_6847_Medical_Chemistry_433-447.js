(function () {
    var myQuestions = [
        {
            question: "433.	What is the number of electrons, losted or gained according with the transformation: N2 → NO?",

            answers: {
                a: " 	 5",

                b: " 	 1",

                c: "     4",

                d: "	 3",

                e: " 	 2"
            },
            correctAnswer: "c"
    },

        {
            question: "434.	What is the number of electrons, losted or gained according with the transformation: O2→CuO?",

            answers: {
                a: " 	 1",

                b: "     4",

                c: "	 2",

                d: "	 5",

                e: " 	 3"
            },
            correctAnswer: "b"
    },

        {
            question: "435.	What is the number of electrons, losted or gained according with the transformation: H2SO4 → S?",

            answers: {
                a: " 	 4",

                b: " 	 7",

                c: "	 5",

                d: "	 8",

                e: "   6"
            },
            correctAnswer: "e"
    },

        {
            question: "436.	What is the number of electrons, losted or gained according with the transformation: S →H2SO4?",

            answers: {
                a: " 	 8",

                b: "   6",

                c: "	 5",

                d: "	 4",

                e: " 	 7"
            },
            correctAnswer: "b"
    },

        {
            question: "437.	What is the number of electrons, losted or gained according with the transformation: H2S → SO2?",

            answers: {
                a: " 	 7",

                b: " 	 4",

                c: "	 5",

                d: "   6",

                e: " 	 3"
            },
            correctAnswer: "d"
    },

        {
            question: "438.	What is the number of electrons, losted or gained according with the transformation: NH3 → N2.",

            answers: {
                a: " 	 7",

                b: " 	 3",

                c: "	 5",

                d: "   6",

                e: " 	 4"
            },
            correctAnswer: "d"
    },

        {
            question: "439.	What is the number of electrons, losted or gained according with the transformation: HNO3 → NH4Cl?",

            answers: {
                a: " 	 7",

                b: " 	 6",

                c: "	 9",

                d: "   8",

                e: " 	 5"
            },
            correctAnswer: "d"
    },

        {
            question: "440.	What is the number of electrons, losted or gained according with the transformation: HNO3 → NH3?",

            answers: {
                a: "   5",

                b: " 	 7",

                c: "	 8",

                d: "	 6",

                e: " 	 9"
            },
            correctAnswer: "a"
    },

        {
            question: "441.	What is the number of electrons, losted or gained according with the transformation: HNO3 → N2O?",

            answers: {
                a: "  8",

                b: " 	 6",

                c: "	 4",

                d: "	 5",

                e: " 	 7"
            },
            correctAnswer: "a"
    },

        {
            question: "442.	What is the number of electrons, losted or gained according with the transformation: H2SO4 → H2S.",

            answers: {
                a: " 	 5",

                b: " 	 6",

                c: "	 7",

                d: "	 4",

                e: "  8"
            },
            correctAnswer: "e"
    },

        {
            question: "443.	E in Nernst equation: E = E^0 - (RT/nF)InQ is:",

            answers: {
                a: " 	Mass-action expression",

                b: "  lectrode potential",

                c: "	Standard electrode potential",

                d: "	EMF",

                e: " 	Oxidation potential"
            },
            correctAnswer: "b"
    },


        {
            question: "444.	Silver electrode is:",

            answers: {
                a: "    Metal-metal ion electrode",

                b: " 	Membrane electrode",

                c: "	Gas-ion electrodes",

                d: "	Metal-insoluble salt-anion electrode",

                e: " 	Inert ' oxidation - reduction ' electrode"
            },
            correctAnswer: "a"
    },


        {
            question: "445.	E0 in Nernst equation: E = E^0 - (RT/nF)InQ is:",

            answers: {
                a: " 	 Mass-action expression",

                b: " 	 Electrode potential",

                c: "     Standard electrode potential",

                d: "	 EMF",

                e: " 	 Oxidation potential"
            },
            correctAnswer: "c"
    },

        {
            question: "446.	“Ea” in Arhenius equation ( In K = InA - (Ea/RT) ) is:",

            answers: {
                a: "    Activation energy.",

                b: " 	Pre-exponential factor or the frequency factor.",

                c: "	Boltzmann distribution.",

                d: "	Activation Gibbs energy.",

                e: " 	Rate constant."
            },
            correctAnswer: "a"
    },

        {
            question: "447.	“k” in Arhenius equation ( In K = InA - (Ea/RT) ) is:",

            answers: {
                a: " 	Activation energy.",

                b: " 	Pre-exponential factor or the frequency factor.",

                c: "	Boltzmann distribution.",

                d: "	Activation Gibbs energy.",

                e: "    Rate constant."
            },
            correctAnswer: "e"
    }

              ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        var output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            var answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "#00B000";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

      // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function checkAnswer () {

      // get active slide
      var activeSlides = document.getElementsByClassName('active-slide')[0];

      // active question
      var question = activeSlides.childNodes[1].innerText;

      // active options
      var answers = activeSlides.childNodes[3].childNodes;

      // active slide inputs
      var inputName;

      // selected answer
      var option;

      // correct answer to the question
      var correctAnswer;


      // loop through options
      for (var i = 0; i < answers.length-1; i++) {

        if (answers[i].nodeName != '#text') {

          // get checked option
          if (answers[i].firstElementChild.checked) {

            option = answers[i].firstElementChild.value;
            inputName = answers[i].firstElementChild.name;

          } else {

            // get input name
            inputName = answers[i].firstElementChild.name;

          }

        }

      }


      // check if answer is right
      for (var i = 0; i < myQuestions.length; i++) {

        if (question == myQuestions[i].question) {
          if (option == myQuestions[i].correctAnswer) {

            correctAnswer = myQuestions[i].answers[option];

            for (var i = 0; i < answers.length-1; i++) {

                if (answers[i].nodeName != '#text') {

                  answers[i].style.color = 'red';

                    if (option === answers[i].firstElementChild.value) {

                      answers[i].style.color = 'green';

                    }

                }

            }

          } else {

            for (var i = 0; i < myQuestions.length; i++) {

              if (question == myQuestions[i].question) {

                for (var j = 0; j < answers.length-1; j++) {

                  if (answers[j].nodeName != '#text') {

                    answers[j].style.color = 'red';

                    if (myQuestions[i].correctAnswer === answers[j].firstElementChild.value) {

                      answers[j].style.color = 'green';

                    }

                  }

                }

              }

            }

          }

        }

      }

    }


    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }


    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    var checkButton = document.getElementById("check");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    checkButton.addEventListener("click", checkAnswer);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();

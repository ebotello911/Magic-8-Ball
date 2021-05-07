
let answers = ["Nope","Yes","No Way Jose","Get A Life","Really Bad", "Gonna Go Bald","Don't ask me again", "Ask your Momma"];

window.onload = function() {
    let eight = document.getElementById("eight");
    let answer = document.getElementById("answer");
    let eightball = document.getElementById("eight-ball");
    let question = document.getElementById("question");

    eightball.addEventListener("click", function() {
      if(question.value.length < 1) {
          alert('Enter a question!');
      }else{
          eight.innerText = "";
          let num = Math.floor(Math.random() * Math.floor(answers.length));
          answer.innerText = answers[num];
      } 
    });
};
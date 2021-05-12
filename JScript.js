
let answers = ["Nope","Yes","No Way Jose","Get A Life","Really Bad", "Your Gonna Go Bald","Don't ask me again", "Ask your Momma","Go Back to School","Hello Jello","Javascript",'Thats what she said',];

window.onload = function() {
    let eight = document.getElementById("eight");
    let answer = document.getElementById("answer");
    let eightball = document.getElementById("eight-ball");
    let question = document.getElementById("question");

    
    eightball.addEventListener("click", function() {
        const length = question.value.length;
       // console.log(length);
       const isNum = !isNaN(parseInt(question.value))
        if(length <= 1 || isNum) {
            alert('Enter a Question!'); 
    }else{
          eight.innerText = "";
          let num = Math.floor(Math.random() * Math.floor(answers.length));
          answer.innerText = answers[num];
          //console.log(num);
      } 
    });
};
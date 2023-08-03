const quizData = [
{
    'que' : 'Which of the following is the markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'correct' : 'a'
},

{
    'que' : 'Which year was JavaScript launched?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'None of the above',
    'correct' : 'b'
},

{
    'que' : 'What does CSS stands for?',
    'a' : 'Hypertext Markup Language',
    'b' : 'Cascading Style Sheet',
    'c' : 'Json Object Notation',
    'd' : 'HElicopters Terminals Motorboats Lamborginis',
    'correct' : 'b'
},

]

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("queBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.que}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}

loadQuestion(index);
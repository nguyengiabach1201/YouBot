// passage = "Some teenagers enjoy spending free time with their friends. Others prefer doing leisure activities with their family members. I love spending time with my family because it's a great way to commect with them. At the weekend, we usually go for a bike ride. We cycle to some nearby villages to enjoy the fresh air. We take photos and look at them later. My big brother and I are also into cooking. My brother looks for easy recipes. After that, we prepare the ingredients and cook. Sometimes the food is good, but sometimes it isn't nevertheless we love whatever we cook. The leisure activity I like the most is doing DIY projects with my mum. She teaches me to make my own dresses and doll clothes. On special occasions, we make special dresses together. Once I won the first prize ina costume contest at my school"

// question = 'leisure activities?'

// qna.load().then(model => {
//     model.findAnswers(question, passage).then(answers => {
//         console.log('Answers: ', answers);
//     });
// });

let passage, question, model, loaded

let highlighter = new textHighlight(document.getElementById("passage"));
// let input = document.getElementById("question")
// console.log(input)
// input.addEventListener("change", (event) => {
//     question 
// });

const answersBox = document.getElementById("answers")
answersBox.hidden = true
const loadingBox = document.getElementById("loading")


function load() {
    // model = await qna.load().then(console.log('Loaded'))
    qna.load().then(Model => {
        model = Model; loaded = true; loadingBox.hidden = true
        // console.log('Loaded')        
    })
}

function answers() {
    if (loaded) 
    {
        
        highlighter.clear()
        passage = document.getElementById("passage").value
        question = document.getElementById("question").value

        if (passage)
        {
            answersBox.hidden = false
            model.findAnswers(question, passage).then(answers => {
                // console.log(answers, answers[3] == undefined)
                if (answers) {
                    let answer = answers[0].text
                
                    // for (i = 0; i < answers.length; i++) {
                    //     console.log(answers[i].text)
                    //     highlighter.search(answers[i].text);
                    // }
                
                    for (i = 0; i < answers.length; i++) {
                        answer = answers[i].text.length > answer.length ? answers[i].text : answer


                    }
                
                    highlighter.search(answer);
                
                    // highlighter.search(answers[0].text);      
                    
                    for (i = 0; i < 5; i++)
                    {
                        answerText = document.getElementById((i+1).toString())
                        answerText.hidden = false
                        // console.log(answers[i] != undefined)
                        if (answers[i] != undefined) {                            
                            answerText.innerHTML = (i+1).toString() + ". " + answers[i].text
                        } else {
                            answerText.hidden = true
                        }
                    }
                }
            })
        }       
    }
}

load()
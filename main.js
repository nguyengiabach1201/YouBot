// passage = "Some teenagers enjoy spending free time with their friends. Others prefer doing leisure activities with their family members. I love spending time with my family because it's a great way to commect with them. At the weekend, we usually go for a bike ride. We cycle to some nearby villages to enjoy the fresh air. We take photos and look at them later. My big brother and I are also into cooking. My brother looks for easy recipes. After that, we prepare the ingredients and cook. Sometimes the food is good, but sometimes it isn't nevertheless we love whatever we cook. The leisure activity I like the most is doing DIY projects with my mum. She teaches me to make my own dresses and doll clothes. On special occasions, we make special dresses together. Once I won the first prize ina costume contest at my school"

// question = 'leisure activities?'

// qna.load().then(model => {
//     model.findAnswers(question, passage).then(answers => {
//         console.log('Answers: ', answers);
//     });
// });

let passage, question, model

let highlighter = new textHighlight(document.getElementById("passage"));
// let input = document.getElementById("question")
// console.log(input)
// input.addEventListener("change", (event) => {
//     question 
// });

function load() {
    // model = await qna.load().then(console.log('Loaded'))
    qna.load().then(Model => {model = Model; console.log('Loaded')})
}

function answers() {
    highlighter.clear()
    passage = document.getElementById("passage").value
    question = document.getElementById("question").value
    model.findAnswers(question, passage).then(answers => {
        console.log(answers)
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
        }
    })
}

load()
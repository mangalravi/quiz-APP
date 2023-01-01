const question = [
    {
        "que" : "सुलहकुल की नीति किसने अपनाई?",
        "a" : "हुमायूं",
        "b" : "अकबर",
        "c" : "बाबर",
        "d" : "शाहजहाँ",
        "correct" : "b"
    },
    {
        "que" : "राष्ट्रपति सर्वोच्च न्यायालय से संविधान के किस अनुच्छेद के अंतर्गत परामर्श ले सकते है ?",
        "a" : "अनुच्छेद 123",
        "b" : "अनुच्छेद 352",
        "c" : "अनुच्छेद 312",
        "d" : "अनुच्छेद 143",
        "correct" : "d"
    },
    {
        "que" : " भारतीय संविधान के अंतर्गत निम्नलिखित में से कौन – सा अनुच्छेद संसद को राज्य सूची के विषय में संबंध में विधि बनाने की शक्ति प्रदान करता है ?",
        "a" : "अनुच्छेद-115",
        "b" : "अनुच्छेद-116",
        "c" : "अनुच्छेद-226",
        "d" : "अनुच्छेद-249",
        "correct" : "d"
    },
    {
        "que" : " संविधान के किस अनुच्छेद द्वारा संसद की संयुक्त बैठक का प्रावधान किया गया है ?",
        "a" : "अनुच्छेद 106",
        "b" : "अनुच्छेद 108",
        "c" : "अनुच्छेद 110",
        "d" : "अनुच्छेद 112",
        "correct" : "b"
    },
    {
        "que" : " लक्षद्वीप द्वीपसमूह निम्न में से किस महासागर में स्थित है ?",
        "a" : "अरब सागर",
        "b" : "बंगाल की खाड़ी",
        "c" : "हिन्द महासागर",
        "d" : "अटलांटिक महासागर",
        "correct" : "a"
    },
    {
        "que" : " निम्न में से किस नदी को ‘पंचनद’ में शामिल नहीं किया जाता है ?",
        "a" : " रावी",
        "b" : "सिंधु",
        "c" : "चेनाब",
        "d" : "झेलम",
        "correct" : "b"
    },
    {
        "que" : "वर्ष 1946 में रॉयल इंडियन नेवी ( राजसी भारतीय नौ सेना) में बगावत का कारण निम्नलिखित में से कौन था?",
        "a" : "  नस्लीय भेदभाव",
        "b" : "वरिष्ठ अधिकारियों द्वारा दुर्व्यवहार",
        "c" : "आईएनए के परीक्षण",
        "d" : "उपरोक्त सभी",
        "correct" : "a"
    },
    {
        "que" : "1857 के विद्रोह के दौरान भारत का गवर्नर जनरल कौन था?",
        "a" : "लॉर्ड कार्नवालिस",
        "b" : "लॉर्ड केनिंग",
        "c" : "लॉर्ड क्लाइव",
        "d" : "लॉर्ड कैम्पबेल",
        "correct" : "b"
    }
]

let index = 0;
let total = question.length;
let right =0 , wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
const data = question[index]
quesBox.innerText = `${index+1}) ${data.que}`;
optionInput[0].nextElementSibling.innerText = data.a;
optionInput[1].nextElementSibling.innerText = data.b;
optionInput[2].nextElementSibling.innerText = data.c;
optionInput[3].nextElementSibling.innerText = data.d;
// console.log(data);
}


const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer()
if(ans == data.correct){
right++;
}else{
wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer = () => {
    let answer
optionInput.forEach((input) => {
    if(input.checked){
       answer = input.value;
       
    }
})
return answer;
}

const reset = () => {
optionInput.forEach((input) => {
input.checked = false
})
}

const endQuiz = () => {
    document.getElementById("btn").innerHTML = `Submit`;
document.getElementById("box").innerHTML = `
<div style="text-align:center">
<h3 style="color:green">Thank you for plaing the quiz </h3>
<h2 style="color:pink">Correct:-${right} / total:-${total}</h2>
</div>
`
}

loadQuestion();
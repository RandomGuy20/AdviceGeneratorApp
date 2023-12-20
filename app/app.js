

const adviceNumber = document.querySelector(".quote-number");
const adviceQuote = document.getElementById("advice");
const diceContainer = document.querySelector(".dice-container");
const button = document.getElementById("generate-advice");
button.classList.remove("selected");




button.addEventListener("mousedown", GetAdvice);
button.addEventListener("mouseup",() =>
{
    button.classList.remove("selected");
})


async function GetAdvice()
{
    const adviceID = GetAdviceNumber();
    button.classList.add("selected");
    const response = await fetch(`https://api.adviceslip.com/advice/${adviceID}`);


    const data = await response.json();




    if(data && data.slip)
    {
        console.log(data.slip.id);
        console.log(data.slip.advice);
        adviceNumber.innerHTML = data.slip.id;
        adviceQuote.innerHTML = `"${data.slip.advice}"`;
    }
    else
    {
        adviceNumber.innerHTML = adviceID;
        adviceQuote.innerHTML = "Unfortunately there was an error generating this advice, it does not exist anymore";
    }


    
}

function GetAdviceNumber()
{
    console.log(Math.floor(Math.random() * 350 ) + 1);
    return Math.floor(Math.random() * 350 ) + 1;
}







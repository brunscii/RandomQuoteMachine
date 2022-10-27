const next = document.getElementById('next-quote');
const colors = ['#5465DA','#DB72A0','#5CDBD9','#DBB946','#DA6E37','#84C974']

function changeColor(color){
    document.body.style.backgroundColor = color;
}

function randomColor(){
    document.documentElement.style.setProperty('--newColor',colors[Math.floor(Math.random()*100%colors.length)])
}
// setInterval(randomColor,5000);
async function updateQuote() {
    
    const quote = document.documentElement.querySelector("#quote");
    const author = document.documentElement.querySelector('#author');
    
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    
    if (response.ok) {
        
        quote.textContent = data.content;
        author.textContent = data.author;
        
        console.log(data.content);
    } else {
        
        quote.textContent = "An error occured";
        console.log(data);
    
    }

    randomColor()
}
onload = () =>{
    updateQuote();
    document.getElementById('new-quote').addEventListener("click", updateQuote );
}
// setInterval(updateQuote,10000);
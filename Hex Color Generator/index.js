const hex = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,'A' ,'B' ,'C' ,'D' ,'E' ,'F'];
const btn = document.getElementById("btn");
const textcolor = document.getElementById("textcolor");
btn.addEventListener("click",function(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[RandomNum()];
    } 
    textcolor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function RandomNum(){
    return Math.floor(Math.random()*hex.length);
}


const letters =document.getElementsByClassName("letters");

for(let i=0;i < letters.length; i++){
    letters[i].style.animationDelay = i*0.5+"s"
}


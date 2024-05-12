var onScreenElement = document.getElementById("OnScreen");
var even_odd = document.getElementById("even_odd");

var onScreenValue = 0;

function plus(){
   onScreenValue++;
  onScreenElement.innerText = onScreenValue; 
console.log(onScreenValue);

if (onScreenValue % 2 === 0) {
    even_odd.innerText = "Even";
} else {
    even_odd.innerText = "Odd";
}
if(onScreenValue < 0){
    onScreenValue = 0;
    onScreenElement.innerText = onScreenValue;

    
}

}

function munies(){
    onScreenValue--;
    onScreenElement.innerText = onScreenValue;
    console.log(onScreenValue);

    if (onScreenValue % 2 === 0) {
        even_odd.innerText = "Even";
    } else {
        even_odd.innerText = "Odd";
    }
    if(onScreenValue < 0){
        onScreenValue = 0;
        onScreenElement.innerText = onScreenValue;
        console.log(onScreenValue);
        
    }
}

function reset(){
    onScreenValue = 0;
    onScreenElement.innerText = onScreenValue;
    console.log(onScreenValue);
    
}
//console.log("hello world");
var kaiju = ["rodan","godzilla","mothra","ghidorah","gigan" ,"biollante", "kamacuras", "Kumonga"];
//var kaiju = ["ghidorah"];
console.log(kaiju);
var wins = 0;
var letter ="";
var hidden =[];
var lettersChecked ="";
var testing = false;
var guessesRemaining = 15
var guessTest = false;
var counter = 0;
var kaijuIndex = Math.floor(Math.random() * kaiju.length);
var winTest = 0;

// loads window to avoid null error then calls displayhidden
window.onload = function() {displayHiddenWord()};

//prints hidden word calls win and remaining
function displayHiddenWord(){
    for(var j = 0; j < kaiju[kaijuIndex].length; j++){
    hidden[j] = "_";
}
   document.getElementById("display").textContent = hidden.join(" ");
   // console.log(hidden);
    win();
    remaining();
}

//select new kaiju
function selectWord(){
    kaijuIndex = Math.floor(Math.random() * kaiju.length);
}

//listens for a key to be pressed
window.addEventListener("keypress", storeKeyPress, false);

//convert from unicode to charactor and store in letter variable calls checkletter
function storeKeyPress(event) {
    var x = event.keyCode;         // Get the Unicode value
    letter = String.fromCharCode(x);    // Convert the value into a character
    checkLetter();
    
}


//loops through word and tests if charactor is in it, updates display, updates letter guessed
function checkLetter(){
    
    var toCheck = kaiju[kaijuIndex];

    for(var i = 0; i < toCheck.length; i++){
    if(toCheck.charAt(i) == letter){
        hidden[i] = letter;
        updateWord();
        guessTest = true;
        //counter ++;
     }
     }
    
     // loop through lettersCheck set to true if letter has been guessed
    for(var k =0; k < lettersChecked.length; k++){
        if(lettersChecked.charAt(k) == letter){
        testing = true;
    }
    }
    // updates checked letters if false
    if(testing == false){
    
        lettersChecked += letter + " "
        document.getElementById("checked").innerHTML = lettersChecked;
    }
    if(guessTest == false){
        guessesRemaining --;
        remaining();

    }
    //var m =""
    
    for(var z = 0; z < hidden.length; z++){
        //m = hidden[z];
        if(hidden[z] == "_"){
            winTest ++;
        }
    //else winTest = false;
    
    }
    console.log(winTest)  ;  
    console.log(hidden.join());
        
        if(winTest == 0){
        wins ++;
        win();
        hidden =[];
        selectWord();
        displayHiddenWord();
        lettersChecked="";
        document.getElementById("checked").innerHTML = lettersChecked;
        toCheck = kaiju[kaijuIndex];
        counter = 0;

    }

    if(guessesRemaining == 0){
        hidden =[];
        selectWord();
        displayHiddenWord();
        lettersChecked="";
        document.getElementById("checked").innerHTML = lettersChecked;
        toCheck = kaiju[kaijuIndex];
        counter = 0;
        guessesRemaining = 15;
        remaining();

    }

    //set testing back to false
    testing= false;
    guessTest = false;
    winTest = 0;

}

//refeshes word with found charactors
function updateWord(){
    
    document.getElementById("display").innerHTML = hidden.join(" ");
    //console.log(hidden);
}

function win(){
    
    document.getElementById("wins").textContent = wins;
    
}

function remaining(){
    var n = guessesRemaining.toString()
    document.getElementById("counted").textContent = n;
    
}



var btnTranslate = document.querySelector("#btn_translate");
var txtinput = document.querySelector("#txtinput");
var output = document.querySelector("#output")

// console.log(txtinput);

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text" + text
}

function errorHandler(error) {
    console.log("error occured" , error);
    alert("something went wrong")
}


function clickHandler() {
    
    
    // console.log("clicked!!");
    // console.log("input", txtinput.value );
    // output.innerText = "aaaaaaaa" + txtinput.value   ;

    var inputText = txtinput.value;

    fetch(getTranslationURL(inputText))
            .then(Response => Response.json())
            .then(json => { var translatedText = json.content.translated;
            output.innerText = translateText; }) 
           .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)
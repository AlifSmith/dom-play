const spans = document.querySelectorAll("span[data-actor]");

const characterColors = {
    "Soap": "#ffe600",   // yellow
    "Price": "#00b3ff",  // blue
    "Ghost": "#00ff6a"   // green
};



for(const mySpan of spans) {
    mySpan.addEventListener("click", function() {
        let myActor = mySpan.dataset.actor;
        highlightActor(myActor);
    });
}

function highlightActor(myActor) {
    for(const mySpan of spans) {
        if(mySpan.dataset.actor == myActor) {
            mySpan.style.backgroundColor = characterColors[myActor] || "#636363";
            mySpan.style.color = "#000000";
            mySpan.style.fontWeight = "bold";
            mySpan.style.padding = "2px 5px";
            mySpan.style.borderRadius = "3px";
        }
        else {
            mySpan.style.backgroundColor = "inherit";
            mySpan.style.color = "#000";
            mySpan.style.fontWeight = "";
            mySpan.style.padding = "2px 0";
            mySpan.style.borderRadius = "";
        }
    }
}
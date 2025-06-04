function Red(){
    lights();
    console.log("Red light");
    document.getElementById("stop").style.backgroundColor="red";
}
function yellow(){
    lights();
    console.log("Yellow light");
    document.getElementById("slow").style.backgroundColor="yellow";
}
function green(){
    lights();
    console.log("Green light");
    document.getElementById("go").style.backgroundColor="rgb(9, 226, 42)";
}
function lights(){
    document.getElementById("stop").style.backgroundColor="black";
    document.getElementById("slow").style.backgroundColor="black";
    document.getElementById("go").style.backgroundColor="black";

}
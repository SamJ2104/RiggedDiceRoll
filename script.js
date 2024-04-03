let count = 0;

document.getElementById("dice").onclick = function(){
    count ++;
    count > 6 ? count = 0 : count = count;
}



document.getElementById("roll").onclick = function(){
    document.getElementById("result").textContent = count;
    count = 0
}

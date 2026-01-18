document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()
    const inputNumberEle = document.getElementById("input-number").value
    const inputPinEle = document.getElementById("input-pin").value;
    document.getElementById("input-number").value="";
    document.getElementById("input-pin").value="";
    if(inputNumberEle.length===11){
   if(inputPinEle==="1234"){
    window.location.href="./main.html"
   }else{
    alert("please provide a valid pin")
   }
    }else{
        alert("please provide a valid number")
    }
})
document.getElementById("bonus-btn").addEventListener("click", function(){
    const inputBonusEle = document.getElementById("input-bonus").value;
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);
    document.getElementById("input-bonus").value="";

    if(inputBonusEle === "Bokajunior"){
const sum = convertedMainBalanceEle + parseFloat(100)
document.getElementById("main-balance").innerText=sum;
alert("successfully added $100 to your account")
    }else{
        alert("please type coupon code for bonus")
    }
})

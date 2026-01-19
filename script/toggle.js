document.getElementById("cash-out-div").style.display="none"
document.getElementById("send-money-div").style.display="none"
document.getElementById("bonus-div").style.display="none"
document.getElementById("pay-bill-div").style.display="none"
document.getElementById("transaction-div").style.display="none"

document.getElementById("add-money-box").addEventListener("click",function(){
    document.getElementById("add-money-div").style.display="block"
    document.getElementById("cash-out-div").style.display="none"
    document.getElementById("send-money-div").style.display="none"
    document.getElementById("bonus-div").style.display="none"
    document.getElementById("pay-bill-div").style.display="none"
    document.getElementById("transaction-div").style.display="none"
})
document.getElementById("cash-out-box").addEventListener("click",function(){
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("cash-out-div").style.display="block"
     document.getElementById("send-money-div").style.display="none"
     document.getElementById("bonus-div").style.display="none"
     document.getElementById("pay-bill-div").style.display="none"
     document.getElementById("transaction-div").style.display="none"
})
document.getElementById("send-money-box").addEventListener("click", function(){
    document.getElementById("send-money-div").style.display="block"
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("cash-out-div").style.display="none"
     document.getElementById("bonus-div").style.display="none"
     document.getElementById("pay-bill-div").style.display="none"
     document.getElementById("transaction-div").style.display="none"
})
document.getElementById("bonus-box").addEventListener("click", function(){
    document.getElementById("bonus-div").style.display="block"
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("cash-out-div").style.display="none"
    document.getElementById("send-money-div").style.display="none"
     document.getElementById("pay-bill-div").style.display="none"
     document.getElementById("transaction-div").style.display="none"
})
document.getElementById("pay-box").addEventListener("click", function(){
    document.getElementById("pay-bill-div").style.display="block"
    document.getElementById("bonus-div").style.display="none"
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("cash-out-div").style.display="none"
    document.getElementById("send-money-div").style.display="none"
    document.getElementById("transaction-div").style.display="none"
})
document.getElementById("transaction-box").addEventListener("click", function(){
    document.getElementById("transaction-div").style.display="block"
    document.getElementById("pay-bill-div").style.display="none"
    document.getElementById("bonus-div").style.display="none"
    document.getElementById("add-money-div").style.display="none"
    document.getElementById("cash-out-div").style.display="none"
    document.getElementById("send-money-div").style.display="none"
})

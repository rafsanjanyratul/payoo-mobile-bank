document.getElementById("send-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumberSendMoneyEle = document.getElementById("input-number-send-money").value;
    const inputAmountSendMoneyEle = document.getElementById("input-amount-send-money").value
    const convertedInputSendMoneyEle = parseFloat(inputAmountSendMoneyEle)
    const inputPinSendMoneyEle = document.getElementById("input-pin-send-money").value;
    const convertedInputPinSendMoneyEle = parseInt(inputPinSendMoneyEle)
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);

    document.getElementById("input-number-send-money").value=""
    document.getElementById("input-amount-send-money").value=""
    document.getElementById("input-pin-send-money").value=""

    if (inputNumberSendMoneyEle.length == 11) {
        if (inputAmountSendMoneyEle) {
            if (convertedInputPinSendMoneyEle === 1234) {
const sub = convertedMainBalanceEle - convertedInputSendMoneyEle;
document.getElementById("main-balance").innerText=sub;
            } else {
                alert("please provide a valid pin")
            }
        } else {
            alert("please enter the amount")
        }
    } else {
        alert("please provide a valid number")
    }
})
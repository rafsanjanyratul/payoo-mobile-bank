document.getElementById("cash-out-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumberCashOutEle = document.getElementById("input-number-cashout").value;
    const inputAmountCashOutEle = document.getElementById("input-amount-cashout").value
    const convertedInputCashOutEle = parseFloat(inputAmountCashOutEle)
    const inputPinCashOutEle = document.getElementById("input-pin-cashout").value;
    const convertedInputPinCashOutEle = parseInt(inputPinCashOutEle)
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);

    document.getElementById("input-number-cashout").value=""
    document.getElementById("input-amount-cashout").value=""
    document.getElementById("input-pin-cashout").value=""

    if (inputNumberCashOutEle.length == 11) {
        if (inputAmountCashOutEle) {
            if (convertedInputPinCashOutEle === 1234) {
const sub = convertedMainBalanceEle - convertedInputCashOutEle;
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
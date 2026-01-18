document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    // event.preventDefault()
    const inputAmountEle = document.getElementById("input-amount-pay").value;
    const convertedInputAmountEle = parseFloat(inputAmountEle);
    const inputPinEle = document.getElementById("input-pin-pay").value;
    const convertedPinEle = parseInt(inputPinEle);
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);
    const inputNumberEle = document.getElementById("input-number-pay").value;
    const selectEle = document.getElementById("select-pay");


    document.getElementById("input-amount-pay").value = ""
    document.getElementById("input-pin-pay").value = ""
    document.getElementById("input-number-pay").value = ""


    if (selectEle.value !== "") {

        if (inputNumberEle.length === 11) {

            if (inputAmountEle && inputPinEle) {

                if (convertedPinEle === 1234) {

                    const sub = convertedMainBalanceEle - convertedInputAmountEle;
                    document.getElementById("main-balance").innerText = sub;
                }
                else {
                    alert("please enter a valid pin")
                }
            }
            else {
                alert("please enter amount and valid pin")
            }
        }
        else {
            alert("please enter a valid account number")
        }
    }
    else {
        alert("please select a bank")
    }
})
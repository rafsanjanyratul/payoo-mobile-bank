document.getElementById("add-money-btn").addEventListener("click", function (event) {
    // event.preventDefault()
    const inputAmountEle = document.getElementById("input-amount").value;
    const convertedInputAmountEle = parseFloat(inputAmountEle);
    const inputPinEle = document.getElementById("input-pin").value;
    const convertedPinEle = parseInt(inputPinEle);
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);
    const inputNumberEle = document.getElementById("input-number").value;
    const selectEle = document.getElementById("select");


    document.getElementById("input-amount").value = ""
    document.getElementById("input-pin").value = ""
    document.getElementById("input-number").value = ""


    if (selectEle.value !== "") {

        if (inputNumberEle.length === 11) {

            if (inputAmountEle && inputPinEle) {

                if (convertedPinEle === 1234) {

                    const sum = convertedMainBalanceEle + convertedInputAmountEle;
                    document.getElementById("main-balance").innerText = sum;
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
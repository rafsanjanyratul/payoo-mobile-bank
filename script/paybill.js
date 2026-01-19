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
    const selectToPayEle = document.getElementById("select-to-pay");


    document.getElementById("input-amount-pay").value = ""
    document.getElementById("input-pin-pay").value = ""
    document.getElementById("input-number-pay").value = ""

if(convertedInputAmountEle > convertedMainBalanceEle){
alert("Insufficient balance")
return;
}

    if (selectEle.value !== "" && selectToPayEle.value !== "") {

        if (inputNumberEle.length === 11) {

            if (inputAmountEle && inputPinEle) {

                if (convertedPinEle === 1234) {

                    const sub = convertedMainBalanceEle - convertedInputAmountEle;
                    document.getElementById("main-balance").innerText = sub;

                    const div = document.createElement("div");
                    div.innerHTML = `
                    <div class="bg-white rounded-[5px] py-[6px] border border-gray-500 px-5 h-20">
                    <p class="text-xs"> Bill Paid as <span class="font-bold">${selectToPayEle.value}</span> $<span class="font-bold">${convertedInputAmountEle}</span> to <span class="font-bold">${inputNumberEle}</span> by <span class="font-bold">${selectEle.value}</span> Transaction id : <span class="font-bold">${Math.floor(100000 + Math.random() *900000)}</span></p>
                    <p class="text-xs">${new Date()}</P>
                    </div>
                    `
                    const newDiv = document.getElementById("transaction-container")
                    newDiv.appendChild(div)
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
        alert("please select a bank and bill type")
    }
})
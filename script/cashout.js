document.getElementById("cash-out-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumberCashOutEle = document.getElementById("input-number-cashout").value;
    const inputAmountCashOutEle = document.getElementById("input-amount-cashout").value
    const convertedInputAmountCashOutEle = parseFloat(inputAmountCashOutEle)
    const inputPinCashOutEle = document.getElementById("input-pin-cashout").value;
    const convertedInputPinCashOutEle = parseInt(inputPinCashOutEle)
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);

    document.getElementById("input-number-cashout").value = ""
    document.getElementById("input-amount-cashout").value = ""
    document.getElementById("input-pin-cashout").value = ""

    if (convertedInputAmountCashOutEle > convertedMainBalanceEle) {
        alert("Insufficient balance")
        return;
    }

    if (inputNumberCashOutEle.length == 11) {
        if (inputAmountCashOutEle) {
            if (convertedInputPinCashOutEle === 1234) {
                const sub = convertedMainBalanceEle - convertedInputAmountCashOutEle;
                document.getElementById("main-balance").innerText = sub;

                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="bg-white rounded-[5px] py-[6px] border border-gray-500 px-5 h-20">
                    <p class="text-xs">Cash Out $<span class="font-bold">${convertedInputAmountCashOutEle}</span> to <span class="font-bold">${inputNumberCashOutEle}</span> Transaction id : <span class="font-bold">${Math.floor(100000 + Math.random() * 900000)}</span></p>
                    <p class="text-xs">${new Date()}</P>
                    </div>
                    `
                const newDiv = document.getElementById("transaction-container")
                newDiv.appendChild(div)

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
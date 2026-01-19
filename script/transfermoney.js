document.getElementById("send-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumberSendMoneyEle = document.getElementById("input-number-send-money").value;
    const inputAmountSendMoneyEle = document.getElementById("input-amount-send-money").value
    const convertedInputSendMoneyEle = parseFloat(inputAmountSendMoneyEle)
    const inputPinSendMoneyEle = document.getElementById("input-pin-send-money").value;
    const convertedInputPinSendMoneyEle = parseInt(inputPinSendMoneyEle)
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);

    document.getElementById("input-number-send-money").value = ""
    document.getElementById("input-amount-send-money").value = ""
    document.getElementById("input-pin-send-money").value = ""

    if (convertedInputSendMoneyEle > convertedMainBalanceEle) {
        alert("Insufficient balance")
        return;
    }

    if (inputNumberSendMoneyEle.length == 11) {
        if (inputAmountSendMoneyEle) {
            if (convertedInputPinSendMoneyEle === 1234) {
                const sub = convertedMainBalanceEle - convertedInputSendMoneyEle;
                document.getElementById("main-balance").innerText = sub;

                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="bg-white rounded-[5px] py-[6px] border border-gray-500 px-5 h-20">
                    <p class="text-xs">Transfer Money $<span class="font-bold">${convertedInputSendMoneyEle}</span> to <span class="font-bold">${inputNumberSendMoneyEle}</span> Transaction id : <span class="font-bold">${Math.floor(100000 + Math.random() * 900000)}</span></p>
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
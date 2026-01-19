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

    if (convertedInputAmountEle < 0) {
        alert("please use positive digit");
        return;
    }

    if (selectEle.value !== "") {

        if (inputNumberEle.length === 11) {

            if (inputAmountEle && inputPinEle) {

                if (convertedPinEle === 1234) {

                    const sum = convertedMainBalanceEle + convertedInputAmountEle;
                    document.getElementById("main-balance").innerText = sum;

                    const div = document.createElement("div");
                    div.innerHTML = `
                    <div class="bg-white rounded-[5px] py-[6px] border border-gray-500 px-5 h-20">
                    <p class="text-xs">Added money $<span class="font-bold">${convertedInputAmountEle}</span> from <span class="font-bold">${inputNumberEle}</span> by <span class="font-bold">${selectEle.value}</span> Transaction id : <span class="font-bold">${Math.floor(100000 + Math.random() *900000)}</span></p>
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
        alert("please select a bank")
    }
})
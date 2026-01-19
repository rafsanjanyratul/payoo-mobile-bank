document.getElementById("bonus-btn").addEventListener("click", function(){
    const inputBonusEle = document.getElementById("input-bonus").value;
    const mainBalanceEle = document.getElementById("main-balance").innerText;
    const convertedMainBalanceEle = parseFloat(mainBalanceEle);
    document.getElementById("input-bonus").value="";

    if(inputBonusEle === "Bokajunior"){
const sum = convertedMainBalanceEle + parseFloat(100)
document.getElementById("main-balance").innerText=sum;
const div = document.createElement("div");
                div.innerHTML = `
                    <div class="bg-white rounded-[5px] py-[6px] border border-gray-500 px-5 h-20">
                    <p class="text-xs">Get Bonus $<span class="font-bold">100</span> for using coupon
                    <p class="text-xs">${new Date()}</P>
                    </div>
                    `
                const newDiv = document.getElementById("transaction-container")
                newDiv.appendChild(div)

alert("successfully added $100 to your account")
    }else{
        alert("please type coupon code for bonus")
    }
})

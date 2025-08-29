const heartCount = document.getElementById("addHeart");
const coinCount = document.getElementById("addCoin");
let copyCount = document.getElementById("addCopy");
let AddCopy = parseInt(copyCount.textContent);
const heart = document.querySelectorAll(".heart");
const call = document.querySelectorAll(".call");
const copy = document.querySelectorAll(".copy");
const showMessage = document.getElementById("showMessage");
const clear = document.getElementById("clear");

let heartValue = 0;
let coinValue = 100;
let copyValue = 2;

// Add heart:
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heartValue++;
    heartCount.innerText = heartValue;
  });
}

// Call Buttons:
for (let i = 0; i < call.length; i++) {
  call[i].addEventListener("click", function () {
    let card = call[i].parentElement.parentElement;
    const serviceName = card.querySelector(".help-title").textContent;
    const serviceNumber = card.querySelector(".help-number").textContent;

    if (coinValue <= 20) {
      alert("Not enough coins! Please recharge.");
      return;
    }
    coinValue -= 20;
    coinCount.innerText = coinValue;

    alert("Calling-" + serviceName + `from +${serviceNumber}`);

    // add history:
    const time = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.innerHTML =
      `
             <div class="flex items-center justify-between gap-2 bg-gray-100 rounded-lg px-3 py-2 mt-4 " >
              <div>
              <p class="text-[16px] font-semibold">${serviceName}</p>
              <p class="text-[15px] text-gray-500">${serviceNumber}</p>
            </div>
            <p>${time}</p>
           </div>


          `;
    showMessage.appendChild(div);
  });
}

// copy btn:
for(let i=0;i<copy.length;i++){
  copy[i].addEventListener("click", function(){
    let card = copy[i].parentElement.parentElement;
    const serviceNumber = card.querySelector(".help-number").textContent;
    navigator.clipboard.writeText(serviceNumber).then(function(){
      alert("Copied: " + serviceNumber);
    })
    copyValue++;
    AddCopy.textContent = copyValue;
  })
}

// history clear:
clear.addEventListener("click",function(){
  const histoty = showMessage.querySelectorAll("div");
  for(let i=0; i<histoty.length ; i++){
    histoty[i].remove();
  }
})

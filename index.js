let inputBill = document.querySelector("#input-bill");
let inputCash = document.querySelector("#input-cash");
const cashLabel = document.querySelector("#cash-label");
const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const notesTable = document.querySelector("#notes-table");

function nextClickHandler() {
  if (Number(inputBill.value) > 0) {
    btnNext.style.display = "none";
    btnCheck.style.display = "block";
    inputCash.style.display = "block";
    cashLabel.style.display = "block";
    notesTable.innerHTML = "";
  } else {
    notesTable.innerHTML = `<p class="message">Bill amount should be a positive value!</p>`;
  }
}

btnNext.addEventListener("click", nextClickHandler);

btnCheck.addEventListener("click", checkBtnHandler);

function checkBtnHandler() {
  if (inputCash.value !== "" && inputBill.value !== "") {
    if (Number(inputCash.value) < 0 || Number(inputBill.value) < 0)
      notesTable.innerHTML = `<p className="message">Invalid input! Enter positive values</p>`;
    else if (Number(inputCash.value) === Number(inputBill.value))
      notesTable.innerHTML = `<p className="message">Balance amt is 0</p>`;
    else if (Number(inputCash.value) < Number(inputBill.value)) {
        notesTable.innerHTML =`<p className="message">You need to pay
         ${Number(inputBill.value) - Number(inputCash.value)} Rupees more!</p>`
    }  
    else {
      let returnAmt = Number(inputCash.value) - Number(inputBill.value);
      let numberOfNotesList = [];
      let availableNotesDenomination = [200, 500, 100, 20, 10, 5, 1];
      for (let i = 0; i < availableNotesDenomination.length; i++) {
        numberOfNotesList.push(
          Math.trunc(returnAmt / availableNotesDenomination[i])
        );
        returnAmt %= availableNotesDenomination[i];
      }
    }
    returnAmt = Number(inputCash.value) - Number(inputBill.value);
    notesTable.style.display = "block";
    notesTable.innerHTML = `
        <div className="container">
            <table class="notes-table">
                <caption>
                    Return Amount: ${returnAmt}
                </caption>
                <tr>
                    <th>Number of notes</th>
                    <td class="notes-returned">${numberOfNotesList[0]}</td>
                    <td class="notes-returned">${numberOfNotesList[1]}</td>
                    <td class="notes-returned">${numberOfNotesList[2]}</td>
                    <td class="notes-returned">${numberOfNotesList[3]}</td>
                    <td class="notes-returned">${numberOfNotesList[4]}</td>
                    <td class="notes-returned">${numberOfNotesList[5]}</td>
                    <td class="notes-returned">${numberOfNotesList[6]}</td>
                </tr>
                <tr>
                    <th>Denomination</th>
                    <td>2000</td>
                    <td>500</td>
                    <td>100</td>
                    <td>20</td>
                    <td>10</td>
                    <td>5</td>
                    <td>1</td>
                </tr>
            </table>
        </div>
        `;
  }
}

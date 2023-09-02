const header = document.querySelectorAll("#header");

const button = document.getElementById("submit");

const result = document.getElementById("submitResult");

button.addEventListener("click", () => {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
    <p class="fname">${fname.value} ${lname.value}</p>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>`;

  result.appendChild(scoreBoard);

  result.appendChild(scoreBoard);
  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";
  sortBoard();
  deleteElement();
});

function sortBoard() {
  const scoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];

  scoreBoard.forEach((ele) => arr.push(ele));

  const sortedArray = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      const one = parseInt(a.children[2].textContent);
      const two = parseInt(b.children[2].textContent);
      if (one > two) {
        return -1;
      }
      if (two > one) {
        return 1;
      }
    });
  sortedArray.forEach((ele) => {
    result.appendChild(ele);
  });
}


function deleteElement(){
  const deleteIcon = document.querySelectorAll(".deleteIcon");
  deleteIcon.forEach(ele =>{
    ele.addEventListener("click",e =>{
      e.target.parentElement.remove();
    })
  })
}
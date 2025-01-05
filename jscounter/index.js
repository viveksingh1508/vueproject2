let count = 0;
const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("add");

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
});

const countSubBtn = document.getElementById("sub");

countSubBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});

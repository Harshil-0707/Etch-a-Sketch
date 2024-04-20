const btns = document.querySelectorAll(".btn");
const rows = document.querySelector(".gridRow");
const cols = document.querySelector(".gridCol");
const gridRange = document.querySelector("#gridRange");
const pickColor = document.querySelector(".pickColor");
const container = document.querySelector("#innerContainer");
const GridRangeValue = document.querySelector(".GridRangeHeading");

btns[0].classList.add("foucs-cls");
GridRangeValue.textContent = `${gridRange.value} X ${gridRange.value}`;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("foucs-cls");
    });
    e.currentTarget.classList.add("foucs-cls");
  });
});

gridRange.onchange = (e) => {
  changeGridSize(e.currentTarget.value);
};

function changeGridSize(gridSize) {
  GridRangeValue.textContent = `${gridSize} x ${gridSize}`;
}

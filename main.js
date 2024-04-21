let val = 0;
const btns = document.querySelectorAll(".btn");
const gridRange = document.querySelector("#gridRange");
const pickColor = document.querySelector(".pickColor");
const clearGridBtn = document.querySelector("#clearGridBtn");
const gridContainer = document.querySelector("#innerContainer");
const GridRangeValue = document.querySelector(".GridRangeHeading");

let mouseDown = false;
gridContainer.onmouseup = () => (mouseDown = false);
gridContainer.onmousedown = () => (mouseDown = true);

btns[0].classList.add("foucs-cls");
GridRangeValue.textContent = `${gridRange.value} X ${gridRange.value}`;

// create specified number cells in container when DOM is ready
(function () {
  createGrid(gridRange.value);
  fillGridColor();
})();

function fillGridColor() {
  const gridCell = document.querySelectorAll(".gridCell");
  val = gridCell;
  gridCell.forEach((gc) => {
    gc.addEventListener("mouseenter", (e) => {
      if (mouseDown === true) {
        e.currentTarget.style.backgroundColor = `${pickColor.value}`;
      }
    });
    gc.addEventListener("click", (e) => {
      e.currentTarget.style.backgroundColor = `${pickColor.value}`;
    });
  });
}

pickColor.onchange = () => {
  btns[0].style.backgroundColor = `${pickColor.value}`;

  pickColor.value >= "#BCA4A4"
    ? (btns[0].style.color = "#000000")
    : (btns[0].style.color = "#ffffff");
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("foucs-cls");
    });
    e.currentTarget.value === "Eraser" ? erase(val) : fillGridColor();
    e.currentTarget.classList.add("foucs-cls");
  });
});

gridRange.addEventListener("input", function () {
  GridRangeValue.textContent = `${this.value} x ${this.value}`;
  createGrid(this.value);
});

clearGridBtn.onclick = () => clearGrid(val);

function createGrid(gridSize) {
  gridContainer.innerHTML = "";
  drawGrid(gridSize);
  fillGridColor();
}

// Remove color from clicked grid cell
function erase(gridCell) {
  gridCell.forEach((gc) => {
    gc.addEventListener("click", (e) => {
      e.currentTarget.style.backgroundColor = "transparent";
    });
  });
}

//Remove color from every cell of the grid
function clearGrid(gridCell) {
  gridCell.forEach((gc) => {
    gc.style.backgroundColor = "transparent";
  });
}

// Draw grid and change it's size
function drawGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "gridCell");
      gridContainer.appendChild(newDiv);
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    }
  }
}

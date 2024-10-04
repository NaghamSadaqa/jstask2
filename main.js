var increaseSizeBtn = document.querySelector(".increase");
increaseSizeBtn.onclick=increaseFontSize;

function increaseFontSize() {
    document.querySelector("div").classList.add("increasefont");

}

var decreaseSizeBtn = document.querySelector(".decrease");

decreaseSizeBtn.onclick = decreaseFontSize;

function decreaseFontSize() {
    document.querySelector("div").classList.remove("increasefont");
}
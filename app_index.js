// clear storage
localStorage.clear();
//defining html elements
const xButton = document.getElementById("x-box");
const oButton = document.getElementById("o-box");
const xMask = document.getElementById("x_mask_select");
const oMask = document.getElementById("o_mask_select");

//pre-defined css classes that holds  each svg || location gameplay.css
// player x
// player o
const Mask_O = ["circle", "playerO"];
const Mask_X = ["x", "playerX"];

//initial value
localStorage.setItem("user", JSON.stringify(Mask_O));
localStorage.setItem("opponent", JSON.stringify(Mask_X));

//select mask x
function selectX() {
    // x selected
    xButton.classList.add("selected_bg");
    xMask.classList.remove("unselected");
    xMask.classList.add("selected");

    // o unselected
    oMask.classList.remove("selected");
    oButton.classList.remove("selected_bg");
    oMask.classList.add("unselected");

    localStorage.setItem("user", JSON.stringify(Mask_X));
    localStorage.setItem("opponent", JSON.stringify(Mask_O));
}

//select mask o
function selectO() {
    // o selected
    oButton.classList.add("selected_bg");
    oMask.classList.remove("unselected");
    oMask.classList.add("selected");

    // x unselected
    xMask.classList.remove("selected");
    xButton.classList.remove("selected_bg");
    xMask.classList.add("unselected");

    localStorage.setItem("user", JSON.stringify(Mask_O));
    localStorage.setItem("opponent", JSON.stringify(Mask_X));
}

//select mask
xButton.addEventListener("click", selectX);
oButton.addEventListener("click", selectO);

const feedbackBtn = document.querySelector(".feedback--0");
const draggable = document.getElementById("draggable");
const draggableHead = document.getElementById("draggableheader");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const bugBtn = document.querySelector(".bugBtn");
const bugField = document.querySelector(".bugfield");
const ideaBtn = document.querySelector(".ideaBtn");
const ideaField = document.getElementById("ideafield");
const otherBtn = document.querySelector(".otherBtn");
const otherField = document.getElementById("otherfield");
btn.onclick = function () {
  modal.style.display = "block";
  draggableHead.classList.remove("hidden");
  draggable.classList.toggle("hidden");
};
// BUGBTN
bugBtn.addEventListener("click", function () {
  if (bugField.classList.contains("hidden")) {
    ideaField.classList.add("hidden");
    bugField.classList.remove("hidden");
    bugBtn.style.top = "";
    bugBtn.style.bottom = "-82px";
    ideaBtn.style.bottom = "-6px";
    ideaBtn.style.top = "";
  } else if (!bugField.classList.contains("hidden")) {
    bugField.classList.add("hidden");
    bugBtn.style.top = "-0.5px";
    ideaBtn.style.top = "-0.5px";
  }
});
ideaBtn.addEventListener("click", function () {
  if (ideaField.classList.contains("hidden")) {
    bugField.classList.add("hidden");
    ideaField.classList.remove("hidden");
    ideaBtn.style.top = "";
    ideaBtn.style.bottom = "-52.5px";
    bugBtn.style.bottom = "";
  } else if (!ideaField.classList.contains("hidden")) {
    ideaField.classList.add("hidden");
    ideaBtn.style.top = "-0.5px";
  }
});
otherBtn.addEventListener("click", function () {
  if (otherField.classList.contains("hidden")) {
    bugField.classList.add("hidden");
    ideaField.classList.add("hidden");
    otherField.classList.remove("hidden");
    ideaBtn.style.top = "";
    bugBtn.style.top = "";
  } else if (!otherField.classList.contains("hidden")) {
    ideaField.classList.add("hidden");
    bugField.classList.add("hidden");
  }
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";

  draggable.classList.add("hidden");
  draggableHead.classList.add("hidden");
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// bug btn

// draggable window
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//resizable window
function resizeWindow() {
  document.getElementById("draggable").style.resize = "both";
}

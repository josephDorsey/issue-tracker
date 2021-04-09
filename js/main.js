// DEFINITIONS

const feedbackBtn = document.querySelector(".feedback--0");
const feedbackModal = document.getElementById("send-feedback-modal");
const modal = document.getElementById("myModal");
const newModal = document.querySelector(".modal");
const btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const bugBtn = document.querySelector(".bugBtn");
const bugField = document.querySelector(".bugfield");
const ideaBtn = document.querySelector(".ideaBtn");
const ideaField = document.getElementById("ideafield");
const otherBtn = document.querySelector(".otherBtn");
const otherField = document.getElementById("otherfield");
const previousBug = document.querySelector(".previous--bug");
const previousIdea = document.querySelector(".previous--idea");
const previousOther = document.querySelector(".previous--other");
const menu = document.querySelector(".menu");
const sendBugBtn = document.querySelector(".send-bug");
const sendIdeaBtn = document.querySelector(".send-idea");
const sendOtherBtn = document.querySelector(".send-other");
const sendAnotherBtn = document.querySelector(".send-another");
const bugText = document.querySelector(".bug-text");
const bugSeverity = document.getElementById("bug-severity");
const assignedInput = document.querySelector(".assigned-input");

// --------------------
// BUTTON FUNCTIONALITY
// --------------------
btn.onclick = function () {
  //   span.style = "visibility: hidden";
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};
// reset functionality
const resetButton = function () {
  bugText.value = "";
  bugSeverity.selectedIndex = 0;
  assignedInput.value = "";
};

span.onclick = function () {
  modal.style.display = "none";
  hideButtons();
};

const hideButtons = function () {
  bugBtn.style = "visibility: hidden";
  ideaBtn.style = "visibility: hidden";
  otherBtn.style = "visibility: hidden";
};
const showButtons = function () {
  bugBtn.style = "visibility: visible";
  ideaBtn.style = "visibility: visible";
  otherBtn.style = "visibility: visible";
};

sendAnotherBtn.addEventListener("click", function () {
  feedbackModal.classList.add("hidden");
  modal.style = "visibility: visible";
  showButtons();
});

//---------------//
// Feedback Button
//--------------//

sendBugBtn.addEventListener("click", function () {
  bugField.classList.add("hidden");
  //   feedbackModal.classList.remove("hidden");
  feedbackModal.classList.remove("hidden");
  //   modal.style = "visibility: visible";
  modal.classList.remove("hidden");
});
sendIdeaBtn.addEventListener("click", function () {
  ideaField.classList.add("hidden");
  feedbackModal.classList.remove("hidden");
  //   modal.style = "visibility: visible";
  modal.classList.remove("hidden");
});
sendOtherBtn.addEventListener("click", function () {
  otherField.classList.add("hidden");
  feedbackModal.classList.remove("hidden");
  //   modal.style = "visibility: visible";
  modal.classList.remove("hidden");
});

// --------------- //
// PREVIOUS BUTTON
// --------------- //

// previous button return back to first menu
previousBug.addEventListener("click", function () {
  bugField.classList.add("hidden");
  span.classList.toggle("hidden");
  showButtons();
  //   bugBtn.style.bottom = "-5px";
  //   bugBtn.style = "visibility: visible";
  //   ideaBtn.style = "visibility: visible";
  //   otherBtn.style = "visibility: visible";
  //   bugBtn.classList.remove("hidden");
});

//previous button for Idea
previousIdea.addEventListener("click", function () {
  ideaField.classList.add("hidden");
  span.classList.toggle("hidden");
  //   bugBtn.style.bottom = "-5px";
  showButtons();
  //   bugBtn.style = "visibility: visible";
  //   ideaBtn.style = "visibility: visible";
  //   otherBtn.style = "visibility: visible";
  //   bugBtn.classList.remove("hidden");
});
//previous button for Other
previousOther.addEventListener("click", function () {
  otherField.classList.add("hidden");
  span.classList.toggle("hidden");
  //   bugBtn.style.bottom = "-5px";
  showButtons();
  //   bugBtn.style = "visibility: visible";
  //   ideaBtn.style = "visibility: visible";
  //   otherBtn.style = "visibility: visible";
  //   bugBtn.classList.remove("hidden");
});
// ---------------------
// BTN EVENT LISTENERS
// ---------------------

// bugBTN
bugBtn.addEventListener("click", function () {
  hideButtons();
  //   span.classList.remove("hidden");
  span.classList.remove("hidden");
  //   bugBtn.style = "visibility: hidden";
  //   ideaBtn.style = "visibility: hidden";
  //   otherBtn.style = "visibility: hidden";

  if (bugField.classList.contains("hidden")) {
    ideaField.classList.add("hidden");
    bugField.classList.remove("hidden");
    bugBtn.style.top = "";
    bugBtn.style.bottom = "-82px";
    ideaBtn.style.bottom = "-6px";
    ideaBtn.style.top = "";
  } else if (!bugField.classList.contains("hidden")) {
    bugField.classList.add("hidden");
    bugBtn.style.bottom = "0px";
    ideaBtn.style.top = "-0.5px";
  }
});

//ideaBtn
ideaBtn.addEventListener("click", function () {
  hideButtons();
  span.classList.remove("hidden");
  //   ideaBtn.style = "visibility: hidden";

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
// otherBtn
otherBtn.addEventListener("click", function () {
  hideButtons();
  span.classList.remove("hidden");
  //   otherBtn.style = "visibility: hidden";

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

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// bug btn

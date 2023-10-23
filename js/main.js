const body = document.querySelector("body");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const callToActionBack = document.querySelector(".call_to_action__back");
const customersSection = document.querySelector(".customers");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY) {
      header.classList.add("background");
    } else {
      header.classList.remove("background");
    }
  }, 300)
);

window.addEventListener("load", () => {
  setCallToActionBackWidth();
  setCustomersSectionPosition();

  if (window.scrollY) {
    header.classList.add("background");
  }
});

window.addEventListener("resize", _.throttle(onResizePage, 350));

function onResizePage() {
  setCallToActionBackWidth();
  setCustomersSectionPosition();
}

function setCallToActionBackWidth() {
  const containerCoord = container.getBoundingClientRect();

  callToActionBack.style.maxWidth = `${
    container.clientWidth + containerCoord.left - 12
  }px`;
}

function setCustomersSectionPosition() {
  const containerCoord = container.getBoundingClientRect();

  customersSection.style.maxWidth = `${
    container.clientWidth + containerCoord.left - 12
  }px`;
}

document.addEventListener("DOMContentLoaded", function () {
  const radioBtns = document.querySelectorAll(".radio");
  const hideDivs = document.querySelectorAll(".hide");
  let currentSelectedDiv = null;

  function toggleHideDiv() {
    hideDivs.forEach((div) => {
      div.style.display = "none";
    });

    const hideDiv = this.closest(".unhide").nextElementSibling;
    hideDiv.style.display = "flex"; // Set the display to 'flex' assuming it was intended to be a flex container
  }

  function changeBackgroundColor(div) {
    if (currentSelectedDiv) {
      currentSelectedDiv.style.backgroundColor = "";
    }
    div.style.backgroundColor = "#F4FBF9"; // Change the background color here
    currentSelectedDiv = div;
  }

  radioBtns.forEach((radio) => {
    radio.addEventListener("change", function () {
      toggleHideDiv.call(this);
      changeBackgroundColor(this.closest(".second, .third, .fourth"));
    });
  });

  const clickableDivs = document.querySelectorAll(".second, .third, .fourth");
  clickableDivs.forEach((div) => {
    div.addEventListener("click", function () {
      const radioBtn = this.querySelector(".radio");
      if (radioBtn) {
        radioBtn.checked = true;
        toggleHideDiv.call(radioBtn);
        changeBackgroundColor(this);
      }
    });
  });
});

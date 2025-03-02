var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Machine Learning",
      "Data Analytics",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });// Scroll Animation Handling (Optimized)
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section, .AboutMe, .Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

// Function to check if element is in viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function resume() {
  window.location.href = 'C:\Users\spand\Downloads\portfolio\portfolio\MUKKASPANDANA_RESUME.pdf';
}

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
  });

  // Button Click Animation
  const buttons = document.querySelectorAll(".butt");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("clicked");
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 200); // Effect duration
    });
  });
});
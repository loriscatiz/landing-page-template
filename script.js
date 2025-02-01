console.log("okay");

caseStudyCards = document.querySelectorAll(".case-study-card");

console.log(caseStudyCards);

function moveSlidesBackwards() {
  caseStudyCards.forEach((element) => {
    element.classList.add("sliding-left");
    setTimeout(() => {
      element.classList.remove("sliding-left");

      if (element.classList.contains("cs-card-pos-0")) {
        element.classList.remove("cs-card-pos-0");
        element.classList.add("cs-card-pos-3");
      } else if (element.classList.contains("cs-card-pos-1")) {
        element.classList.remove("cs-card-pos-1");
        element.classList.add("cs-card-pos-0");
      } else if (element.classList.contains("cs-card-pos-2")) {
        element.classList.remove("cs-card-pos-2");
        element.classList.add("cs-card-pos-1");
      } else if (element.classList.contains("cs-card-pos-3")) {
        element.classList.remove("cs-card-pos-3");
        element.classList.add("cs-card-pos-2");
      }
    }, 300);
  });

  console.log("clicked btn");
}

function moveSlidesForward() {
  caseStudyCards.forEach((element) => {
    if (element.classList.contains("cs-card-pos-3")) {
      element.classList.add("new-head-card");
      element.classList.replace("cs-card-pos-3", "cs-card-pos-0");
    }
  });

  setTimeout(() => {
    caseStudyCards.forEach((element) => {
      element.classList.add("sliding-right");

      setTimeout(() => {
        element.classList.remove("sliding-right");

        if (
          element.classList.contains("cs-card-pos-0") &&
          !element.classList.contains("new-head-card")
        ) {
          element.classList.replace("cs-card-pos-0", "cs-card-pos-1");
        } else if (element.classList.contains("cs-card-pos-1")) {
          element.classList.replace("cs-card-pos-1", "cs-card-pos-2");
        } else if (element.classList.contains("cs-card-pos-2")) {
          element.classList.replace("cs-card-pos-2", "cs-card-pos-3");
        } else if (element.classList.contains("cs-card-pos-3")) {
          element.classList.replace("cs-card-pos-3", "cs-card-pos-0");
        }

        element.classList.remove("new-head-card");
      }, 300); // Match animation time
    });
  }, 50); // Small delay to let `.new-head-card` take effect
}

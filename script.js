(() => {
  const selectPageTarget = t => {
    document.getElementsByTagName("body")[0].classList = t + " fadeout";
    setTimeout(() => {
      window.scroll(0, window.innerHeight);
      document.getElementsByTagName("body")[0].classList = t + " fadein";
    }, 200);
  }

  document.getElementById("pageForStudents").addEventListener("click", () => {
    selectPageTarget("students")
  });
  document.getElementById("pageForCompany").addEventListener("click", () => {
    selectPageTarget("company")

  });

  document.querySelectorAll(".question-item").forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("turned");
    })
  });
})();
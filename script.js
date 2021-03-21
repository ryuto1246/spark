(() => {
  document.getElementById("pageForStudents").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList="students"
  });
  document.getElementById("pageForCompany").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList="company"
  });

  document.querySelectorAll(".question-item").forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("turned")
    })
  });

})();
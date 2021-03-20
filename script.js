(() => {
  document.getElementById("pageForStudents").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList="students"
  });
  document.getElementById("pageForCompany").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList="company"
  });
})();
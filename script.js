document.addEventListener("DOMContentLoaded", function () {
  const modeToggleBtn = document.getElementById("modeToggle");
  const body = document.body;

  modeToggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");

      if (body.classList.contains("dark-mode")) {
          modeToggleBtn.textContent = "Toggle Light Mode";
      } else {
          modeToggleBtn.textContent = "Toggle Dark Mode";
      }
  });
});
var CategoryObject = {
    "Photography": ["1","2","3","4","5"],
    "Artwork": ["6","7","8"],
    "Creative-Writing": ["9","10","11"],
    "Vlogs": ["12","13",'14']
  }
  window.onload = function() {
    var CategorySel = document.getElementById("Category");
    var ThemeSel = document.getElementById("theme");
    for (var x in CategoryObject) {
      CategorySel.options[CategorySel.options.length] = new Option(x, x);
    }
    CategorySel.onchange = function() {
        ThemeSel.length = 1;
        var z = CategoryObject[this.value];
            for (var i = 0; i < z.length; i++) {
              ThemeSel.options[ThemeSel.options.length] = new Option(z[i], z[i]);
            }
    }
  }
  function mailing()
  {
    var email=document.getElementById('email').value;
    var name=document.getElementById('name').value;
    var category=document.getElementById('Category').value;
    var theme=document.getElementById('theme').value;
    var link=document.getElementById('link').value;
    var entry=document.getElementById('entry').value;
    let address = 'mailto:'.concat(email);
    let subject = address.concat('?subject=Navroopam Participation Confirmation');
    let body = "Hi ".concat(name,",\nYour entry under the category ",category," and the theme ",theme," has been recorded. Your entry number is ",entry,".\nThe link for the post is: ",link,"\nRegards,\nHITian Inside.");
    let content = subject.concat('&body=',body);
    document.getElementById("mailings").href=content;
  }
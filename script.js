let toggles = document.querySelectorAll(".toggle"),
  sifatli = document.getElementById("sifatli"),
  arzon = document.getElementById("arzon"),
  tez = document.getElementById("tez");

toggles.forEach((eachToggle) => {
  eachToggle.addEventListener("change", (e) => {
    Qonun(e.target);
  });
});

function Qonun(bosilganda) {
  if (sifatli.checked && arzon.checked && tez.checked) {
    if (sifatli === bosilganda) {
      tez.checked = false;
    }
    if (arzon === bosilganda) {
      sifatli.checked = false;
    }
    if (tez === bosilganda) {
      arzon.checked = false;
    }
  }
}

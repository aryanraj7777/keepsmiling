document.getElementById("dailyForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const subject = document.getElementById("subject").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const milestone = document.getElementById("milestone").checked;
  const date = new Date().toLocaleDateString();

  const newEntry = { subject, hours, milestone, date };
  const existing = JSON.parse(localStorage.getItem("reports")) || [];
  existing.push(newEntry);
  localStorage.setItem("reports", JSON.stringify(existing));

  window.location.href = "motivation.html";
});

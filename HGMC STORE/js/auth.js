document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  localStorage.setItem("hellsGateUser", username);
  window.location.href = "dashboard.html";
});

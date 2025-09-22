<form id="loginForm">
  <div class="form-group">
    <label>Email</label>
    <input type="email" id="email" placeholder="Enter your email" required />
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" id="password" placeholder="Enter your
password" required />
  </div>
  <button type="submit">Login</button>
</form>

<script>
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      alert(data.message);
      // redirect if needed: window.location.href = "/dashboard.html";
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("⚠️ Server error, try again later");
  }
});
</script>

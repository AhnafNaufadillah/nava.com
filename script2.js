  const USERNAME_BENAR = "ahnaf"; 
    const PASSWORD_BENAR = "beben"; 


    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Supaya form tidak langsung pindah halaman

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Cek apakah input sesuai dengan data login
       if (username === USERNAME_BENAR && password === PASSWORD_BENAR) {
        window.location.href = "index.html"; // arahkan ke halaman lain

      } else {
        alert("Username atau password salah! Coba lagi.");
      }
    });
<!-- Firebase v8 CDN Scripts - Add this in your HTML BEFORE your JS file -->
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

<script>
  // Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBt8QzfOzUfgIW_4PUZEXb2HzW8DBIr0m4",
    authDomain: "footslog-2025.firebaseapp.com",
    projectId: "footslog-2025",
    storageBucket: "footslog-2025.appspot.com",
    messagingSenderId: "36249175290",
    appId: "1:36249175290:web:e4a0d478d552458e727543",
    measurementId: "G-HPDWYH5SP1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Handle form submission
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    try {
      await db.collection("registrations").add({
        name,
        email,
        phone,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Registration submitted");
    } catch (error) {
      console.error("Error submitting registration: ", error);
    }
  });
});


  // Countdown script
  const countdownEl = document.getElementById('countdown');

  const eventDate = new Date(Date.UTC(2025, 5, 20, 8, 0, 0));  // June 20, 2025 at 8:00 AM UTC

  setInterval(() => {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "🎉 Event has started!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.innerText = `⏳ ${days}d ${hrs}h ${mins}m left`;
  }, 1000);
</script>

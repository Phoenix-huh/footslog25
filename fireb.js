const firebaseConfig = {
    apiKey: "AIzaSyCRxMDOwkNNWVfwztxS9othvtewySId0FY",
    authDomain: "footslog3.firebaseapp.com",
    databaseURL: "https://footslog3-default-rtdb.firebaseio.com",
    projectId: "footslog3",
    storageBucket: "footslog3.firebasestorage.app",
    messagingSenderId: "461926073915",
    appId: "1:461926073915:web:e775779c6ae7dfd745fe1e"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //ref fir datab
  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener("submit", submitForm)

  function submitForm(e){
  e.preventDefault();

  var name = getElementVal('fullname');
  var emailid = getElementVal('email');
  var phone = getElementVal('phone');
  var msgContent = getElementVal('message');

   saveMessages(name,emailid, phone, msgContent)
  }

const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        msgContent: msgContent,
    })
}

  const getElementVal = (id) => {
  return document.getElementById(id).value;
  }

  // Show confirmation modal only once after successful form submission
window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("formSubmitted") === "true") {
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
        sessionStorage.removeItem("formSubmitted");
    }
});

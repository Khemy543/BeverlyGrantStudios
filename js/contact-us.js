function contactUs(e) {
  let name = document.querySelector(".contact-name").value;
  let email = document.querySelector(".contact-email").value;
  let message = document.querySelector(".contact-message").value;

  const data = { name, email, message };

  fetch("http://127.0.0.1:5000/api/contact-us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

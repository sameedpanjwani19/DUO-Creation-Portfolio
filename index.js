const nav = document.getElementById("nav-bar");
const arrowEl = document.getElementById("arrow-up");

window.addEventListener('scroll', ()=> {

    if(window.scrollY >= 50){  //For nav bar
        nav.classList.add('active-nav');
    } else{
        nav.classList.remove('active-nav');
    }

    if(window.scrollY >= 300){  //For up arrow
        arrowEl.style.opacity = "1";
    }
    else{
        arrowEl.style.opacity = "0";
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_orwfmwp', 'template_to5cnda', this)
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        text: "Your message has been sent successfully!",
        icon: "success"
      });
      document.getElementById('contact-form').reset();
  }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send the message. Please try again.');
  });
});
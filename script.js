// Contact form
const form = document.getElementById('contactForm') || document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let statusEl = document.getElementById('formStatus');
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'formStatus';
      form.after(statusEl);
    }

    const name = form.querySelector('input[name="name"]')?.value.trim();
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const message = form.querySelector('textarea[name="message"]')?.value.trim();

    if (!name || !email || !message) {
      statusEl.innerHTML = '<span style="color:#ffb3b3">Please fill all fields.</span>';
      return;
    }

    const subject = `Contact from Portfolio - ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink =
      `mailto:shaaz.scorpy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    statusEl.innerHTML =
      '<span style="color:lightgreen">Opening your email client…</span>';

    form.reset();
  });
}

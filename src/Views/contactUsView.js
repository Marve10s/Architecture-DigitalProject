function generateMarkup() {
  return `<section class="section container contact-info_section">
  <div class="contact-info_description">
    <h1 class="title">
      Contact <br />
      <strong>Information</strong>
    </h1>
    <div class="contact-info_address">
      <h3>Company name</h3>
      <p>1234 Sample Street Austin Texas 76401</p>
    </div>
    <p class="contact-info_ip">512.333.2222</p>
    <p class="contact-info_email">sampleemail@gmail.com</p>
    <button class="btn contact-info_btn">Contact us</button>
  </div>
  <div class="contact-info_map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.3954880718934!2d30.74816637677077!3d46.46067376640317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631628f04ac87%3A0x763df5ec1b5b99fd!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQntC00LXRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwwrs!5e0!3m2!1suk!2str!4v1714136084463!5m2!1suk!2str"
      width="800"
      height="600"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>`;
}

export default { generateMarkup };

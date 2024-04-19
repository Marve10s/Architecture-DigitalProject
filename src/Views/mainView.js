function generateMarkup() {
  return `
  <main id="main">
  <!-- ABOUT -->
  <section class="container section">
    <h2></h2>
  </section>
  <!-- START HERO  SECTION -->
  <section class="hero container section">
    <div class="hero-title">
      <h1 class="title">Project <br> <strong>Lorum</strong></h1>
      <div class="arrow-btns">
        <button class="arrow-btn-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </button>
        <!-- ARROW BTNS -->
        <button class="arrow-btn-right active-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
        <div class="line"></div>
      </div>
      <!-- COUNTER -->
      <div class="hero-counter">
        <span class="counter-current">0 <span class="counter-slach">/</span> <span class="counter-project">
            02</span><br>1</span>
      </div>
    </div>
    <!-- IMAGE  -->
    <div class="hero-img">
      <img src="/about-1.png" alt="Home image">
      <div class="btn-container">
        <button class="btn project-btn">View project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{1.5}"
            stroke="currentColor" classname="w-6 h-6">
            <path strokelinecap="round" strokelinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- END OF HERO  -->

  <!-- START ABOUT SECTION -->
  <section class="about container section">
    <div class="about-wrapper">
      <div class="about-imgs">
        <img class="about-img-1" src="/hero-1.png" alt="home-1">
        <img class="about-img-2" src="/hero-2.png" alt="home-2">
        <img class="about-img-3" src="/hero-3.png" alt="home-3">
      </div>
      <div class="about-info">
        <h2 class="about-title">About</h2>
        <p class="about-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button class="btn about-btn">read more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{1.5}"
            stroke="currentColor" classname="w-6 h-6">
            <path strokelinecap="round" strokelinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- END ABOUT SECTION -->


  <!-- START FOCUS SECTION -->

  <section class="section container main-focus">
    <!-- TITLE -->
    <h1 class="focus-title"> main focus/mission statement</h1>
    <div class="focus-wrapper">
      <!-- FIRST -->
      <div class="focus-first">
        <h2 class="focus-num">1</h2>
        <p class="focus-description__first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur,
          lectus et facilisis placerat.</p>
      </div>
      <!-- SECOND -->
      <div class="focus-second">
        <div class="">
          <h2 class="focus-num">2</h2>
        </div>
        <div class="">
          <p class="focus-description__second">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur,
            lectus et facilisis placerat, magna
            mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- END FOCUS SECTION -->

  <!-- START OUR PROJECT SECTION -->

  <section class="section container our-projects">
    <h2 class="our-project__title">Our projects</h2>
    <div class="projects-wrapper">

      <div class="project-img1">
        <div class="overlay"></div>
        <img src="/project-1.jpeg" alt="project-1">
        <div class="project1-text">
          <h2 class="project1-title">Sample Project</h2>
          <div class="">
            <button class="project1-btn">View more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="project-img2">
        <img src="/project-2.png" alt="project-2">
      </div>

      <div class="project-img3">
        <img src="/project-3.png" alt="project-3">
      </div>

      <div class="project-img4">
        <img src="/project-4.png" alt="project-4">
      </div>

      <div class="project-img5">
        <img src="/project-5.png" alt="project-5">
      </div>

    </div>
    <div class="all-projects__btn">
      <button class="btn">All projects
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </button>

    </div>
  </section>
  <!-- END OUR PROJECT SECTION -->

  <section class="section container contact-us">
    <h1 class="contact-us_title">Contact us</h1>
    <div class="contact-us_wrapper">
      <form class="contact-us_form" action="" method="post">
        <input type="text" id="name" name="name" placeholder="Name" required>
        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required>
        <input type="email" id="email" name="email" placeholder="Email" required>
        <input type="text" id="interesing" name="interesting" placeholder="Interested in" required>
        <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
      </form>
      <img class="contact-us_img" src="/about-1.png" alt="">
    </div>

    <button class="btn contact-us_btn" type="submit">Send Email
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>
  </section>
</main>
      `;
}

export default { generateMarkup };

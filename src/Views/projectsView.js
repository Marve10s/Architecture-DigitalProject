function generateMarkup() {
  return `
    <section class="container section">
    <h1 class="title">
      Our <br />
      <strong>Projects</strong>
    </h1>
    <div class="projectView-wrapper">
      <div class="projectView-block">
        <div class="projectView-img">
        <img src="/photoGallery/gallery-1.jpg" alt="gallery" />
        </div>
        <div class="projectView-description">
          <h2 class="projectView-title">Sample project 1</h2>
          <p class="projectView-description_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
          </p>
          <button class="btn">
            view more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="{1.5}"
              stroke="currentColor"
              classname="w-6 h-6"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="projectView-block">
        <div class="projectView-img">
        <img src="/photoGallery/gallery-2.jpg" alt="gallery" />
        </div>
        <div class="projectView-description">
          <h2 class="projectView-title">Sample project 2</h2>
          <p class="projectView-description_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
          </p>
          <button class="btn">
            view more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="{1.5}"
              stroke="currentColor"
              classname="w-6 h-6"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="projectView-block">
        <div class="projectView-img">
        <img src="/photoGallery/gallery-3.jpg" alt="gallery" />
        </div>
        <div class="projectView-description">
          <h2 class="projectView-title">Sample project 3</h2>
          <p class="projectView-description_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
          </p>
          <button class="btn">
            view more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="{1.5}"
              stroke="currentColor"
              classname="w-6 h-6"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section> 
    `;
}

export default { generateMarkup };

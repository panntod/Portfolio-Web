const testimonialsData = [
  {
    imgSrc: "images/dicoding-js.png",
    title: "Javascript Dasar",
    description:
      "Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.Js.",
    date: "16 November 2023",
    certificateLink:
      "https://drive.google.com/drive/folders/1hN-y1yvJvyGIWMfTBYYcP8m6rQCKjI9H?usp=sharing",
  },
  {
    imgSrc: "images/ukbi.png",
    title: "UKBI",
    description:
      "Predikat ini menunjukkan bahwa peserta uji memiliki kemahiran yang memadai dalam berkomunikasi dengan menggunakan bahasa Indonesia, baik lisan maupun tulis. Dengan kemahiran ini, yang bersangkutan mampu berkomunikasi untuk keperluan sintas dan kemasyarakatan dengan baik, tetapi masih mengalami kendala dalam hal keprofesian yang kompleks.",
    date: "31 Oktober 2023",
    certificateLink:
      "https://drive.google.com/drive/folders/1hN-y1yvJvyGIWMfTBYYcP8m6rQCKjI9H?usp=sharing",
  },
  {
    imgSrc: "images/user-experience.png",
    title: "User Experience",
    description:
      "Kelas ini ditujukan untuk individu yang ingin menjadi seorang Web Developer atau pun Web Design memperhatikan standar industri yang telah dirangkum oleh Pijar Mahir. Di akhir kelas, siswa dapat menguasai dasar User Experience baik untuk web, atau mobile.",
    date: "18 Maret 2023",
    certificateLink:
      "https://drive.google.com/drive/folders/1hN-y1yvJvyGIWMfTBYYcP8m6rQCKjI9H?usp=sharing",
  },
];

function generateTestimonialCard(testimonial) {
  const testimonialItem = document.createElement("li");
  testimonialItem.classList.add("testimonials-item");

  testimonialItem.innerHTML = `
      <div class="content-card" data-testimonials-item>
        <figure class="testimonials-avatar-box">
          <img src="${testimonial.imgSrc}" alt="${testimonial.title}" width="60" data-testimonials-avatar>
        </figure>
  
        <h4 class="h4 testimonials-item-title" data-testimonials-title>${testimonial.title}</h4>
  
        <div class="testimonials-text" data-testimonials-text>
          <p>${testimonial.description}</p>
          <time datetime="${testimonial.date}">${testimonial.date}</time>
          <a href="${testimonial.certificateLink}" class="testimonials-link">See This Certificate</a>
        </div>
      </div>
    `;

  return testimonialItem;
}

function renderTestimonials() {
  const testimonialsList = document.querySelector(".testimonials-list");

  testimonialsData.forEach((testimonial) => {
    const testimonialCard = generateTestimonialCard(testimonial);
    testimonialsList.appendChild(testimonialCard);
  });
}

renderTestimonials();

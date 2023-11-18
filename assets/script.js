// toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// scroll sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Menghapus class 'active' dari semua tautan menu
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      // Menambahkan class 'active' ke tautan menu yang sesuai dengan bagian yang sedang aktif
      document
        .querySelector("nav ul li a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // navbar background color
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 90) {
    navBar.classList.add("bg-navbar");
  } else {
    navBar.classList.remove("bg-navbar");
  }

  // sticky header

  // remove toggle icon and navbar when click navbar links (scroll)

  // animation footer on scroll
};

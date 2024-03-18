const projectsData = [
  {
    title: "Personal Website",
    imgSrc: "images/project/personal-web.png",
    category: "Web",
    url: "https://panntod.github.io",
  },
  {
    title: "Perpustakaan Online",
    imgSrc: "images/project/perpustakaanOnline.png",
    category: "Web",
    url: "https://perpustakaan-pandhu.000webhostapp.com/login.php",
  },
  {
    title: "Discord Bot",
    imgSrc: "images/project/discord-bot.png",
    category: "Web",
    url: "https://github.com/panntod/Discord-bot"
  },
  {
    title: "Kantin App",
    imgSrc: "images/project/kantin-web.png",
    category: "Web",
    url: "https://kantin-pandhu.000webhostapp.com/login.php",
  },
  {
    title: "Movie Web",
    imgSrc: "images/project/movie-web.png",
    category: "Web",
    url: "https://search-react-alpha.vercel.app/",
  },
  {
    title: "CRUD Ejs",
    imgSrc: "images/project/crud-web.png",
    category: "Web",
    url: "https://crud-node-js-two.vercel.app/",
  },
  {
    title: "React Tools",
    imgSrc: "images/project/react-tools.png",
    category: "Web",
    url: "https://tools-react-ten.vercel.app",
  },
  {
    title: "Kalkulator Sederhana",
    imgSrc: "images/project/kalkulator-sederhana.png",
    category: "Web",
    url: "https://matematika-sederhana.vercel.app/home.html",
  },
  {
    title: "Munjalindra Website",
    imgSrc: "images/project/munjalindra-website.png",
    category: "Web",
    url: "https://panntod.github.io/Munjalindra-Web/",
  },
  {
    title: "Auction Website",
    imgSrc: "images/project/auction.png",
    category: "Web",
    url: "https://auction-project-website.000webhostapp.com/home.php",
  },
  {
    title: "Todolist OAuth Website",
    imgSrc: "images/project/oauth-google.png",
    category: "Web",
    url: "https://todolist-node-js.vercel.app/",
  },
  {
    title: "MERN App",
    imgSrc: "images/project/mern-app.png",
    category: "Web",
    url: "https://github.com/panntod/MERN-Frontend"
  },
  {
    title: "Premium App",
    imgSrc: "images/project/premium-app.png",
    category: "Web",
    url: "https://www.figma.com/file/rIbsiEJviZJW14fbf1QsN5/Draft-TA?type=design&node-id=0%3A1&mode=dev&t=sD6xrj2w4DSxsQAt-1",
  },
  {
    title: "Multiple Role Authentication",
    imgSrc: "images/project/cafe-app.png",
    category: "Web",
    url: "https://github.com/panntod/Cafe-Frontend",
  },
];

function generateProjectCard(project) {
  const { title, imgSrc, category } = project;

  const listItem = document.createElement("li");
  listItem.classList.add("project-item", "active");
  listItem.setAttribute("data-filter-item", "");
  listItem.setAttribute("data-category", "Dekstop");

  const link = document.createElement("a");
  link.href = `${project.url}`;
  link.target = "_blank";
  link.classList.add("project-item", "active");
  link.setAttribute("data-filter-item", "");
  link.setAttribute("data-category", "Dekstop");

  link.innerHTML = `
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src="${imgSrc}" alt="${title}" loading="lazy">
      </figure>
      <h3 class="project-title">${title}</h3>
      <p class="project-category">${category}</p>
    `;

  listItem.appendChild(link);

  return listItem;
}

function renderProjects() {
  const projectList = document.querySelector(".project-list");
  projectsData.forEach((project) => {
    const projectCard = generateProjectCard(project);
    projectList.appendChild(projectCard);
  });
}

renderProjects();

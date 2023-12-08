const projectsData = [
    {
        title: "Justice-League",
        imgSrc: "images/ukbi.png",
        category: "Web",
        url: "panntod.github.io"
    },

];
function generateProjectCard(project) {
    const { title, imgSrc, category } = project;
  
    const listItem = document.createElement("li");
    listItem.classList.add("project-item", "active");
    listItem.setAttribute("data-filter-item", "");
    listItem.setAttribute("data-category", "Dekstop");
  
    const link = document.createElement("a");
    link.href = `https://${project.url}`;
    link.target = "_blank";
    link.classList.add("project-item", "active");
    link.setAttribute("data-filter-item", "");
    link.setAttribute("data-category", "Dekstop");
  
    link.innerHTML = `
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src="${imgSrc}" alt="finance" loading="lazy">
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

const projectsData = [
    {
        title: "Justice-League",
        imgSrc: "images/ukbi.png",
        category: "Web"
    },

];

function generateProjectCard(project) {
    const listItem = document.createElement("li");
    listItem.classList.add("project-item", "active");
    listItem.setAttribute("data-filter-item", "");
    listItem.setAttribute("data-category", "Dekstop");

    const link = document.createElement("a");
    link.href = `https://${project.title.toLowerCase().replace(/ /g, '-')}.vercel.app/`;
    link.target = "_blank";

    const figure = document.createElement("figure");
    figure.classList.add("project-img");

    const iconBox = document.createElement("div");
    iconBox.classList.add("project-item-icon-box");

    const icon = document.createElement("ion-icon");
    icon.setAttribute("name", "eye-outline");
    iconBox.appendChild(icon);

    const image = document.createElement("img");
    image.src = project.imgSrc;
    image.alt = "finance";
    image.setAttribute("loading", "lazy");

    figure.appendChild(iconBox);
    figure.appendChild(image);

    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.textContent = project.title;

    const category = document.createElement("p");
    category.classList.add("project-category");
    category.textContent = project.category;

    link.appendChild(figure);
    link.appendChild(title);
    link.appendChild(category);

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

const skills = ['html', 'css3', 'javascript', 'php', 'java', 'node-js', 'go', 'mysql', 'mongodb', 'react', 'typescript','express','nest','next','prisma'];
const clientsList = document.querySelector('.skill-list');

skills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.classList.add('skill-item');

  const itemHTML = `
    <img src="images/${skill}.svg" alt="${skill} logo">
  `;

  listItem.innerHTML = itemHTML;
  clientsList.appendChild(listItem);
});

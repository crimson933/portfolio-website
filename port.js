
document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.getElementById("portfolio");

    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            
        },
        {
            title: "Project 3",
            description: "Description of project 3.",
          
        },
    ];

    projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        portfolioContainer.appendChild(projectElement);
    });
});
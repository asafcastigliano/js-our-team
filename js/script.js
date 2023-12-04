team = [
    {
        name: "Wayne Barnett",
        role: "Fouder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Agela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manger",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

for(let i = 0; i < team.length; i++) console.log(team[i]);

let div = document.getElementById("dom");
div.innerHTML = "";

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const teamElement = document.createElement("div");

    const nameElement = document.createElement("p");
    nameElement.textContent = "Name: " + teamMember.name;

    const roleElement = document.createElement("p");
    roleElement.textContent = "Role: " + teamMember.role;

    const imageElement = document.createElement("img");
    imageElement.src = "../img/" + teamMember.image;
    imageElement.alt = teamMember.name;

    teamElement.appendChild(nameElement);
    teamElement.appendChild(roleElement);
    teamElement.appendChild(imageElement);

    div.appendChild(teamElement);
}
let arr = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emma Watson",
    profession: "Frontend Developer",
    description:
      "Passionate about building clean, responsive user interfaces with modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Carter",
    profession: "UI/UX Designer",
    description:
      "Loves crafting intuitive designs that make digital products easy and enjoyable to use.",
    tags: ["Figma", "Design", "Prototyping"],
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sophia Lee",
    profession: "Backend Developer",
    description:
      "Builds scalable APIs and server-side systems that power modern web applications.",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Michael Brown",
    profession: "Data Scientist",
    description:
      "Turns raw data into actionable insights using statistics and machine learning.",
    tags: ["Python", "Pandas", "ML"],
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Olivia Davis",
    profession: "Product Manager",
    description:
      "Bridges the gap between design, development, and business to ship great products.",
    tags: ["Strategy", "Agile", "Roadmap"],
  },
];

let cards = document.querySelector("#cards");
let clutter = "";
arr.forEach((elem,idx) => {
  clutter += `<div class="card">
    <img class="dp" src="${elem.image}" alt="profile" />
    <h2 class="name">${elem.name}</h2>
    <p class="profession">${elem.profession}</p>
    <p class="description">${elem.description}</p>
    <div class="tags">
    ${elem.tags.map(val => `<span class="tag">${val}</span>`).join("")}
    </div>
  </div>`;
});

cards.innerHTML = clutter;

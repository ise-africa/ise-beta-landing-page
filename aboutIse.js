const whyYouShould = [
  {
    image: "./assets/whyYouShould1.svg",
    title: "Cutting-edge Curriculum",
    description:
      "Our comprehensive curriculum is meticulously crafted to meet the specific needs of African learners. We have collaborated with local educators, industry experts, and thought leaders to develop engaging and culturally relevant content. From programming and coding to cybersecurity, our curriculum equips learners with the skills needed to excel in a rapidly evolving tech landscape.",
  },
  {
    image: "./assets/whyYouShould2.svg",

    title: "Accessible Education for All",
    description:
      "Ise EdTech is dedicated to ensuring that quality tech education is accessible to every African, regardless of their location or background. Our platform is designed to work seamlessly on various devices, making it possible for learners to connect and learn from anywhere, be it a bustling city or a remote village. We are committed to breaking down barriers and creating equal opportunities for all Africans to build their technology skills.",
  },
  {
    image: "./assets/whyYouShould3.svg",

    title: "Supportive Learning Community",
    description:
      "At Ise EdTech, we recognize the power of community and collaboration. Our platform facilitates connections among learners, mentors, and industry professionals, fostering a supportive learning ecosystem. Learners can engage in discussions, seek guidance, and network with like-minded individuals. Through our partnerships with schools, universities, and community organizations, we establish physical hubs where learners can come together, learn from each other, and fuel their passion for technology",
  },
  {
    image: "./assets/whyYouShould4.svg",

    title: "Practical Application and Real-world Projects",
    description:
      "Learning by doing is at the core of our philosophy. We emphasize hands-on experiences, providing learners with opportunities to apply knowledge through real-world projects. Whether it’s developing a website, managing a product, or creating a software solution, our learners gain practical skills that prepare them for the challenges and demands of the tech industry.",
  },
];

const programmes = [
  {
    image: "./assets/school1.svg",
    title: "School of Engineering",
    options: ["Frontend Development", "Backend Development"],
  },
  {
    image: "./assets/school2.svg",
    title: "School of Cloud",
    options: [
      "AWS Security",
      "Devops Cloud Engineering",
      "DevSecOps Cloud Engineering",
    ],
  },
  {
    image: "./assets/school3.svg",
    title: "School of Business",
    options: [
      "Customer Success Management",
      "Project Management",
      "Talent Acquisition",
    ],
  },
  {
    image: "./assets/school4.svg",
    title: "School of Info. Technology",
    options: [
      "Machine Learning",
      "Artificial Intelligence",
      "Microsoft 365 Technical Support",
    ],
  },
  {
    image: "./assets/school5.svg",
    title: "School of Data",
    options: ["Data Analysis", "Data Science"],
  },
];

const mappedItems = whyYouShould.map((data, i) => {
  return `<div>
  <div>${i + 1}</div>
  <div>
  <img src=${data.image} />
  <h4>${data.title}</h4>
  <p>${data.description}</p>
  </div>
  </div>`;
});

const proprammesContainer = programmes.map((data) => {
  return `<div>
    <img src=${data.image} />
    <p>${data.title}</p>
    <ul>
    ${data.options
      .map((datum) => {
        return `<li>${datum}</li>`;
      })
      .join("")}
    </ul>
    </div>`;
});

document.querySelector(".whyYouShouldOptions").innerHTML = mappedItems;
document.querySelector(".programmesInIseOptions").innerHTML =
  proprammesContainer;

const sideNav = document.querySelector(".sideNav");

const openSideNav = () => {
  sideNav.style.width = "100%";
};

const closeSideNav = () => {
  sideNav.style.width = "0%";
};

const date = new Date();

function countdownToLaunch(targetDate) {
  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    return "Launch date has passed!";
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days: days, hours: hours, minutes, minutes, seconds: seconds };
}

const launchDate = new Date("2024-03-01T00:00:00").getTime();
const countdown = countdownToLaunch(launchDate);

const daysDiv = document.querySelector(".countdown > div:nth-child(1) > h2");
const hourssDiv = document.querySelector(".countdown > div:nth-child(3) > h2");
const minutesDiv = document.querySelector(".countdown > div:nth-child(5) > h2");
const secondssDiv = document.querySelector(
  ".countdown > div:nth-child(7) > h2"
);

const startTimer = () => {
  setInterval(() => {
    daysDiv.innerHTML = countdownToLaunch(launchDate).days;
    hourssDiv.innerHTML = countdownToLaunch(launchDate).hours;
    minutesDiv.innerHTML = countdownToLaunch(launchDate).minutes;
    secondssDiv.innerHTML = countdownToLaunch(launchDate).seconds;
  }, 1000);
};

startTimer();

const scrollIntoTheView = (classname) => {
  const section = document.querySelector(classname);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const openWhatsappGroup = () => {
  window.open("https://chat.whatsapp.com/H14J1utsxOW71Yh7bomJB2");
};

const openLink = (link) => {
  window.open(link);
};

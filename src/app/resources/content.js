const person = {
  firstName: "Debby Azzahra",
  lastName: "Firdauzi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI/ UX Design & Frontend Engineer",
  avatar: "/images/og/avatar.png", // Path to your avatar image
  email: "debbyazzahra05@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&rsquo;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/debb4",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/debby-azzahra-2a254124a/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/avatar.png", // Ganti path gambar di sini
  label: "Home",
  title: `${person.name}&rsquo;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Hi, This Is
      <br /> Debby Azzahra
    </>
  ),
  featured: {
    // Add this if you want to use featured projects
    display: true,
    title: "Featured Project",
    href: "/work/projects/project_semester6",
  },
  subline: (
    <>
      Im a UI/UX Designer & Frontend engineer, Making the digital world feel
      more like you - through thoughtful design and precise code.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a 7th-semester student in the Informatics Engineering program at
        Politeknik Negeri Jember. As a passionate Information Technology student
        with a focus on UI/UX Design and Frontend Development, I possess
        expertise in designing aesthetic and responsive interfaces using HTML,
        CSS, and JavaScript, as well as design tools like Figma. With a strong
        enthusiasm for learning, a curiosity about modern design trends, and the
        ability to collaborate effectively in a team, I am eager to contribute
        to a dynamic internship environment while further developing my
        practical skills and knowledge.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Core Initiative",
        timeframe: "Maret 2025 - April 2025",
        role: "Front End Developer Intern",
        achievements: [
          <>
            Build dynamic and responsive applications using Vue.js framework,
            including state management with Vuex and routing with Vue Router.
          </>,
          <>
            Use Docker for containerization and understand CI/CD workflows to
            automate application build, testing, and deployment.
          </>,
          <>
            Write and run unit tests using Jest to ensure code quality and
            implement test-driven development (TDD) practices.
          </>,
          <>
            Enhance collaboration, communication, and problem-solving skills in
            cross-functional teams, as well as time management to complete
            projects effectively.
          </>,
          <>
            Explore integrating financial technology, artificial intelligence,
            and blockchain in front-end product development.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/SERTIF_RAKAMIN_FRONTEND.jpg",
            alt: "Once UI Project",
            width: 22,
            height: 15,
          },
        ],
      },
      {
        company: "NURI",
        timeframe: "Juni 2024 - Juli 2024",
        role: "UI/UX Designer Intern",
        achievements: [
          <>
            Conducted user research to understand user needs, behaviors, and
            pain points, identifying relevant patterns and insights
          </>,
          <>
            Designed wireframes to visualize the structure and layout of the
            application, adhering to intuitive and user-friendly design
            principles
          </>,
          <>Created interactive prototypes using tools such as Figma.</>,
          <>
            Tested the functionality of the prototype to ensure a smooth user
            flow.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/SERTIF_RAKAMIN_NURI.jpg",
            alt: "Once UI Project",
            width: 22,
            height: 15,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Politeknik Negeri Jember",
        description: <>Bachelor of Informatics Engineering</>,
      },
      {
        name: "SMA Negeri 1 Jember",
        description: <>MIPA</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    // Show icon and name, or just name in a styled span if no icon
    skills: [
      {
        name: "Figma",
        icon: "figma",
      },
      {
        name: "HTML",
        icon: "html",
      },
      {
        name: "CSS",
        icon: "css",
      },
      {
        name: "JavaScript",
        icon: "javascript",
      },
      {
        name: "Vue.js",
        icon: "vuejs",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
      },
      {
        name: "Bootstrap",
        icon: "bootstrap",
      },
      {
        name: "PHP",
        icon: "php",
      },
      {
        name: "mySQL",
        icon: "mysql",
      },
      {
        name: "Maze",
        icon: "maze",
      },
    ],
  },
};

const blog = {
  // path: "/blog",
  // label: "Blog",
  // title: "Writing about design and tech...",
  // description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/9.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/12.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

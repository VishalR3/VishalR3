import { Container, makeStyles, Typography } from "@material-ui/core";
// import Project from "./Project";
import Project2 from "./Project2";

const Projects = () => {
  const classes = useStyles();
  const projects = [
    {
      project_name: "PRCMS",
      description: [
        `PRCMS is a machine-learning-based web application that keeps track of people that enters or leave the company premises. It uses face recognition to tell if the person at the front gate(via camera) is an employee or not. This Application could mark attendance for the employees and kept a record of their entries and exits. Administrators could print the report of any person's in and outs for a specific duration.`,
        `This app also had a feature of calculating salary for each employee based on their individual pays and attendance in the office building and the time of their entries and exits.`,
        `Unknown visitors to the company were to be flagged by the Application and a dedicated section for recording their purpose to visit and person to meet (if any) was there on the website.`,
        `This App also had pose estimation and face expression detection in order to detect the intent of the person. If the person is flagged to have malicious intent, A danger alarm was to be shown on the screen, to better prepare the security guard for stopping or calming them down`,
      ],
      imagePath: "prcms.png",
      tags: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "React.js",
        "Babel",
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JS",
        "jQuery",
        "Sass",
      ],
    },
    {
      project_name: "DocConnect",
      description: [
        `Docconnect is a platform that connects medical professionals with hospitals. It tackles a recurring problem of medical staff shortage in the time of extreme needs. It happens often that surgery is needed to be done, but the hospital doesn't have that much staff available. On the other hand, there are many medical professionals who aren't that busy at that time and some don't even have a stable job. So we created a platform to connect hospitals in need with the medical professionals who are looking for work.`,
        `This platform had two main types of user that it needed to take care of,  Hospitals and the Doctors. We decided on creating a web app for the hospitals and a mobile application for the medical staff.`,
        `Whenever a hospital is in need of medical staff, be it a chief surgeon, asst. surgeon, or anesthetist, they could just post an engagement on the web app and the doctors nearby can see it on their mobile app and accept the role that is needed. Hospitals could even request some specific doctors for an engagement, or just leave it like that, whoever is available and wanting to work at that time can accept the engagement.`,
        `This project is created to help hospitals, doctors and people to tackle this recurring problem and while doing so improving the situation of healthcare in India.`,
      ],
      imagePath: "docConnect.png",
      tags: [
        "React.js",
        "TypeScript",
        "Stripe",
        "Sass",
        "Redux",
        "Jest",
        "Enzyme",
      ],
    },
    {
      project_name: "SurgeryMaps",
      description: [
        `It was one of the projects that I worked on during my internships. SurgeryMaps is a web application that helps people find a suitable hospital according to their preferences for their surgeries. It was just like Airbnb, but for surgeries.`,
        `Users had a lot of options to fine-tune the search like AC Room preferences, single/double rooms, whether or not the hospital has facilities for disabled people, etc. Once a hospital is selected, users could even choose the procedure type, and surgeons to perform surgery.`,
        `After everything is chosen and done, they could request hospitals for an estimated amount and ultimately go ahead with the surgery that they want in the hospital that they liked with the facilities that they absolutely want with no hassles and in no time.`,
      ],
      imagePath: "sm_main.png",
      tags: [
        "React.js",
        "Babel",
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JS",
        "jQuery",
        "Sass",
      ],
    },
    {
      project_name: "GoGrocy",
      description: [
        "GoGrocy was a startup started by a friend of mine and me. The idea was to create a grocery delivery system at home amidst pandemics for the people that live in tier 3 cities, where there are no real facilities there. I designed and developed the whole Web Application by myself. I used CodeIgniter(PHP Framework) for the backend of the app, and HTML, SASS, JS, jQuery for the front end.",
        "This whole operation including from designing, developing, and hosting was done in time of one week. Then, we hired a team for Mobile App Development and I provided them all the APIs that they needed for the App.",
      ],
      imagePath: "surgerymaps.png",
      tags: ["PHP", "CodeIgniter", "MySQL", "JS", "jQuery", "Sass"],
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.center}>
        <Typography variant="h4">Featured Projects</Typography>
      </div>
      <Container className={classes.projects}>
        {projects.map((project, index) => (
          <Project2 key={index} project={project} />
        ))}
      </Container>
    </div>
  );
};

export default Projects;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    paddingBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
  },
  center: {
    textAlign: "center",
  },
  projects: {
    marginTop: "3rem",
  },
}));

import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'James Kamau',
  title: "Hi all, I'm James",
  description:
    "Hello, I'm James, a full-stack developer with a passion for creating robust and user-friendly web applications. With 12 months of experience with popular technologies in the tech stack, I have developed a strong foundation in both server-side and client-side technologies.",
  resumeLink:
    'https://docs.google.com/document/d/17Fzk8f_JCXmpuhNUAxmhJtKFulnXv9IS9wZ2geWgoVk/edit?pli=1',
};

export const openSource = {
  githubUserName: 'BLACKHAWK9606',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/james-kamau-b5a20a1a0',
  github: 'https://github.com/BLACKHAWK9606',
  instagram: 'https://www.instagram.com/marubozu.__',
  twitter: 'https://twitter.com/_marubozu',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'SELF-DRIVEN FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & Express Framework'),
        emoji('⚡ Designing eye-appealing graphical content'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Javascript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend Design',
    progressPercentage: '70', 
  },
  {
    Stack: 'Backend Design and Development ',
    progressPercentage: '70',
  },
  {
    Stack: 'Problem Solving Skills',
    progressPercentage: '80',
  },
  {
    Stack: 'Graphic Designing',
    progressPercentage: '75',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Multimedia University',
    subHeader: 'Bachelor of Science in Computer Technology',
    duration: 'September 2018 - December 2022',
    desc: 'Participated in the research of Embedded Sytems.',
    grade: '',
    descBullets: [
      'Gained hand-on skills especially with designing good databases, as the saying goes, an app is as good as the database design',
      'Sharpened on my problem solving abilities through tackling a couple of tasks.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Attache',
    company: 'Gearbox Europlacer, Nairobi',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Sep 2022 – Dec 2022',
    desc: 'Was part of a team of six that worked to design and print our own custom micro-controller. By learning through working on a project, I gained hands-on experience in design, fabrication and printing of PCBs using the vast resources employed by the company',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: '',
    link: '',
  },
  {
    name: 'Heissal Tours',
    desc: 'Introducing Heissal Ogopa Tours - your gateway to unforgettable travel experiences.',
    github: 'https://github.com/BLACKHAWK9606/Heissal-Ogopa-Tours-Website',
    link: 'https://blackhawk9606.github.io/Heissal-Ogopa-Tours-Website/',
  },
  {
    name: 'Feastify',
    desc: 'Introducing Feastify, a system I made that connects multiple restaurants that provide food ordering services to possible clients',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Andridge Munene',
    feedback:
      'Working with James Kamau on designing a custom microcontroller from scratch was an absolute pleasure, his expertise and dedication were instrumental in the success of the project.',
  },
  {
    name: 'Ephantus Ngugi',
    feedback:
      'I had the privilege of supervising James Kamau on the embedded systems project, and I must say his exceptional skills and meticulous approach in designing a custom microcontroller from scratch resulted in a highly successful and innovative solution. His dedication and expertise are truly commendable.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'James Kamau',
  description:
    'A passionate self-driven Full Stack Web Developer',
  author: 'James Kamau',
  url: '',
  keywords: [
    'James',
    'James Kamau',
    '@blackhawk9606',
    'marubozu',
  ],
};

import React from 'react';
import type { Project, SocialLink, TimelineItem, Certificate, Language, Testimonial, Achievement } from './types';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

export const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z"/><path d="M12 12l8-4.5"/><path d="M4 6.5l8 4.5"/><path d="M12 2.25L4 6.5l8 4.5 8-4.5L12 2.25z"/></svg>
);

export const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);

export const CandleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 2.5a2.29 2.29 0 0 1 2.3-2.22 2.42 2.42 0 0 1 2.5 2.37V5h-4.8Z"/><path d="M8 5h8v8H8Z"/><path d="M12 13v9"/><path d="M8 22h8"/></svg>
);


export const CV_DOWNLOAD_LINK = 'https://drive.google.com/uc?export=download&id=1ym4rp2kuYMDwoeUAEZP-aT6WBDkCIZr8';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/InsomniacScribbler', icon: <GithubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilzzz/', icon: <LinkedinIcon /> },
];

export const CONTACT_INFO = [
    { name: 'Email', value: 'singhnikhilsingh21@gmail.com', icon: <MailIcon />, href: 'mailto:singhnikhilsingh21@gmail.com' },
    { name: 'Phone', value: '+91-9508671271', icon: <PhoneIcon />, href: 'tel:+91-9508671271' },
    { name: 'Location', value: 'Pune, Maharashtra, India', icon: <LocationIcon />, href: '#' },
];


export const TECH_STACK: string[] = [
  'Java', 'Spring Boot', 'Hibernate', 'Spring Security', 'React.js', 'MongoDB', 'MySQL', 'Docker', 'Kafka', 'AWS'
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'TaskWeaver',
    stack: 'Next.js + MongoDB',
    role: 'Backend Developer',
    features: 'Drag-and-drop UI, multilingual collaboration, and a powerful team productivity booster.',
    githubUrl: 'https://github.com/InsomniacScribbler'
  },
  {
    title: 'Movie Recommendation System',
    stack: 'React + Spring Boot',
    role: 'Full Stack Developer',
    features: 'Intelligent user-based recommendations with an efficient streaming-ready backend.',
    githubUrl: 'https://github.com/InsomniacScribbler',
    liveUrl: '#'
  },
  {
    title: 'Ecom Clone',
    stack: 'React + Spring Boot + MySQL',
    role: 'Full Stack Developer',
    features: 'Secure authentication, product/order management, payments, and a premium user experience.',
    githubUrl: 'https://github.com/InsomniacScribbler'
  }
];

export const EXPERIENCE_DATA: TimelineItem[] = [
    {
        date: 'Jan 2025 – Feb 2025',
        title: 'Java Developer Intern',
        location: 'Zidio Developments',
        description: 'Collaborated with developers to build backend services using Spring Boot and Java. Developed REST APIs, participated in code reviews and improved backend system architecture.'
    },
    {
        date: 'Oct 2024 – Dec 2024',
        title: 'Android Development Intern',
        location: 'Eduskills',
        description: 'Created Android applications using Kotlin and Jetpack Compose. Worked with declarative UI design, material themes, and state management. Applied MVVM architecture to build responsive and scalable applications.'
    }
];

export const EDUCATION_DATA: TimelineItem[] = [
    {
        date: 'Aug’22 – Present',
        title: 'B.E. Computer Science and Engineering',
        location: 'D.Y. Patil College of Engineering, Akurdi, Pune',
        description: 'Current CGPA: 8.67 / 10'
    },
    {
        date: 'Apr’20 – Mar’21',
        title: 'Senior Secondary (Class XII)',
        location: 'St. Karen’s High School, CBSE Board, Patna',
        description: 'Grade: 93.6%'
    },
    {
        date: 'Apr’18 – Mar’19',
        title: 'Secondary (Class X)',
        location: 'St. Xavier’s High School, ICSE Board, Cuttack',
        description: 'Grade: 91.3%'
    }
];

export const HERO_SUBTITLES = [
    "Java Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Spring Boot Specialist"
];

export const CERTIFICATIONS_DATA: Certificate[] = [
    { name: 'Java Full Stack Development', issuer: 'Ashwani Kumar Upadhyay', icon: <CertificateIcon/> },
    { name: 'Google Cybersecurity', issuer: 'Google (via Coursera)', icon: <CertificateIcon/> },
    { name: 'Java Development Bootcamp', issuer: 'LetsUpgrade', icon: <CertificateIcon/> },
];

export const LANGUAGES_DATA: Language[] = [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Odia', level: 'Advanced' },
    { name: 'Marathi', level: 'Intermediate' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: 'Awaiting testimonials from fellow adventurers and guild masters...',
        author: 'The Chronicler',
        title: 'Keeper of Records'
    }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
    {
        title: 'COEP – Tech-De-Bait Winner',
        issuer: 'Pune',
        description: 'Winner of Tech-De-Bait at COEP, showcasing exceptional critical thinking, technical argumentation, and persuasive communication.',
        icon: <TrophyIcon />
    },
    {
        title: 'Bronze Medal (Debate) @ YIN Mahaotsav',
        issuer: 'Pune',
        description: 'Recognised for impactful delivery, clarity of thought, and compelling public speaking in a competitive debate.',
        icon: <TrophyIcon />
    },
    {
        title: 'Silver Medal in SEAMO - 2018',
        issuer: 'South East Asian Mathematics Olympiad',
        description: 'Demonstrated strong analytical skills and problem-solving excellence at an international level.',
        icon: <TrophyIcon />
    }
];
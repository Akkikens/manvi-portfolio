const expertise = [
  {
    id: 0,
    title: 'Full Stack Development',
    desc: 'I have experience in building web applications using Python, Java, and other technologies. I am proficient in front-end and back-end development, including HTML, CSS, JavaScript, and SQL. My understanding of data structures and algorithms allows me to build efficient and scalable solutions.',
  },
  {
    id: 1,
    title: 'Data Science & Machine Learning',
    desc: 'I have hands-on experience with machine learning and data science. I have worked on projects involving deep neural networks and classification tasks using Python, MATLAB, and data visualization tools. My expertise lies in implementing machine learning algorithms for practical problem-solving.',
  },
  {
    id: 2,
    title: 'Cloud & DevOps',
    desc: 'I am proficient in working with cloud technologies and DevOps tools such as Kubernetes, Gradle, and Linux. I have hands-on experience managing cloud infrastructure and automating deployment pipelines to ensure efficient and reliable software delivery.',
  },
  {
    id: 3,
    title: 'Networking',
    desc: 'I possess knowledge of networking protocols and configurations using Cisco Packet Tracer. I have experience in setting up network systems and managing network security measures, as demonstrated in my work with Nokia’s Network Services Platform.',
  },
  {
    id: 4,
    title: 'Leadership & Teamwork',
    desc: 'I have demonstrated strong leadership and teamwork skills through my project leader role during my internship at Technocolabs Software, where I successfully led a cross-functional team on a data science project and communicated technical results to stakeholders.',
  },
  {
    id: 5,
    title: 'Open Source Contributor',
    desc: 'I contribute to open-source projects during my free time, leveraging my knowledge to collaborate with other developers, learn best practices, and give back to the developer community.',
  },
  {
    id: 6,
    title: 'Certifications',
    desc: 'I hold certifications in Data Science and Machine Learning, Swift Mobile App Development, and Cisco Certified Network Associate (CCNA) Routing and Switching.',
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}

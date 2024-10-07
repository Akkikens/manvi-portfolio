const recommendationCard = [
  {
    id: 0,
    name: 'XYZ Person 1',
    image: 'images/xyz1.jfif',
    designation: 'Full Stack Developer | MERN Stack | Cloud Computing',
    view: 'I highly recommend Manvi Panjwani for any software development opportunities. Her understanding of full stack development, coupled with her enthusiasm for learning new technologies, makes her a strong asset for any team. Manvi has consistently delivered high-quality work and is a reliable team player. 🌟',
    linkednURL: 'https://www.linkedin.com/in/xyz1/',
  },
  {
    id: 1,
    name: 'XYZ Person 2',
    image: 'images/xyz2.jpeg',
    designation:
      'Data Scientist | Machine Learning Enthusiast | Python Developer',
    view: 'Manvi and I collaborated on a data science project, and her dedication and skills were exceptional. She demonstrated her ability to work with machine learning algorithms and effectively communicate complex technical concepts to the team. I highly recommend her for any data science role.',
    linkednURL: 'https://www.linkedin.com/in/xyz2/',
  },
  {
    id: 2,
    name: 'XYZ Person 3',
    image: 'images/xyz3.jpg',
    designation: 'Software Engineer | DevOps Specialist',
    view: 'I had the pleasure of working with Manvi on a cloud computing project, and her expertise in cloud technologies and DevOps tools like Kubernetes and Docker was outstanding. She consistently delivered top-notch work and was always eager to take on new challenges.',
    linkednURL: 'https://www.linkedin.com/in/xyz3/',
  },
  {
    id: 3,
    name: 'XYZ Person 4',
    image: 'images/xyz4.jpeg',
    designation: 'Network Engineer | Cisco Certified Professional',
    view: 'Manvi played a key role in improving the security measures during her time working on the Nokia Network Services Platform. Her knowledge of networking protocols and ability to manage network security was impressive. I highly recommend her for any network-related roles.',
    linkednURL: 'https://www.linkedin.com/in/xyz4/',
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}

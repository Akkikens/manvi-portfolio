const review = [
  {
    id: 0,
    clientName: 'Nokia Network Services Team',
    clientLocation: 'Bengaluru, India',
    clientSource: 'Professional Work',
    clientReview:
      'Manvi has been an incredible asset during her time as an Associate Software Engineer at Nokia. Her ability to quickly learn and contribute to complex projects like the Nokia Network Services Platform was impressive. She demonstrated professionalism, attention to detail, and a deep understanding of network security measures. We look forward to working with her on future projects.',
  },
  {
    id: 1,
    clientName: 'Technocolabs Software Team',
    clientLocation: 'Indore, India',
    clientSource: 'Internship',
    clientReview:
      'Manvi led our data science project with exceptional skill. She showcased her ability to lead a cross-functional team and ensured that all key project milestones were met on time. Her proficiency in machine learning techniques and project management was highly appreciated by both the team and stakeholders.',
  },
  {
    id: 2,
    clientName: 'Clark University Professor',
    clientLocation: 'Worcester, MA, United States',
    clientSource: 'Academic',
    clientReview:
      'Manvi has consistently excelled in her coursework at Clark University. Her critical thinking and problem-solving abilities set her apart in group projects, and she has demonstrated strong leadership and teamwork skills. Her dedication to mastering new concepts in computer science is commendable, and I highly recommend her for any software development or research roles.',
  },
  {
    id: 3,
    clientName: 'Hackathon Participant Team',
    clientLocation: 'Virtual',
    clientSource: 'Hackathon Collaboration',
    clientReview:
      'It was a pleasure to work with Manvi during the hackathon. She brought her UI/UX design skills and development expertise to the team, helping us build a well-rounded project. Her attention to detail and creativity helped the team stand out. I look forward to future collaborations with her.',
  },
];

export default function handler(req, res) {
  res.status(200).json(review);
}

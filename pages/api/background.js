const background = [
  {
    eduCards: [
      {
        id: 0,
        title: 'Clark University',
        degree: 'Master of Science in Computer Science',
        detail:
          "Pursuing a Master's Degree in Computer Science at Clark University.",
        year: 'Expected Graduation: December 2025',
        location: 'Worcester, MA, USA',
      },
      {
        id: 1,
        title: 'Amity University',
        degree: 'Bachelor of Technology in Computer Science',
        detail:
          "Completed a Bachelor's Degree in Computer Science with a GPA of 8.02.",
        year: 'May 2022',
        location: 'Noida, UP, India',
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: 'Nokia',
        role: 'Intern / Associate Software Engineer',
        url: 'no website',
        desc: 'Contributed to Nokia Network Services Platform (NSP) for managing diverse network domains and enhancing security operations.',
        year: 'March 2022 - January 2024',
        location: 'Bengaluru, India',
      },
      {
        id: 2,
        title: 'Technocolabs Software',
        role: 'Data Science Intern / Project Leader',
        url: 'no website',
        desc: 'Led a cross-functional team on a data science project using machine learning techniques.',
        year: 'March 2021 - April 2021',
        location: 'Indore, India',
      },
    ],
  },
  {
    projects: [
      {
        id: 1,
        title: 'Hyperspectral Image Classification',
        desc: 'Developed a Deep Neural Network for land-cover classification.',
        year: '2022',
      },
      {
        id: 2,
        title: 'Predict Blood Donation',
        desc: 'Created a model predicting blood donation using Logistic Regression, SVM, and Random Forest.',
        year: '2021',
      },
      {
        id: 3,
        title: 'Handwritten Digit Recognizer',
        desc: 'Built a model for classifying handwritten digits using machine learning.',
        year: '2021',
      },
      {
        id: 4,
        title: 'Trading of Cryptocurrency based on Twitter Sentiment Analysis',
        desc: 'Conducted sentiment analysis on Twitter data to inform cryptocurrency trading strategies.',
        year: '2021',
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}

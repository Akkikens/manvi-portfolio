const portfolio = [
  {
    id: 0,
    projectName: 'Hyperspectral Image Classification',
    url: '', // No external URL provided in resume
    image: 'projects/hyperspectral.png',
    projectDetail:
      'Developed a Deep Neural Network for land-cover classification using hyperspectral images. This project involved pre-processing large-scale image data and applying deep learning techniques to classify different types of land cover.',
    technologiesUsed: [
      {
        tech: 'Python',
      },
      {
        tech: 'Deep Learning',
      },
      {
        tech: 'Neural Networks',
      },
      {
        tech: 'TensorFlow',
      },
    ],
  },
  {
    id: 1,
    projectName: 'Predict Blood Donation',
    url: '', // No external URL provided in resume
    image: 'projects/blood_donation.png',
    projectDetail:
      'Created a machine learning model to predict blood donation patterns using techniques such as Logistic Regression, Support Vector Machines (SVM), and Random Forest. The model was trained and evaluated using real-world data.',
    technologiesUsed: [
      {
        tech: 'Python',
      },
      {
        tech: 'Logistic Regression',
      },
      {
        tech: 'SVM',
      },
      {
        tech: 'Random Forest',
      },
      {
        tech: 'Pandas & NumPy',
      },
    ],
  },
  {
    id: 2,
    projectName: 'Handwritten Digit Recognizer',
    url: '', // No external URL provided in resume
    image: 'projects/handwritten_digits.png',
    projectDetail:
      'Built a machine learning model to classify handwritten digits using popular machine learning algorithms. This project involved feature extraction and the implementation of classification models to achieve high accuracy.',
    technologiesUsed: [
      {
        tech: 'Python',
      },
      {
        tech: 'Scikit-learn',
      },
      {
        tech: 'Machine Learning',
      },
      {
        tech: 'Neural Networks',
      },
    ],
  },
  {
    id: 3,
    projectName: 'Cryptocurrency Trading Based on Twitter Sentiment Analysis',
    url: '', // No external URL provided in resume
    image: 'projects/crypto_sentiment.png',
    projectDetail:
      'Analyzed sentiment from Twitter data and developed a model that used sentiment analysis to inform cryptocurrency trading strategies. The project focused on using natural language processing (NLP) to derive insights from social media data.',
    technologiesUsed: [
      {
        tech: 'Python',
      },
      {
        tech: 'NLP',
      },
      {
        tech: 'Twitter API',
      },
      {
        tech: 'Pandas & NumPy',
      },
    ],
  },
  {
    id: 4,
    projectName: 'Nokia Network Services Platform (NSP)',
    url: '', // No external URL provided in resume
    image: 'projects/nokia_nsp.png',
    projectDetail:
      'Worked as an Associate Software Engineer to contribute to the Nokia Network Services Platform (NSP), a network management solution for diverse network domains. Performed tasks such as managing cellular domains, node discovery, and implementing network security measures.',
    technologiesUsed: [
      {
        tech: 'Java',
      },
      {
        tech: 'NSP NFM-P',
      },
      {
        tech: 'Network Security',
      },
    ],
  },
  {
    id: 5,
    projectName: 'Data Science Internship - Technocolabs Software',
    url: '', // No external URL provided in resume
    image: 'projects/technocolabs.png',
    projectDetail:
      'Led a cross-functional team in a data science project focused on machine learning techniques. Managed project timelines, coordinated tasks among team members, and presented progress reports to stakeholders.',
    technologiesUsed: [
      {
        tech: 'Python',
      },
      {
        tech: 'Machine Learning',
      },
      {
        tech: 'Project Management',
      },
    ],
  },
  {
    id: 6,
    projectName: 'Nokia Security Enhancement',
    url: '', // No external URL provided in resume
    image: 'projects/nokia_security.png',
    projectDetail:
      'Implemented security measures within Nokia NSP to detect and flag unexpected changes as potential security violations. Enhanced the integrity of network operations by developing key security mechanisms for managing SIMs, IMEs, and chassis identifiers.',
    technologiesUsed: [
      {
        tech: 'Java',
      },
      {
        tech: 'NSP NFM-P',
      },
      {
        tech: 'Network Security',
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}

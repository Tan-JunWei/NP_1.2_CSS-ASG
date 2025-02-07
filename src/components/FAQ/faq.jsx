import React, { useState } from 'react';
import styles from '@/src/styles/faq.module.css';

const faqData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers real coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for building a portfolio."
  },
  {
    question: "How do I start coding with Frontend Mentor?",
    answer:
      "You simply sign up on the platform, select a challenge based on your skill level, and start coding. You’ll receive feedback from other users and mentors to help you grow."
  },
  {
    question: "What happens after completing a challenge?",
    answer:
      "Once you complete a challenge, you can submit it for review. You'll get constructive feedback and can also showcase your work in your portfolio."
  },
  {
    question: "Can I use React for these challenges?",
    answer:
      "Yes! You are encouraged to use any tools or frameworks you like, including React, to complete the challenges and enhance your learning experience."
  }
];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FAQs</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      {faqData.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={toggleAnswer}>
        <h4 className={styles.questionText}>{faq.question}</h4>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>{isOpen ? '-' : '+'}</span>
      </div>
      <p className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>{faq.answer}</p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import styles from '@/src/styles/faq.module.css';

const faqData = [
  {
    question: "What is Plateful?",
    answer:
      "Plateful is a platform dedicated to exploring and celebrating various cuisines and recipes. We aim to provide a diverse culinary experience for food enthusiasts or just the average person looking for a new  to eat."
  },

  {
    question: "Can I use your recipes on my website or social media?",
    answer:
      "You’re welcome to share links to my recipes, but please do not copy and paste the full recipe onto another website or social media. If you'd like to share, please give proper credit and link back to the original post."
  },
  {
    question: "Do you provide nutritional information for your recipes?",
    answer:
      "Some recipes may include nutritional information, but these values are estimates. I always recommend using a nutrition calculator with the exact ingredients you use to get the most accurate data."
  },
  {
    question: "Can I request a specific recipe?",
    answer:
      "Yes! We love hearing what my readers want to see. Feel free to contact us at info.plateful@hotmail.com, and We'll do our best to create a recipe for it."
  },

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

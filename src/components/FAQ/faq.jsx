import React, { useState } from 'react';
import styles from '@/src/styles/faq.module.css';

const faqData = [
  {
    question: "What is Plateful?",
    answer:
      "Plateful is a platform dedicated to exploring and celebrating various cuisines and recipes. We aim to provide a diverse culinary experience for both food enthusiasts and anyone looking to discover new and exciting dishes."
  },

  {
    question: "Am I allowed to share your recipes on my website or social media?",
    answer:
      "You may share links to our recipes, but reposting the full recipe on another website or social media is not permitted. If you wish to share our content, please provide proper credit and include a link to the original post."
  },
  {
    question: "Do you provide nutritional information for your recipes?",
    answer:
      "Some recipes may include nutritional information, but these values are only estimates. For the most accurate data, we recommend using a nutrition calculator with the specific ingredients and portion sizes you use."
  },
  {
    question: "Can I request a specific recipe?",
    answer:
      "Absolutely! We love hearing from our readers. Feel free to reach out to us at info.plateful@hotmail.com, and we’ll do our best to create a recipe based on your request."
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
    <div className={styles.faqItem} onClick={toggleAnswer}>
      <div className={styles.faqQuestion}>
        <h4 className={styles.questionText}>
          {faq.question}
        </h4>

        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>

      <p className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
        {faq.answer}
      </p>
    </div>
  );
}

export default App;

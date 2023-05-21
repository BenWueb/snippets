import styles from "./Faq.module.scss";
import FaqQuestion from "./FaqQuestion";

const Faq = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header}>
            <h5>frequently asked questions</h5>
            <h2>web design faq</h2>
            {/* <p>
              If you’re looking for a professional web design experience, you’ve
              come to the right place! We provide modern designs that are
              carefully crafted to increase conversions and take your business
              to the next level. Below are just a few examples of our work.{" "}
            </p> */}
          </div>

          <div className={styles.faqContainer}>
            <div className={styles.column}>
              <FaqQuestion
                question="What is the development process like?"
                answer=" If you’re looking for a professional web design experience, you’ve
              come to the right place! We provide modern designs that are
              carefully crafted to increase conversions and take your business
              to the next level. Below are just a few examples of our work."
              />
              <FaqQuestion
                question="How much does it cost?"
                answer="There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your business. We’ll ask a lot of questions, assess your needs, and give you a price quote based on that assessment. Our smallest package starts at $2500."
              />
              <FaqQuestion
                question="How long does the process take?"
                answer="Our standard timeline is 3-6 weeks to complete a website but this depends on the project since the size and pace of any project is set by each client. How much input you can provide during the initial stages, your feedback, how soon the content is provided – all this affects the speed of completion. The functionality and revisions required will also play a role in your timeline."
              />
              <FaqQuestion
                question="Who writes the text/content for the website?"
                answer="We require that you provide all of the text content for your website. You are the expert on your business, so it’s always best if it comes from you. If you need  assistance, we have a copywriter on our team who can help clean up or write original content for you at an additional cost of $120 per hour."
              />
              <FaqQuestion
                question="Will my website be mobile friendly?"
                answer="Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website is responsive on modern devices and browsers."
              />
            </div>
            <div className={styles.column}>
              <FaqQuestion
                question="Do you offer ongoing support?"
                answer="We can help maintain your website, or you can do so yourself with the more minor changes. The choice is 100% up to you. We provide on-going support for many of our clients but it is not mandatory and you will not be charged a monthly fee. You can contact us as you require updates to your website and we will provide an hourly quote based on your requests."
              />
              <FaqQuestion
                question="How can we get started?"
                answer="Contact us by email at benjamin@strategicsolutionslabs.com with your website details (current or new project), page breakdown, and any sample websites to reference. Upon review, we will provide an estimate for your project or schedule a call to discuss further."
              />
              <FaqQuestion
                question="How much input do I have in the design process?"
                answer="A lot! Your input and feedback is crucial to this website design and development process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality.  We also request you to provide sample websites before we begin your project. Remember this is your website and we need your help and direction as to your final vision.  We’re a team and look forward to hearing your ideas."
              />
              <FaqQuestion
                question="What do you use to build my website?"
                answer="All of our sites are custom built from the ground up using React. React is a powerful tool for building modern websites that are fast, dynamic, and responsive to user interactions. With React, you can create a beautiful and intuitive user interface that will engage your visitors and keep them coming back for more. It was developed by Facebook and has since become widely adopted in the industry. We do however work with many other frameworks, including Wordpress."
              />
              <FaqQuestion
                question="Do I have to be local to work with you?"
                answer="No! We work with clients all over the world and can communicate by email, scheduled calls and Zoom meetings."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;

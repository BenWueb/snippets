import styles from "./Testimonials.module.scss";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonialsContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const testimonialItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className={styles.sectionContainer}>
        <div className="container">
          <div className={styles.headerContainer}>
            <h5>see what our clients say</h5>
            <h2>testimonials</h2>
          </div>
          <motion.div
            className={styles.testimonials}
            variants={testimonialsContainer}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className={styles.testimonial}
              variants={testimonialItem}
            >
              <FaQuoteLeft className={styles.quote} />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/Ellipse 1.png"
                  fill={true}
                  className={styles.image}
                />
              </div>
              <p>
                Ben was a pleasure to work with. The entire process was
                extremely orgainized and transparent and he has always made
                himself available for follow up work.
              </p>
              <div className={styles.signature}>
                <p>- Jack R</p>
                <p>Client</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.testimonial}
              variants={testimonialItem}
            >
              <FaQuoteLeft className={styles.quote} />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/Ellipse 2.png"
                  fill={true}
                  className={styles.image}
                />
              </div>
              <p>
                SSLabs exceeded my expectations and worked closely with me to
                make sure I was 100% satisfied with my website. They asked
                detailed questions and genuinely cared that I loved the end
                product.
              </p>
              <div className={styles.signature}>
                <p>- Tom L</p>
                <p>Client</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.testimonial}
              variants={testimonialItem}
            >
              <FaQuoteLeft className={styles.quote} />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/Ellipse 3.png"
                  fill={true}
                  className={styles.image}
                />
              </div>
              <p>
                These guys are extremely thorough! They really took the time to
                sit down with me and get to know my business and what I was
                looking for. They looked into my competitors and offered design
                and content ideas.
              </p>
              <div className={styles.signature}>
                <p>- Stephanie P</p>
                <p>Client</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.testimonial}
              variants={testimonialItem}
            >
              <FaQuoteLeft className={styles.quote} />
              <div className={styles.imageContainer}>
                <Image
                  src="/images/Ellipse 4.png"
                  fill={true}
                  className={styles.image}
                />
              </div>
              <p>
                Ben made me feel like I was his only client. He was super
                responsive and transparent with the whole process, not to
                mention incredibly patient! I would definitely recommend them to
                my coleagues.
              </p>
              <div className={styles.signature}>
                <p>- Rachel W</p>
                <p>Client</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;

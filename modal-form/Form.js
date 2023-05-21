import { useState, useRef } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [url, setUrl] = useState("");

  const form = useRef();

  // Phone number validation
  const handlePhoneNumberChange = (event) => {
    const cleanedInput = event.target.value.replace(/\D/g, "");

    const strippedInput = cleanedInput.replace(/-/g, "");

    const formattedPhoneNumber = strippedInput.replace(
      /^(\d{1,3})?[-.\s]?(\d{1,3})?[-.\s]?(\d{1,4})?$/,
      (match, p1, p2, p3) => {
        let phoneNumber = "";
        if (p1) phoneNumber += p1;
        if (p2) phoneNumber += "-" + p2;
        if (p3) phoneNumber += "-" + p3;
        return phoneNumber;
      }
    );

    setPhoneNumber(formattedPhoneNumber);
  };

  const handleUrlChange = (event) => {
    const formattedUrl = event.target.value.replace(
      /^(?!www\.)(.*)$/,
      "www.$1"
    );

    setUrl(formattedUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        "template_rsobroq",
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
    } catch (error) {
      console.log(error);
    }
    setPhoneNumber("");
    setUrl("");
    contactForm.reset();
    setLoading(false);
    setModal(true);
  };

  return (
    <>
      {modal && (
        <Modal
          className={styles.modal}
          isOpen={modal}
          onRequestClose={() => setModal(false)}
        >
          <IoMdClose className={styles.close} onClick={() => setModal(false)} />

          <h3 className="sectionTitle">Request Sumbmitted!</h3>
          <p>
            Thank you for your request. You will hear back from our team
            shortly.
          </p>
        </Modal>
      )}

      {loading && <Image src="/images/Blocks-1s-200px.svg" fill={true} />}

      <form
        className={styles.form}
        ref={form}
        id="contactForm"
        onSubmit={onSubmit}
      >
        <div className={styles.checkBoxes}>
          <h2>Get in Touch with a Web Designer and Developer Today</h2>
          <p>
            Let's chat about your website needs and find a solution that's right
            for you!
          </p>
          <p>Drop us a line and we'll get back to you within 24 hours.</p>
          <p className={styles.services}>
            Let us know what services you are interested in:
          </p>
          <div className={styles.checkbox}>
            <input type="checkbox" name="New website" id="new website" />
            <label htmlFor="New website">
              I need a <span>New Website</span>
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="Existing website"
              id="exisitng website"
            />
            <label htmlFor="Exisitng website">
              I need to <span>Redesign</span> an existing website
            </label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="SEO" id="SEO" />
            <label htmlFor="SEO">
              I need <span>SEO</span> services
            </label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="Ecommerce" id="Ecommerce" />
            <label htmlFor="Ecommerce">
              I need an <span>Ecommerce</span> website
            </label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="Hosting" id="Hosting" />
            <label htmlFor="Hosting">
              I need <span>Hosting</span> services
            </label>
          </div>
        </div>
        <div className={styles.inputArea}>
          <h4 className="sectionSubtitle">contact us</h4>
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <label htmlFor="email" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <label htmlFor="phone" />
          <input
            type="text"
            name="phone"
            maxLength="12"
            minLength="12"
            id="phone"
            placeholder="Phone"
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
            required
          />
          <label htmlFor="website" />
          <input
            type="text"
            name="website"
            value={url}
            onChange={handleUrlChange}
            id="website"
            placeholder="Current Website"
          />
          <label htmlFor="describe" />
          <textarea
            name="describe"
            id="describe"
            placeholder="Tell us about your project"
            required
          />

          <button className={`btn ${styles.btn}`} type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* SSLabs Email and phone  */}
    </>
  );
};

export default Form;

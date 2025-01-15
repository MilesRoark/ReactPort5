import styles from "./ContactStyles.module.css";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message"></label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="submit" />
      </form>
    </section>
  );
}

export default Contact;

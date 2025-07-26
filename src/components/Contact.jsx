import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact" className="contact-sec">
      <h1>CONTACT</h1>
      <div className="contact-f">
        <div className="alignLeft">
          <p><strong>Name:</strong> Anas Raed</p>
          <a href="https://github.com/anasraed26" target="_blank" rel="noopener noreferrer">
            <strong>Github</strong>
          </a>
        </div>
        <div className="alignLeft">
          <p><strong>Phone:</strong> +20 101 081 7997</p>
          <p><strong>Email:</strong> anas.aboelsoud06@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

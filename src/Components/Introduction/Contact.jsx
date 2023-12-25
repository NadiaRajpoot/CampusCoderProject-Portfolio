import React from "react";
import "./Contact.css";
import Resume from "../../Assets/CV-Nadia.pdf";

function Contact(props) {
  return (
    <div id="contact " data-theme={props.mode}>
      <div className="contact-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss Your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i class="fa-solid fa-phone"></i>
              06543-765444
            </div>
            <div className="c-info-item">
              <i class="fa-solid fa-envelope"></i>
              nadiarajpoot44@gmail.com
            </div>
            <div className="c-info-item">
              <i class="fa-solid fa-address-card"></i>
              1234 Elm Street Citytown, Stateville 56789 Countryland
            </div>
            <div className="icons">
              <a href="https://www.instagram.com/itx_nadya_rajpoot/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100071112113634&mibextid=2JQ9oc">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://github.com/NadiaRajpoot">
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nadia-rajpoot-05910b231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="icons-btn">
              <a href={Resume} download="Resume" className="btn-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right projects comes along me.
          </p>
          <form>
            <input type="text" placeholder="Name" name="userName" />
            <input type="text" placeholder="Subject" name="UserSubject" />
            <input type="text" placeholder="Email" name="user-email" />
            <textarea name="msg" placeholder="Message" rows="8"></textarea>
            <button className="btn-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

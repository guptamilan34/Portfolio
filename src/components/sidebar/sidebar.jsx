import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="side-links">
      <ul>
        <li>
          <a
            href="https://github.com/guptamilan34"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/milan-gupta34/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
          </a>
        </li>

        <li>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=milangupta9617@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/919993216503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1cJk7KD4zz9i_P3AJP0TjHdXPVnZMwRSl/view?usp=sharing" download>
            <FontAwesomeIcon icon={faFileDownload} /> <span>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

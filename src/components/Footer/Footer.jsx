import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Saikat</h3>
        </div>

        <div className={s.copyright}>
          <h3>© {year} saikat</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/dharsaikat13"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

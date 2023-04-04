import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiIllustrator,
  DiHtml5,
  DiCss3,
  DiGit,
  DiPhotoshop,
  DiBootstrap,
  DiAngularSimple,
} from 'react-icons/di';
import {
  SiBootstrap,
  SiAngular,
  SiAdobeaftereffects,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiPhotoshop />
      </li>
      <li className={s.techIcon}>
        <DiIllustrator />
      </li>
      <li className={s.techIcon}>
        <SiBootstrap />
      </li>
      <li className={s.techIcon}>
        <SiAngular/>
      </li>
      <li className={s.techIcon}>
        <SiAdobeaftereffects />
      </li>
    </ul>
  );
};

export default TechSkills;

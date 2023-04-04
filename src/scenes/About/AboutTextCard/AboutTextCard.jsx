import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Sayani Podder </span>
        from <span className={s.purple}> Behala, India.</span>
        <br />
        Skilled Frontend Devoloper And Ui/Ux designer.
        <br /> Pursuing A Diploma on web design and devlopment from
        <br />
        Arena Animation, Shyambazar.
        <br />
        <br />
        Apart from coding and designing, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Drawing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Singing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;

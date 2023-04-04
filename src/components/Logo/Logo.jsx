import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className} id='lg'>
      <Link to={routes.HOME}>
        
      </Link>
    </div>
  );
};

export default Logo;

import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
   <>
      <h2>Home</h2>
      <Link to="/categories">Categories</Link>
    </>
  );

};

export default Home;

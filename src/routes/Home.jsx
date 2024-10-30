import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>METAL MERCH</h1>
      <div className={styles.intro}>
        <p>Welcome to Metal Merch, your ultimate destination for the most brutal collection of metal band merchandise!</p>
        <p>From vintage thrash metal tees to black metal patches, we've got everything you need to show your allegiance to the metal gods.</p>
        <p>Browse our categories featuring official merch from the most legendary bands in metal history. Each piece is carefully selected to ensure maximum heaviness.</p>
        <p>🤘 SUPPORT THE UNDERGROUND - WEAR IT LOUD 🤘</p>
      </div>
    </div>
  );
};

export default Home;
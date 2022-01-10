import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=CGf5YXUQsmZn42vee1RDV0Yf765WIPe7cG1iP0hF'
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.photos);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spacestagram</h1>
      <p className={styles.desc}>
        Images provided by NASA Mars Rover Photos API
      </p>
      {loading ? (
        <div className='loader'></div>
      ) : (
        results.map((result) => {
          return <Card key={result.id} result={result}></Card>;
        })
      )}
    </div>
  );
}

export default App;

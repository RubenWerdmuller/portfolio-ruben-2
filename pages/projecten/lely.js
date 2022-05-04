import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Over mij</h1>
        <br />
        <p>
          Hallo! Mijn naam is Ruben Werdmuller. Ik woon in Rotterdam en werk bij
          Humanoids als Developer en Team Lead. Humanoids is een digital agency
          bij wie ik via heb gewerkt voor Bravoure, VWS, Lely Nederland en
          momenteel bij VNG..
        </p>

        <a href="/">Dit is een voorbeeld van een link naar je CV.</a>

        <img src="" />
        <figcaption>hey</figcaption>

        <h3>Challenge</h3>

        <p>🏆 Dit project heeft talloze prijzen gewonnen</p>
        <p>tekst</p>
        <Footer />
      </main>
    </>
  );
};

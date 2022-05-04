import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Lely from '../public/plaatjes/lely.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>
          Hi, ik ben Ruben. Vandaag geef ik een college bij De Haagse Hogeschool
          🏫
        </h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          />
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Lely}
            paginaUrl="/projecten/lely"
          /> */}
          <Verhaalkaart>
            <h2>Accessibility first</h2>
            <p>Meer over de accessibility</p>
            <img src="https://i.postimg.cc/fy8nJ0TG/ar-in-ikea-veel.jpg" />
            <figcaption>Foto van mobile devices die AR showcasen</figcaption>
          </Verhaalkaart>
        </section>

        <Footer />
      </main>
    </>
  );
};

import React from 'react'
import '../styles.css'
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePatternsClick = () => {
      navigate(`/patterns`);
  };

  const handleGuidesClick = () => {
    navigate(`/guides`);
  };

  const handleShareClick = () => {
    navigate(`/share`);
  };

  return (
    <main className="wrapper">
      <header>
        <h1 className="centered-text"><strong>{t('homePage.welcome')}</strong></h1>
        <h2 className="centered-text margin-b">{t('homePage.tagline')}</h2>
      </header>
      <section className="grid-container">
        <figure>
          <img className="rounded-image" src="/images/bunny.png" alt="Hand holding medium-sized purple crocheted bunny"/>
        </figure>
        <article className="text-container" aria-label="Information about patterns">
          <header class="grid-item"><h3><strong>{t('homePage.header1')}</strong></h3></header>
          <p id="patternsText" class="grid-item">{t('homePage.text1')}</p>
          <Button variant="primary" onClick={handlePatternsClick} className="btn-custom" aria-labelledby="patternsText">{t('homePage.btn1')}</Button>
        </article>

        <article className="text-container">
          <header class="grid-item"><h3><strong>{t('homePage.header2')}</strong></h3></header>
          <p id="guidesText" class="grid-item">{t('homePage.text2')}</p>
          <Button variant="primary" onClick={handleGuidesClick} className="btn-custom" aria-labelledby="guidesText">{t('homePage.btn2')}</Button>
        </article>
        <figure>
          <img className="rounded-image" src="/images/owl.png" alt="Hand holding small grey and white crocheted owl"/>
        </figure>
        
        <figure>
          <img className="rounded-image" src="/images/cow.png" alt="Hand holding medium-sized black and white crocheted cow"/>
        </figure>
        <article className="text-container">
          <header class="grid-item"><h3><strong>{t('homePage.header3')}</strong></h3></header>
          <p id="shareText" class="grid-item">{t('homePage.text3')}</p>
          <Button variant="primary" onClick={handleShareClick} className="btn-custom" aria-labelledby="shareText">{t('homePage.btn3')}</Button>
        </article>
      </section>
    </main>
  );
}

export default Home
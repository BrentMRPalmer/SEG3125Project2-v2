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
    <div className="wrapper">
      <h1 className="centered-text"><b>{t('homePage.welcome')}</b></h1>
      <h2 className="centered-text margin-b">{t('homePage.tagline')}</h2>
      <div className="grid-container">
        <img className="rounded-image" src="/images/bunny.png" />
        <div className="text-container">
          <div class="grid-item"><h3><strong>{t('homePage.header1')}</strong></h3></div>
          <div class="grid-item">{t('homePage.text1')}</div>
          <Button variant="primary" onClick={handlePatternsClick} className="btn-custom">{t('homePage.btn1')}</Button>
        </div>

        <div className="text-container">
          <div class="grid-item"><h3><strong>{t('homePage.header2')}</strong></h3></div>
          <div class="grid-item">{t('homePage.text2')}</div>
          <Button variant="primary" onClick={handleGuidesClick} className="btn-custom">{t('homePage.btn2')}</Button>
        </div>
        <img className="rounded-image" src="/images/bunny.png" />

        <img className="rounded-image" src="/images/bunny.png" />
        <div className="text-container">
          <div class="grid-item"><h3><strong>{t('homePage.header3')}</strong></h3></div>
          <div class="grid-item">{t('homePage.text3')}</div>
          <Button variant="primary" onClick={handleShareClick} className="btn-custom">{t('homePage.btn3')}</Button>
        </div>
      </div>
    </div>
  );
}

export default Home
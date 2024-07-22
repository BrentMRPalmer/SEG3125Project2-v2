import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function NavbarC() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Navigate to home page">
          <img
            src="/icons/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          {' '}
          <strong>Yarn Repository</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/patterns" aria-label="Navigate to page to find patterns">{t('navbar.patterns')}</Nav.Link>
            <Nav.Link as={Link} to="/guides" aria-label="Navigate to page to watch guides">{t('navbar.guides')}</Nav.Link>
            <Nav.Link as={Link} to="/share" aria-label="Navigate to page to design and share patterns">{t('navbar.share')}</Nav.Link>
            <Nav.Link as={Link} to="/FAQ" aria-label="Navigate to frequently asked questions about the site">{t('navbar.faq')}</Nav.Link>
          </Nav>
          <LanguageSwitcher />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
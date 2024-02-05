import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import logoImg from "../../assets/images/logo.png";

const DLink = ({ slug, end, title, children }) => {
  return (
    <Nav.Link as="span">
      <NavLink className={styles.navLink} to={slug} end={!!end}>
        {title} {children}
      </NavLink>
    </Nav.Link>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as="span">
            <DLink slug="/">
              <img src={logoImg} alt="Codv logo" />
            </DLink>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <DLink title="Home" slug="/" end />
            <DLink title="blog" slug="/blog" end />
            <DLink title="login" slug="/login" />
            <DLink title="New post" slug="/blog/new" />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

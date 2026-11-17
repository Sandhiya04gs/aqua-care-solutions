import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";
import { company, navLinks } from "../data/company";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label={`${company.name} home`}>
          <Logo />
          <span className="brand__text">
            <span className="brand__name">{company.name}</span>
            <span className="brand__tag">{company.tagline}</span>
          </span>
        </Link>

        <button className="nav-toggle" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) =>
            l.hash ? (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ) : (
              <NavLink key={l.label} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>{l.label}</NavLink>
            )
          )}
          <Button to="/contact" size="sm">Get in Touch</Button>
        </nav>
      </div>
    </header>
  );
}

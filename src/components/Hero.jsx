import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import ProductImage from "./ProductImage";
import { company } from "../data/company";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge">{company.certification}</span>
          <h1>Clean Water for a Better Tomorrow.</h1>
          <p className="hero__tag">{company.heroTagline}</p>
          <p>
            {company.name} supplies, installs and services domestic, commercial and industrial RO water
            purification systems in Guduvancheri, Chengalpattu and nearby areas.
          </p>
          <div className="hero__btns">
            <Button to="/products">Explore Products</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
          <ul className="hero__chips">
            <li><Icon name="shield" size={16} />ISO 9001:2015 certified</li>
            <li><Icon name="tool" size={16} />Installation and repair</li>
            <li><Icon name="check" size={16} />Sales and service</li>
          </ul>
        </div>
        <div className="hero__visual">
          <span className="drop drop--1" /><span className="drop drop--2" /><span className="drop drop--3" />
          {photoFailed ? (
            <ProductImage product={{ kind: "smart", name: "Smart RO water purifier", image: "" }} className="hero__img" />
          ) : (
            <img className="hero__photo" src="/images/hero.jpg" alt="Clean RO purified water pouring from a kitchen tap into a glass"
              onError={() => setPhotoFailed(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

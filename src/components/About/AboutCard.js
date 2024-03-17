import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fahad Sajid </span>
            from <span className="purple"> Haripur, KPK, Pakistan.</span>
            <br />
            I am currently studying BS Software Engineering at PAF-IAST, Haripuir.
            <br />
            
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Expand my skills to gain more knowledge.
            </li>
            <li className="about-activity">
              <ImPointRight /> Research about AI Working.
            </li>
            <li className="about-activity">
              <ImPointRight /> Making interactive Websites.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fahad Sajid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="React.js chat app for friends. Features real-time messaging, image sharing, and message reactions, creating a personalized space for socializing and resource sharing."
              ghLink="https://github.com/Fahad4920/React-chat-App"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pasword Generating Web"
              description=" The Random Password Generator web app creates secure passwords with customizable options like length and character types, ensuring strong online security."
              ghLink="https://github.com/Fahad4920/Password-Generating-App"          
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai Chatbot"
              description="AI chatbot offering natural conversations. Uses advanced language processing to engage users in meaningful interactions, enhancing customer support and user experiences."
              ghLink="https://github.com/Fahad4920/ChatBots"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

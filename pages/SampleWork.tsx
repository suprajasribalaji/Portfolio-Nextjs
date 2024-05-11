import { NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { BackgroundColor, TextColor } from "../styles/theme";
import Carousel from 'react-bootstrap/Carousel';

const taskNoteImageSrc = "/images/expedu-bg-img.jpeg";
const taskNoteDemoLink = "https://task-note-ab071.web.app/";
const taskNoteSourceCodeLink = "https://github.com/suprajasribalaji/task_note";

const dnsManagerImageSrc = "/images/dns-manager.jpg";
const dnsManagerDemoLink = "https://dns-manager-8da5e.web.app/";
const dnsManagerSourceCodeLink = "https://github.com/suprajasribalaji/DNSManager";

const portfolioImageSrc = "/images/portfolio.jpeg";
const portfolioDemoLink = "https://supraja-sri.web.app/";
const portfolioSourceCodeLink = "https://github.com/suprajasribalaji/Portfolio-Nextjs";

const projectDetails = [
  {
    title: "Task Note",
    description:
      "Designed intuitive UI with ReactJS, JavaScript, Redux, and Ant Design for efficient task management, including CRUD operations, ensuring seamless user experience.",
    demoLink: `${taskNoteDemoLink}`,
    sourceCodeLink: `${taskNoteSourceCodeLink}`,
    imageSrc: `${taskNoteImageSrc}`,
  },
  {
    title: "DNS Manager",
    description: "Designed a user-friendly UI with ReactJS, TypeScript, and Ant Design for effortless DNS record management, integrating AWS Route53, supporting CRUD operations.",
    demoLink: `${dnsManagerDemoLink}`,
    sourceCodeLink: `${dnsManagerSourceCodeLink}`,
    imageSrc: `${dnsManagerImageSrc}`,
  },
  {
    title: "Portfolio",
    description: "Driven by Next.js, TypeScript, and Firebase, our portfolio exemplifies sophistication in design and functionality. It delivers a refined and elegant user interface.",
    demoLink: `${portfolioDemoLink}`,
    sourceCodeLink: `${portfolioSourceCodeLink}`,
    imageSrc: `${portfolioImageSrc}`,
  },
];

const SampleWork: NextPage = () => {
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedProjectDetails = chunkArray(projectDetails, 3);
  const displayCarousel = projectDetails.length > 3;


  return (
    <SampleWorkPage>
      <SampleWorkContent>
        <Title>Sample Work</Title>
        <Content>
          <CenteredContent>
            {displayCarousel && (
              <StyledCarouselContainer>
                <StyledCarousel indicators={false} controls={true} interval={null}>
                  {chunkedProjectDetails.map((chunk, index) => (
                    <Carousel.Item key={index}>
                      <Row>
                        {chunk.map((project, idx) => (
                          <Col key={idx} md={4}>
                            <CardContainer>
                              <StyledCard>
                                <StyledImg src={project.imageSrc} alt={project.title} style={{ width: '60%' }}/>
                                <Card.Body>
                                  <Card.Title className="text-center" style={{ marginTop: '5%'}}>{project.title}</Card.Title> 
                                  <Card.Text>{project.description}</Card.Text>
                                  <CardButtons>
                                    <DemoButton>
                                      {project.demoLink && (
                                        <Button
                                          variant="primary"
                                          href={project.demoLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Demo
                                        </Button>
                                      )}
                                    </DemoButton>
                                    <SourceCodeButton>
                                      {project.sourceCodeLink && (
                                        <Button
                                          variant="secondary"
                                          href={project.sourceCodeLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Source Code
                                        </Button>
                                      )}
                                    </SourceCodeButton>
                                  </CardButtons>
                                </Card.Body>
                              </StyledCard>
                            </CardContainer>
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </StyledCarousel>
              </StyledCarouselContainer>
            )}
            {!displayCarousel && (
              <Cards>
                <Row xs={1} md={2} lg={3} className="gy-5 gx-4">
                  {projectDetails.map((project, index) => (
                    <Col key={index}>
                      <CardContainer>
                        <StyledCard>
                          <StyledImg src={project.imageSrc} alt={project.title} style={{ width: '60%' }}/>
                          <Card.Body>
                            <Card.Title className="text-center" style={{ marginTop: '5%'}}>{project.title}</Card.Title> 
                            <Card.Text>{project.description}</Card.Text>
                            <CardButtons>
                              <DemoButton>
                                {project.demoLink && (
                                  <Button
                                    variant="primary"
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Demo
                                  </Button>
                                )}
                              </DemoButton>
                              <SourceCodeButton>
                                {project.sourceCodeLink && (
                                  <Button
                                    variant="secondary"
                                    href={project.sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Source Code
                                  </Button>
                                )}
                              </SourceCodeButton>
                            </CardButtons>
                          </Card.Body>
                        </StyledCard>
                      </CardContainer>
                    </Col>
                  ))}
                </Row>
              </Cards>
            )}
          </CenteredContent>
        </Content>
      </SampleWorkContent>
    </SampleWorkPage>
  );
};

export default SampleWork;

const StyledCarouselContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;

  .carousel-control-prev,
  .carousel-control-next {
    width: 10%; 
    height: 8%; 
    background-color: transparent;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    align-self: center;

    &:hover {
      opacity: 1;
    }
  }

  .carousel-control-prev {
    left: -14%;
  }

  .carousel-control-next {
    right: -14%;
  }

  @media (max-width: 767px) {
    width: 100%;

    .carousel-control-prev {
      left: 2%;
    }

    .carousel-control-next {
      right: 2%;
    }
  }
`;

const SampleWorkPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${BackgroundColor.sampleWorkBg};
`;

const SampleWorkContent = styled.div`
  color: ${TextColor.secondaryWhite};
  padding-top: 3%;
`;

const Title = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-size: 350%;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  font-family: "Fira Sans", sans-serif;
  margin-top: 5%;
  justify-content: center;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
  background-color: transparent; /* Remove white background */
  text-align: center; /* Center the content */
`;

const StyledCard = styled(Card)`
  background-color: ${BackgroundColor.sampleWorkBg};
  color: ${TextColor.primaryWhite};
  border: none;
`;

const StyledImg = styled(Card.Img)`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto; /* Center the image horizontally */
`;

const CardButtons = styled.div`
  display: flex;
`;

const DemoButton = styled.div`
  margin-left: 18%;
`;

const SourceCodeButton = styled.div`
  margin-left: 8%;
`;

const StyledCarousel = styled(Carousel)`
  width: 90%;
  margin-left: 4%;
`;

const Cards = styled.div`
  width: 83%;
`;

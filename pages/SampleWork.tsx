import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, TextColor } from "../styles/theme";
import Image from 'next/image';

const taskNoteImageSrc = "/images/expedu-bg-img.jpeg";
const taskNoteDemoLink = "https://task-note-ab071.web.app/";
const taskNoteSourceCodeLink = "https://github.com/suprajasribalaji/task_note";

const dnsManagerImageSrc = "/images/dns-manager.jpg";
const dnsManagerDemoLink = "https://dns-manager-8da5e.web.app/";
const dnsManagerSourceCodeLink = "https://github.com/suprajasribalaji/DNSManager";

const portfolioImageSrc = "/images/portfolio.jpeg";
const portfolioDemoLink = "";
const portfolioSourceCodeLink = "https://github.com/suprajasribalaji/portfolio";

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
    description:
      "Designed a user-friendly UI with ReactJS, TypeScript, and Ant Design for effortless DNS record management, integrating AWS Route53, supporting CRUD operations.",
    demoLink: `${dnsManagerDemoLink}`,
    sourceCodeLink: `${dnsManagerSourceCodeLink}`,
    imageSrc: `${dnsManagerImageSrc}`,
  },
  {
    title: "Portfolio",
    description:
      "Driven by Next.js, TypeScript, and MongoDB, our portfolio exemplifies sophistication in design and functionality. It delivers a refined and elegant user interface.",
    demoLink: `${portfolioDemoLink}`,
    sourceCodeLink: `${portfolioSourceCodeLink}`,
    imageSrc: `${portfolioImageSrc}`,
  },
];

const SampleWork: NextPage = () => {
    return (
        <SampleWorkPage>
            <SampleWorkContent>
                <Title>
                    Sample Work
                </Title>
                <Content>
                    {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {projectDetails.map((project, index) => (
                                <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={project.imageSrc} alt={project.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                            <a href={project.sourceCodeLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                        </a>
                    </div> */}
                </Content>
            </SampleWorkContent>
        </SampleWorkPage>
    )
};

export default SampleWork;

const SampleWorkPage = styled.div`
    height: 100vh;
    width: 100%;
    color: ${TextColor.secondaryWhite};
`;

const SampleWorkContent = styled(SampleWorkPage)`
    background-color: ${BackgroundColor.sampleWorkBg};
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: "Fira Sans", sans-serif;
    font-size: 350%;
    font-weight: bold;
    text-align: center;
    margin-top: 4%;
`;

const Content = styled.div`
    margin-top: 5%;
    gap: 4%;
    justify-content: center;
`;

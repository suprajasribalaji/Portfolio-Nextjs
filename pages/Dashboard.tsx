import { NextPage } from "next";
import { useRef, useState } from "react";
import styled from "styled-components";
import { ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/home-bg-img.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import ExperienceAndEducation from "./ExperienceAndEducation";
import SkillsAndProficiency from "./SkillsAndProficiency";
import SampleWork from "./SampleWork";
import ReachOut from "./ReachOut";

const Dashboard: NextPage = () => {
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const reachOutPageRef = useRef<HTMLDivElement>(null);
  const experienceAndEducationPageRef = useRef<HTMLDivElement>(null);
  const skillsAndProficiencyPageRef = useRef<HTMLDivElement>(null);
  const sampleWorkPageRef = useRef<HTMLDivElement>(null);
  const [resumeURL, setResumeURL] = useState<string>('');

  const handleKnowMoreClick = () => {
    aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReachOutClick = () => {
    reachOutPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    experienceAndEducationPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeContinuationClick = () => {
    skillsAndProficiencyPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = () => {
    sampleWorkPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Home>
      <DashboardPage>
        <Content>
          <TitleAndSubtitle>
            <Title>
              SUPRAJA SRI R B
            </Title>
            <SubTitle>
              Enthusiastic Developer
            </SubTitle>
          </TitleAndSubtitle>
          <ActionButtons>
            <KnowMoreButton>
              <StyledButton type="button" className="btn btn-outline-primary btn-lg" onClick={handleKnowMoreClick}><TextInButton>KNOW MORE</TextInButton></StyledButton>
            </KnowMoreButton>
            <ReachOutButton>
              <StyledButton type="button" className="btn btn-outline-primary btn-lg" onClick={handleReachOutClick}><TextInButton>REACH OUT</TextInButton></StyledButton>
            </ReachOutButton>
          </ActionButtons>
        </Content>
      </DashboardPage>
      <AboutPage ref={aboutPageRef}>
        <About 
          handleResumeClick={handleResumeClick}
          handleProjectClick={handleProjectClick}
          resumeURL={resumeURL}
        />
      </AboutPage>
      <ExperienceAndEducationPage ref={experienceAndEducationPageRef}>
        <ExperienceAndEducation
          handleResumeContinuationClick={handleResumeContinuationClick}
          resumeURL={resumeURL}
        />
      </ExperienceAndEducationPage>
      <SkillsAndProficiencyPage ref={skillsAndProficiencyPageRef}>
        <SkillsAndProficiency
          handleProjectClick={handleProjectClick}
          resumeURL={resumeURL}
        />
      </SkillsAndProficiencyPage>
      <SampleWorkPage ref={sampleWorkPageRef}>
        <SampleWork />
      </SampleWorkPage>
      <ReachOutPage ref={reachOutPageRef}> 
        <ReachOut />
      </ReachOutPage>
    </Home>
  )
};

export default Dashboard;

const Home = styled.div`
    height: 100vh;
    width: 100%;
`;

const DashboardPage = styled(Home)`
  background: linear-gradient(0deg, ${LinearGradientColor.homeLG}, ${LinearGradientColor.homeLG}),
    url(${BackgroundImage.src});
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Hanken Grotesk", sans-serif;
  color: ${TextColor.primaryWhite};
`;

const TitleAndSubtitle = styled.div`
  margin-bottom: 3%;
`;

const Title = styled.div`
  font-weight: 600; 
  font-size: 400%;
  margin-top: 51.5%;
  letter-spacing: 0.03em;
`;

const SubTitle = styled.div`
  font-weight: 500;
  color: ${TextColor.tertiaryWhite};
  font-size: 180%;
  margin-top: 2%;
`;

const StyledButton = styled.button`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
  border-radius: 1.4em;
  width: 170%;
`;

const ActionButtons = styled.div`
  margin-top: 1.5%;
  display: flex;
  width: 30%;
`;

const KnowMoreButton = styled.div`
  margin-right: 20%;
`;

const ReachOutButton = styled.div`
  margin-left: 10%;
`;

const TextInButton = styled.span`
  font-size: 70%;
`

const AboutPage = styled.div``;

const ReachOutPage = styled.div``;

const ExperienceAndEducationPage = styled.div``;

const SkillsAndProficiencyPage = styled.div``;

const SampleWorkPage = styled.div``;
import { NextPage } from "next";
import styled from "styled-components";
import { ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/home-bg-img.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import ExperienceAndEducation from "./ExperienceAndEducation";
import SkillsAndProficiency from "./SkillsAndProficiency";
import SampleWork from "./SampleWork";
import ReachOut from "./ReachOut";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref } from 'firebase/storage';
import storage from "../config/firebase.config";

const Dashboard: NextPage = () => {
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const reachOutPageRef = useRef<HTMLDivElement>(null);
  const experienceAndEducationPageRef = useRef<HTMLDivElement>(null);
  const skillsAndProficiencyPageRef = useRef<HTMLDivElement>(null);
  const sampleWorkPageRef = useRef<HTMLDivElement>(null);
  const [resumeURL, setResumeURL] = useState<string>('');

  useEffect(() => {
    getDownloadURL(ref(storage, 'suprajasrirb_resume.pdf'))
    .then((url) => {
        setResumeURL(url);
        console.log('storage url::::  ', url);
    })
  }, []);

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
              <StyledButton type="button" className="btn btn-outline-primary btn-lg"><TextInButton>KNOW MORE</TextInButton></StyledButton>
            </KnowMoreButton>
            <ReachOutButton>
              <StyledButton type="button" className="btn btn-outline-primary btn-lg"><TextInButton>REACH OUT</TextInButton></StyledButton>
            </ReachOutButton>
          </ActionButtons>
        </Content>
      </DashboardPage>
      <About />
      <ExperienceAndEducation />
      <SkillsAndProficiency />
      <SampleWork />
      <ReachOut />
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
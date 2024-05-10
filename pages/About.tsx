import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, TextColor } from "../styles/theme";
import ProfilePicture from "../public/images/myImage.jpg";
import { useState } from "react";

const About: NextPage = () => {
    const [isResumeClicked, setIsResumeClicked] = useState<boolean>(false);
    
    return (
        <AboutPage>
            <AboutContent>
                <Title>
                    <TitleHeading>About Me</TitleHeading>
                </Title>
                <Content>
                    With 7 months' experience and an internship at 5C Network, I excel in full-stack development with 
                    JavaScript and TypeScript. Committed to resilient solutions, I drive pioneering projects and seek 
                    growth opportunities. My dedication to excellence fuels continuous skill enhancement, 
                    empowering me to contribute meaningfully to full-stack development.                
                </Content>
                <ResumeAlertPopup>
                    {
                        isResumeClicked && 
                        <AlertPopup className="alert alert-primary" role="alert" style={{ width: '100%' }}>
                            <PopupDescription>Do you want to download or view the resume?</PopupDescription>
                            <PopupButtons className="d-flex justify-content-between">
                                <DownloadButton>
                                    <StyledPopUpButton type="button" className="btn" onClick={() => setIsResumeClicked(false)}>Download</StyledPopUpButton>
                                </DownloadButton>
                                <ViewButton>
                                    <StyledPopUpButton type="button" className="btn" onClick={() => setIsResumeClicked(false)}>View</StyledPopUpButton>
                                </ViewButton>
                            </PopupButtons>
                        </AlertPopup>
                    }
                </ResumeAlertPopup>
                <Buttons>
                    <ResumeButton>
                        <StyledButton type="button"  className="btn btn-outline-primary btn-lg " onClick={() => setIsResumeClicked(true)}>Resume</StyledButton>
                    </ResumeButton>
                    <ProjectButton>
                        <StyledButton type="button"  className="btn btn-outline-primary btn-lg" >Project</StyledButton>
                    </ProjectButton>                    
                </Buttons>
            </AboutContent>
            <ProfilePhoto>
                <StyledImage src={ProfilePicture.src} />
            </ProfilePhoto>
        </AboutPage>
    )
};

export default About;

const AboutPage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${BackgroundColor.aboutBg};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const AboutContent = styled.div`
    margin-left: 13%;
    margin-bottom: 10%;
    line-height: 200%;4
`;

const Title = styled.div`
    font-family: "Hanken Grotesk", sans-serif;
    margin-bottom: 8%;
    margin-top: 20%;
`;

const TitleHeading = styled.h3`
    font-size: 400%;
    font-weight: 550;
`;

const Content = styled.div`
    text-align: justify;
    font-size: 120%;
`;

const Buttons = styled.div`
    margin-top: 12%;
    display: flex;
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
  width: 190%;
`;

const StyledPopUpButton = styled.button`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
  border-radius: 1.8em;
  width: 160%;
`;

const ResumeButton = styled.div`
  margin-left: 5%;
`;

const ProjectButton = styled.div`
    margin-left: 25%;
`;

const ProfilePhoto = styled.div`
    margin-left: 6%;
    margin-right: 15%;
`;

const StyledImage = styled.img`
    border-radius: 50%;
    object-fit: cover;
`;

const ResumeAlertPopup = styled.div`
  margin-top: 6%;
`;

const AlertPopup = styled.div`
  display: flex;
  flex-direction: row;
`;

const PopupDescription = styled.div`
  width: 100%;
`;

const PopupButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14%;  
`;

const DownloadButton = styled.div`
  margin-bottom: 12%;
`;

const ViewButton = styled.div``;
import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/skillprof-bg-img.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SkillsAndProficiency : NextPage = () => {
    return (
        <SkillsAndProficiencyPage>
        <SkillsAndProficiencyContent>
                    <Title>
                        Skills & Proficiencies
                    </Title>
                    <AboutSkillsAndProficiency>
                        <TechnicalSkillsAndProficiency>
                            <TechnicakSkillsTitle>
                                PROGRAMMING LANGUAGES
                                <StyledIconButton type="button"  className="btn btn-outline-primary btn-lg ">
                                    <i className="bi bi-arrow-right-short"></i>
                                </StyledIconButton>
                            </TechnicakSkillsTitle>
                            <TechnicakSkillsTitle>
                                FRAMEWORK AND LIBRARIES
                                <StyledIconButton type="button"  className="btn btn-outline-primary btn-lg ">
                                    <i className="bi bi-arrow-right-short"></i>
                                </StyledIconButton>
                            </TechnicakSkillsTitle>
                            <TechnicakSkillsTitle>
                                CLOUD SERVICES
                                <StyledIconButton type="button"  className="btn btn-outline-primary btn-lg ">
                                    <i className="bi bi-arrow-right-short"></i>
                                </StyledIconButton>
                            </TechnicakSkillsTitle>
                            <TechnicakSkillsTitle>
                                DATABASE SYSTEMS
                                <StyledIconButton type="button"  className="btn btn-outline-primary btn-lg ">
                                    <i className="bi bi-arrow-right-short"></i>
                                </StyledIconButton>
                            </TechnicakSkillsTitle>
                            <TechnicakSkillsTitle>
                                OTHER TOOLS
                                <StyledIconButton type="button"  className="btn btn-outline-primary btn-lg ">
                                    <i className="bi bi-arrow-right-short"></i>
                                </StyledIconButton>
                            </TechnicakSkillsTitle>
                            <TechnicalSkills>
                                <Skills>
                                    
                                </Skills>
                            </TechnicalSkills>
                        </TechnicalSkillsAndProficiency>
                    </AboutSkillsAndProficiency>
                    <ActionButton>
                        <DownloadResumeButton>
                            <StyledButton type="button" className="btn btn-outline-primary">Download</StyledButton>
                        </DownloadResumeButton>
                        <SampleWorkButton>
                            <StyledButton type="button" className="btn btn-outline-primary">Sample Work</StyledButton>
                        </SampleWorkButton>
                    </ActionButton>
                </SkillsAndProficiencyContent>
        </SkillsAndProficiencyPage>
    )
};

export default SkillsAndProficiency;

const ProgrammingLanguages = styled.div``;

const StyledIconButton = styled.button`
  font-weight: bold;
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: transparent; 
    color: ${TextColor.lightWhite};
  }
`;

const StyledButton = styled.button`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
  border-radius: 1.8em;
  width: 150%;
  height: 100%;
`;

const SkillsAndProficiencyPage = styled.div`
    width: 100%;
    height: 100vh;
    color: ${TextColor.primaryWhite};
    background: linear-gradient(0deg, ${LinearGradientColor.expeduLG}, ${LinearGradientColor.expeduLG}),
    url(${BackgroundImage.src});
    background-size: cover;
`;

const SkillsAndProficiencyContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin-top: 6%;
    margin-left: 8.5%;
    font-family: "Fira Sans", sans-serif;
    font-weight: bold;
    font-size: 350%;
`;

const AboutSkillsAndProficiency = styled.div`
    display: flex;
    margin-left: 9.5%;
    margin-top: 5.5%;
`;

const TechnicalSkillsAndProficiency = styled.div``;

const TechnicakSkillsTitle = styled.div`
    font-family: "PT Sans Caption", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 115%;
`;

const TechnicalSkills = styled.div`
    font-family: "DM Sans", sans-serif;
    margin-top: 9%;
    font-size: 110%;
    color: ${TextColor.SemiLightWhite};
    padding-right: 48%;
`;

const Skills = styled.div`
    margin-top: 8%;
    font-size: 88%;
`;

const ToolsAndProficiency = styled.div`
    margin-left: 6%;
    margin-right: 6%;
`;

const ToolsTitle = styled(TechnicakSkillsTitle)``;

const Tools = styled.div`
    margin-top: 28%;
    font-size: 88%;
`;

const Tool = styled.div`
    margin-bottom: 20%;
    color: ${TextColor.SemiLightWhite};
`;

const TechnicalSkillsProgressBar = styled.div`
    height: 20px; 
    background-color: ${BackgroundColor.strokeColor};
`;

const ToolsProgressBar = styled(TechnicalSkillsProgressBar)``;

const ProgressBar = styled.div`
    width: 30%;
    background-color: ${BackgroundColor.trailColor};
`;

const ActionButton = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 70%;
`;

const DownloadResumeButton = styled.div`
  margin-right: 10%;
`;

const SampleWorkButton = styled.div`
  margin-left: 10%;
`;
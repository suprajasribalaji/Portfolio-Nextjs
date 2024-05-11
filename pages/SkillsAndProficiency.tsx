import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/skillprof-bg-img.jpeg";

type Props = {
    handleProjectClick: () => void;
    resumeURL: string;
}

const SkillsAndProficiency : NextPage<Props> = ({ handleProjectClick, resumeURL }) => {
    
    const handleDownloadButton = () => {
        console.log(resumeURL, ' ------------');
        const link = document.createElement('a');
        link.href = resumeURL;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <SkillsAndProficiencyPage>
        <SkillsAndProficiencyContent>
                    <Title>
                        Skills &<br/>Proficiencies
                    </Title>
                    <AboutSkillsAndProficiency>
                        <TechnicalSkillsAndProficiency>
                            <TechnicakSkillsTitle>
                                TECHNICAL SKILLS
                            </TechnicakSkillsTitle>
                            <TechnicalSkills>
                                <Skills>
                                    Python, JavaScript, TypeScript
                                    <TechnicalSkillsProgressBar className="progress" >
                                        <ProgressBar
                                            className="progress-bar bg-custom"
                                            role="progressbar"
                                            style={{ width: '70%', backgroundColor: 'white' }}
                                            aria-valuenow={70} // Convert the value to a number
                                            aria-valuemin={0} // Convert the value to a number
                                            aria-valuemax={100} // Convert the value to a number
                                        ></ProgressBar>
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                                <Skills>
                                    ReactJS, Redux, NextJS, ExpressJS, CSS (Bootstrap, Ant Design), REST API
                                    <TechnicalSkillsProgressBar className="progress" >
                                        <ProgressBar
                                            className="progress-bar bg-custom"
                                            role="progressbar"
                                            aria-valuenow={50} // Convert the value to a number
                                            aria-valuemin={0} // Convert the value to a number
                                            aria-valuemax={100} // Convert the value to a number
                                        ></ProgressBar>
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                                <Skills>
                                    Django, AWS, MongoDB, GIT, ORM 
                                    <TechnicalSkillsProgressBar className="progress" >
                                        <ProgressBar
                                            className="progress-bar bg-custom"
                                            role="progressbar"
                                            style={{ width: '30%', backgroundColor: '#FFFFFF' }}
                                            aria-valuenow={30} // Convert the value to a number
                                            aria-valuemin={0} // Convert the value to a number
                                            aria-valuemax={100} // Convert the value to a number
                                        ></ProgressBar>
                                    </TechnicalSkillsProgressBar>
                                </Skills>
                            </TechnicalSkills>
                        </TechnicalSkillsAndProficiency>
                        <ToolsAndProficiency>
                            <ToolsTitle>
                                TOOLS
                            </ToolsTitle>
                            <Tools>
                                <Tool>
                                    IDE - Visual Studio Code
                                    <ToolsProgressBar className="progress" >
                                        <ProgressBar
                                            className="progress-bar bg-custom"
                                            role="progressbar"
                                            style={{ width: '85%', backgroundColor: '#FFFFFF' }}
                                            aria-valuenow={85} // Convert the value to a number
                                            aria-valuemin={0} // Convert the value to a number
                                            aria-valuemax={100} // Convert the value to a number
                                        ></ProgressBar>
                                    </ToolsProgressBar>
                               </Tool>
                                <Tool>
                                    DESIGN TOOL - CANVA
                                    <ToolsProgressBar className="progress" >
                                        <ProgressBar
                                            className="progress-bar bg-custom"
                                            role="progressbar"
                                            style={{ width: '30%', backgroundColor: '#FFFFFF' }}
                                            aria-valuenow={30} // Convert the value to a number
                                            aria-valuemin={0} // Convert the value to a number
                                            aria-valuemax={100} // Convert the value to a number
                                        ></ProgressBar>
                                    </ToolsProgressBar>
                                </Tool>
                            </Tools>
                        </ToolsAndProficiency>
                    </AboutSkillsAndProficiency>
                    <ActionButton>
                        <DownloadResumeButton>
                            <StyledButton type="button" className="btn btn-outline-primary" onClick={handleDownloadButton}>Download</StyledButton>
                        </DownloadResumeButton>
                        <SampleWorkButton>
                            <StyledButton type="button" className="btn btn-outline-primary" onClick={handleProjectClick}>Sample Work</StyledButton>
                        </SampleWorkButton>
                    </ActionButton>
                </SkillsAndProficiencyContent>
        </SkillsAndProficiencyPage>
    )
};

export default SkillsAndProficiency;

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
    margin-left: 9%;
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
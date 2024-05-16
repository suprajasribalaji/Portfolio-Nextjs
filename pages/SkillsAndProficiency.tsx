import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/skillprof-bg-img.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";

const SkillSetData = [
    {
        category: 'Programming Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
    },
    {
        category: 'Framework and Libraries',
        skills: ['ReactJS', 'Redux Tool Kit (RTK)', 'NextJS', 'ExpressJS (REST API)', 'NestJS', 'Django']
    },
    {
        category: 'Cloud Services',
        skills: ['Amazon Web Service (AWS)', 'Firebase']
    },
    {
        category: 'Database Systems',
        skills: ['MySQL', 'MongoDB']
    },
    {
        category: 'Version Control System',
        skills: ['GIT']
    },
    {
        category: 'Other Tools',
        skills: ['Visual Studio Code IDE', 'Canva Design', 'Eclipse']
    }
];

const SkillsAndProficiency: NextPage = () => {
    const [selectedSkillSet, setSelectedSkillSet] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        setSelectedSkillSet(prev => prev === category ? '' : category);
    };

    return (
        <SkillsAndProficiencyPage>
            <SkillsAndProficiencyContent>
                <Title>Skills & Proficiencies</Title>
                <AboutSkillsAndProficiency>
                    <TechnicalSkillsAndProficiency>
                        {SkillSetData.map((category, index) => (
                            <SkillSetContainer key={index}>
                                <TechnicakSkillsTitle>
                                    {category.category}
                                    <StyledIconButton type="button" className="btn btn-outline-primary btn-lg" onClick={() => handleCategoryClick(category.category)}>
                                        <i className="bi bi-arrow-right-short"></i>
                                    </StyledIconButton>
                                </TechnicakSkillsTitle>
                                {selectedSkillSet === category.category && (
                                    <TechnicalSkills>
                                        <Skills>
                                            {category.skills.map((skill, index) => (
                                                <Skills key={index}>{skill}</Skills>
                                            ))}
                                        </Skills>
                                    </TechnicalSkills>
                                )}
                            </SkillSetContainer>
                        ))}
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

const SkillSetContainer = styled.div`
    display: flex;
`;

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
    height: 110vh;
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
    margin-left: 9.5%;
    margin-top: 5.5%;
`;

const TechnicalSkillsAndProficiency = styled.div``;

const TechnicakSkillsTitle = styled.div`
    font-family: "PT Sans Caption", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 115%;
    width: 26%;
`;

const TechnicalSkills = styled.div`
    font-family: "DM Sans", sans-serif;
    font-size: 110%;
    color: ${TextColor.SemiLightWhite};
    padding-right: 48%;
    margin-top: 2%;
`;

const Skills = styled.div`
    font-size: 95%;
    display: inline;
    &:not(:last-child)::after {
        content: "\\A"; // No space before the line break character
        white-space: pre;
    }
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
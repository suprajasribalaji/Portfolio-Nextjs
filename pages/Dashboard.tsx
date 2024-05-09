import { NextPage } from "next";
import { Button } from "antd";
import styled from "styled-components";
import { ButtonColor, LinearGradientColor, TextColor } from "../styles/theme";
import BackgroundImage from "../public/images/home-bg-img.jpeg";

const Dashboard: NextPage = () => {
    return (
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
                        <StyledButton type="link" shape="round" size="large" ><TextInButton>KNOW MORE</TextInButton></StyledButton>
                    </KnowMoreButton>
                    <ReachOutButton>
                        <StyledButton type="link" shape="round" size="large" ><TextInButton>REACH OUT</TextInButton></StyledButton>
                    </ReachOutButton>
                </ActionButtons>
            </Content>
        </DashboardPage>
    )
};

export default Dashboard;

const DashboardPage = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-top: 56%;
`;

const SubTitle = styled.div`
  font-weight: 250;
  color: ${TextColor.tertiaryWhite};
  font-size: 180%;
  margin-top: 4%;
`;

const ActionButtons = styled.div`
  margin-top: 2.4%;
  display: flex;
  margin-right: 3%;
`;

const StyledButton = styled(Button)`
  background-color: ${ButtonColor.backgroundColor};
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    background-color: ${ButtonColor.backgroundColor}; 
    color: ${TextColor.lightWhite};
  }
`;

const KnowMoreButton = styled.div`
  margin-right: 5%;
`;

const ReachOutButton = styled.div`
  margin-left: 5%;
`;

const TextInButton = styled.span`
  font-size: 80%;
`;
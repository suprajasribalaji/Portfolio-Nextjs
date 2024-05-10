import { NextPage } from "next";
import styled from "styled-components";
import { BackgroundColor, ButtonColor, TextColor } from "../styles/theme";
import SideImg from "../public/images/reach-out.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';


const ReachOut: NextPage = () => {
    return (
        <ReachOutPage>
            <SideImage />
            <Content>
                <Title>
                    Reach out
                </Title>
                <ReachOutByMail>
                    <Name>Supraja Sri R B</Name>
                    <Email>
                        <StyledButton href="mailto:suprajasri.balaji@gmail.com">suprajasri.balaji@gmail.com</StyledButton>
                    </Email>
                </ReachOutByMail>
                <ConnectWithMe>
                    <ConnectWithMeTitle>CONNECT WITH ME</ConnectWithMeTitle>
                    <SocialMedialProfileLinks>
                        <LinkedInProfileLink>
                            <StyledButton href="https://www.linkedin.com/in/suprajasrirb/" target="_blank" rel="noopener noreferrer" ><i className="bi bi-linkedin"></i></StyledButton>
                        </LinkedInProfileLink>
                        <GithubProfileLink>
                            <StyledButton  href="https://github.com/suprajasribalaji" target="_blank" rel="noopener noreferrer" ><i className="bi bi-github"></i></StyledButton>
                        </GithubProfileLink>
                        <EmailIDLink>
                            <StyledButton  href="mailto:suprajasri.balaji@gmail.com" ><i className="bi bi-envelope"></i></StyledButton>
                        </EmailIDLink>
                    </SocialMedialProfileLinks>
                </ConnectWithMe>
            </Content>
        </ReachOutPage>
    )
};

export default ReachOut;

const ReachOutPage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${BackgroundColor.reachOutBg};
    color: ${TextColor.primaryWhite};
    display: flex;
`;

const SideImage = styled.div`
    position: relative;
    width: 27.6%;
    height: 80vh;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-image: url(${SideImg.src});

    margin-top: 5%;
    margin-left: 5.8%;
    
`;

const Content = styled.div`
    margin-top: 10%;
    margin-left: 6%;
    font-weight: bold;
    font-family: "Fira Sans", sans-serif;
`;

const Title = styled.div`
    font-size: 210%;
    margin-left: 7%;
`;

const ReachOutByMail = styled.div`
    margin-top: 45%;
`;

const Name = styled.div`
    font-size: 120%;
    margin-left: 7%;
`;

const Email = styled.div`
    margin-top: 7%;
    font-size: 86%;
    margin-left: 7.8%;
`;

const ConnectWithMe = styled.div`
    margin-top: 63%;
`;

const ConnectWithMeTitle = styled.div`
    font-size: 80%;
    margin-left: 6%;
`;

const SocialMedialProfileLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    margin-left: 7.8%;
    font-size: 190%;
`;

const LinkedInProfileLink = styled.div`
    margin-top: 2%;
`;

const GithubProfileLink = styled.div`
    margin-left: 15%;
    font-size: 112%;
`;

const EmailIDLink = styled(GithubProfileLink)``;

const StyledButton = styled.a`
  border: none;
  color: ${TextColor.primaryWhite};
  &&&:hover {
    color: ${TextColor.lightWhite};
  }
  border-radius: 1.4em;
  width: 170%;
`;
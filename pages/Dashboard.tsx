import { NextPage } from "next";
import styled from "styled-components";
import { LinearGradientColor } from "../styles/theme";
import BackgroundImage from "../public/images/home-bg-img.jpeg";

const Dashboard: NextPage = () => {
    return (
        <DashboardPage>
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
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxes,
  faPeopleCarry,
  faProjectDiagram,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Container = styled.main`
  margin-right: auto;
  height: 100%;
  background-color: #004070;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

// const ButtonSection = styled.div`
// height: 100vh;
// `

const Letter = styled.div`
  margin-left: 10px;
`;

const DashBoardSection = styled.div`
  padding-left: 20px;
  color: #cdcdcd;
  font-size: 18px;
  align-items: center;
  display: flex;
  font-weight: 600;
  cursor: pointer;
  height: 45px;
  &:hover {
    color: white;
    background-color: #fdfdfd7f;
  }
`;

const NowDashMenu = styled.div`
  padding-left: 20px;
  color: white;
  background-color: #fcfcfd49;
  font-size: 18px;
  align-items: center;
  display: flex;
  font-weight: 600;
  cursor: pointer;
  height: 45px;
`;

const MyTeam = styled.div`
  padding-left: 20px;
  height: 45px;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: #cdcdcd;
  font-size: 18px;
  margin-top: 25px;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: #fdfdfd7f;
  }
`;

const MyProfile = styled.div`
  padding-left: 20px;
  height: 45px;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: #cdcdcd;
  font-size: 18px;
  margin-top: 25px;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: #fcfcfd7f;
  }
`;

const NowMenu = styled.div`
  padding-left: 20px;
  height: 45px;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: white;
  background-color: #fcfcfd49;
  font-size: 18px;
  margin-top: 25px;
  font-weight: 600;
`;

const ICON = styled.div`
  width: 30px;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;

function DashBoardLeftMenu() {
  console.log("window.location.href", window.location.href);
  console.log(
    "window.location.href",
    window.location.href.includes("myProfile")
  );
  return (
    <Container>
      {/* <ButtonSection> */}
      {!window.location.href.includes("myProfile") &&
      !window.location.href.includes("myTeam") &&
      !window.location.href.includes("allProject") &&
      !window.location.href.includes("myProject") &&
      !window.location.href.includes("member") ? (
        <Link to="/">
          <NowDashMenu>
            <ICON>
              <FontAwesomeIcon icon={faBoxes} size="lg" />
            </ICON>
            <Letter>DASHBOARD</Letter>
          </NowDashMenu>
        </Link>
      ) : (
        <Link to="/">
          <DashBoardSection>
            <ICON>
              <FontAwesomeIcon icon={faBoxes} size="lg" />
            </ICON>
            <Letter>DASHBOARD</Letter>
          </DashBoardSection>
        </Link>
      )}

      {window.location.href.includes("myProfile") ? (
        <Link to="/myProfile">
          <NowMenu>
            <ICON>
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
            </ICON>
            <Letter>MY PROFILE</Letter>
          </NowMenu>
        </Link>
      ) : (
        <Link to="/myProfile">
          <MyProfile>
            <ICON>
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
            </ICON>
            <Letter>MY PROFILE</Letter>
          </MyProfile>
        </Link>
      )}

      {window.location.href.includes("myTeam") ||
      window.location.href.includes("myProject") ||
      window.location.href.includes("member") ? (
        <Link to="/myTeam">
          <NowMenu>
            <ICON>
              <FontAwesomeIcon icon={faPeopleCarry} size="lg" />
            </ICON>
            <Letter>MY TEAM</Letter>
          </NowMenu>
        </Link>
      ) : (
        <Link to="/myTeam">
          <MyTeam>
            <ICON>
              <FontAwesomeIcon icon={faPeopleCarry} size="lg" />
            </ICON>
            <Letter>MY TEAM</Letter>
          </MyTeam>
        </Link>
      )}

      {window.location.href.includes("allProject") ? (
        <Link to="/allProject">
          <NowMenu>
            <ICON>
              <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
            </ICON>
            <Letter>All PROJECT</Letter>
          </NowMenu>
        </Link>
      ) : (
        <Link to="/allProject">
          <MyTeam>
            <ICON>
              <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
            </ICON>
            <Letter>All PROJECT</Letter>
          </MyTeam>
        </Link>
      )}

      <Link
        to={{ pathname: "https://capstone-sait-kwangwoo.herokuapp.com/video" }}
        target="_blank"
      >
        <MyTeam>
          <ICON>
            <FontAwesomeIcon icon={faVideo} size="lg" />
          </ICON>
          <Letter>VIDEO CHAT</Letter>
        </MyTeam>
      </Link>
      {/* </ButtonSection> */}
    </Container>
  );
}

export default DashBoardLeftMenu;

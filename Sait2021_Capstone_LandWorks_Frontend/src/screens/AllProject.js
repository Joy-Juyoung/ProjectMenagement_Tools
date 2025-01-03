import styled from "styled-components";
import DashBoardHeader from "../components/DashBoardHeader";
import DashBoardLeftMenu from "../components/DashBoardLeftMenu";
import AllProjectMainContents from "./AllProjectMainContents";

const DashBoardContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const DashBoardMainBox = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
`;

function AllProject() {
  return (
    <DashBoardContainer>
      <DashBoardHeader />
      <DashBoardMainBox>
        <DashBoardLeftMenu />        
        <AllProjectMainContents></AllProjectMainContents>
      </DashBoardMainBox>
    </DashBoardContainer>
  );
}
export default AllProject;
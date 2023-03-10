import styled from "styled-components";
import arrowUp from "../assets/images/ArrowUp.png";
import arrowDown from "../assets/images/ArrowDown.png";
import { useNavigate } from "react-router-dom";

export default function LogoutButton({
  logoutClicked,
  setLogoutClicked,
  userData,
}) {
  const navigate = useNavigate();

  return (
    <>
      {logoutClicked ? (
        <>
          <Logout flex={`column`} height={`150%`} margTop={`2.5%`}>
            <ContainerLogout>
              <img
                alt="seta para cima"
                src={arrowUp}
                onClick={() => setLogoutClicked(false)}
              />
              <UserLogout
                src={userData && userData.picture}
                onClick={() => setLogoutClicked(!logoutClicked)}
              />
            </ContainerLogout>
            <LogoutButt
              onClick={async () => {
                localStorage.removeItem("Bearer");
                navigate("/");
              }}
            >
              Logout
            </LogoutButt>
          </Logout>
        </>
      ) : (
        <Logout flex={`row`} height={`100%`}>
          <img
            alt="seta para baixo"
            src={arrowDown}
            onClick={() => setLogoutClicked(true)}
          />
          <UserLogout
            src={userData && userData.picture}
            onClick={() => setLogoutClicked(!logoutClicked)}
          />
        </Logout>
      )}
    </>
  );
}

const Logout = styled.div`
  width: 10vw;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: center;
  justify-content: space-around;
  margin-right: 1%;
  margin-top: ${(props) => props.margTop};
`;

const UserLogout = styled.img`
  height: 85%;
  width: 42%;
  border-radius: 50%;
`;

const LogoutButt = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  height: 40px;
  width: 100%;
  margin-top: 4.5%;
  background-color: red;
  border-radius: 10px;
  cursor: pointer;
`;

const ContainerLogout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

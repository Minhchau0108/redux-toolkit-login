import React from "react";
import { ExportOutlined } from "@ant-design/icons";
import Flag from "../../images/flag.svg";
import { StyledWrapper } from "./index.styled";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logout());
    history.push("/login");
  };
  return (
    <StyledWrapper>
      <div>v e X e N e</div>
      <div>
        EN
        <img src={Flag} alt='' />
      </div>
      <div className='contact'>Contact us</div>
      <div onClick={handleLogout}>
        Logout
        <ExportOutlined />
      </div>
    </StyledWrapper>
  );
};

export default Navigation;

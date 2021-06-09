import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/carSlice/carSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  const handleMenu = () => {
    setBurgerStatus(!burgerStatus);
  };

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            <a href="#">{car}</a>;
          })}
        <a href="#">Model S</a>

        <a href="#">Model Y</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleMenu} />
      </RightMenu>

      {burgerStatus ? (
        <BurgerNav>
          <CloseWrapper>
            <CustomClose onClick={handleMenu} />
          </CloseWrapper>
          <li>
            <a href="#">Existing inventory</a>
          </li>
          <li>
            <a href="#">Used inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Existing inventory</a>
          </li>
          <li>
            <a href="#">Existing inventory</a>
          </li>
        </BurgerNav>
      ) : null}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display:flex:
  flex-direction: column;
  text-align: start;
  justify-content: start;
  transform: translateX(0)
  
  li{
    padding: 13px 0;

    a {
      font-weight: 500;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

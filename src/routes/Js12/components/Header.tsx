import React from "react";
import styled from "styled-components/macro";
import logo from "../img/logo.png";
import icons from "../img/icons.svg";

export default () => {
  return (
    <Header>
      <Logo src={logo} />
      <Form>
        <SearchBar type="text" placeholder="Search your recipes" />
        <SearchButton>
          {/* //PLEASE REMEMBER// it is the way how to import svg REALLY
          SUCxxxxxxxxxxxxxxx */}
          <Icons
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref={`${icons}#icon-magnifying-glass`}></use>
          </Icons>
          <span>Search</span>
        </SearchButton>
      </Form>

      {/* NOTE!!!  if you want to refer to other components, you must make sure that each relationship is father-child component*/}
      {/*"visibility:hidden" = there is still space just can't seen, "display:none" = space is also removed*/}
      <Likes>
        <LikesField>
          <LikesIcon
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <use xlinkHref={`${icons}#icon-heart`}></use>
          </LikesIcon>
        </LikesField>

        <LikesPanel>
          <LikesList>hi</LikesList>
        </LikesPanel>
      </Likes>
    </Header>
  );
};

const Header = styled.header`
  grid-area: head;
  background-color: #f9f5f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-left: 4rem;
  height: 4.5rem;
  display: block;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;
  &:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
  }
`;
const SearchBar = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.7rem;
  width: 30rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dad0cc;
  }
`;

const Button = styled.button`
  padding: 1.3rem 3rem;
  font-size: 1.4rem;
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  border-radius: 10rem;
  border: none;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(Button)``;

interface IconProps {
  xmlns: string;
  xmlnsXlink: string;
}
const Icons = styled.svg<IconProps>`
  height: 2rem;
  width: 2rem;
  fill: white;
`;

//align-self : how to modulate each component in the grid sector
//note : align-self only affects the target component

//align-self : center, strech, start, end ....
const Likes = styled.div`
  position: relative;
  align-self: stretch;
  padding: 0;
  transition: all 0.3s;
  &:hover {
    background-color: #f2efee;
  }
`;
const LikesField = styled.div`
  cursor: pointer;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  height: 100%;
`;
const LikesPanel = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 10rem;
  z-index: 10;
  padding: 2rem 0;
  width: 30rem;
  background-color: #fff;
  box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);
  transition: all 0.3s;
  ${Likes}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
const LikesIcon = styled.svg`
  fill: #f59a83;
  height: 3.5rem;
  width: 3.5rem;
`;

const LikesList = styled.ul``;
import React from "react";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import DropMenu from "../DropMenu/DropMenu";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Header = ({ show, setShow }) => {
  const classes = useStyles();
  const handleOver = () => {
    setShow(true);
  };

  const handleOut = () => {
    setShow(false);
  };
  return (
    <div>
      <header>
        <div className="header">
          <div className="header__logo__logo-img">
            <a href="/">
              <img src={logo} alt="wanted_logo" />
            </a>
          </div>
          <div className="header__navigation__menu">
            <ul className="header__navigation__items">
              <li className="header__navigation__item" onMouseOver={handleOver}>
                <a
                  href="/"
                  className="header__gnb__dropmenu header__nav__hover"
                >
                  <h4>탐색</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>커리어 성장</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>직군별 연봉</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>이력서</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>매치업</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>프리랜서</h4>
                </a>
              </li>
              <li className="header__navigation__item" onMouseOver={handleOut}>
                <a href="/" className="header__nav__hover">
                  <h4>AI 합격예측</h4>
                  <h2>Beta</h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="header__search-sign__items">
            <ul className="header__aside__items">
              <li>
                <AiOutlineSearch className="header__aside__search-svg" />
              </li>
              <li>
                <a href="/" className="header__signup__item">
                  <AiOutlineBell className="header__aside__svg" />
                  <span>N</span>
                </a>
                <a href="/" className="header__signin__item">
                  <Avatar className={classes.small}>JD</Avatar>
                  <span>N</span>
                </a>
              </li>
              <li>
                <a href="/" className="dashboardButton">
                  기업 서비스
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {show ? <DropMenu /> : null}
    </div>
  );
};

export default Header;

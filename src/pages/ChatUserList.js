import React from "react";
import "./ChatUserList.css";
import defaultAvatar from "../assets/images/default-profile.png";
import { NavLink as Link } from "react-router-dom"
import { Button } from "reactstrap"
import matt from "../assets/images/matt.png"

function ChatUserList({ myinfo }) {
  return (
    <div className="page">
      <div className="UserList">
        <div className="UserList__titlebar">
          <div className="UserList__self">
            <img
              src={defaultAvatar}
              className="UserList__titlebar__avatar"
              alt="avatar"
            />
            {/* <span className="UserList__titlebar__logged-in-as">Ridza</span> */}
          </div>
          <h4 className="UserList__title">Chats</h4>
          <div className="UserList__compose">
            <button
              className="UserList__compose__button"
            >
              <span className="hb hb-sm hex">
                <i className="far fa-edit UserList__compose__icon"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="UserList__searchbar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="search" />
        </div>
        <div className="UserList__container">
          <ul className="UserList__container__list">
            <li className="UserList__container__list__item">
              <div>
                <img
                  src={defaultAvatar}
                  className="UserList__container__list__item__avatar"
                  alt="avatar"
                />
              </div>
              <div className="UserList__container__list__item__content">
                <p className="UserList__container__list__item__content__name">
                  Kumar
              </p>
                <p className="UserList__container__list__item__content__text">
                  You: See you later at 5pm!
              </p>
              </div>
              <div className="UserList__container__list__item__time">
                10:01 AM
            </div>
            </li>
            <li className="UserList__container__list__item UserList__container__list__item--selected">
              <Button className="UserList__container__list__item__redirect" tag={Link} to="/chat">
                <div>
                  <img
                    src={matt}
                    className="UserList__container__list__item__avatar"
                    alt="avatar"
                    style={{ marginLeft: "5px" }}
                  />
                </div>
                <div className="UserList__container__list__item__content">
                  <p className="UserList__container__list__item__content__name">
                    Matthew Cross
              </p>
                  <p className="UserList__container__list__item__content__text">
                    Matthew: Not bad, how was yours?
              </p>
                </div>
                <div className="UserList__container__list__item__time">
                  9:38 AM
              </div>
              </Button>
            </li>
            <li className="UserList__container__list__item">
              <div>
                <img
                  src={defaultAvatar}
                  className="UserList__container__list__item__avatar"
                  alt="avatar"
                />
              </div>
              <div className="UserList__container__list__item__content">
                <p className="UserList__container__list__item__content__name">
                  Jordan
              </p>
                <p className="UserList__container__list__item__content__text">
                  Jordan: Nope, I am single!
              </p>
              </div>
              <div className="UserList__container__list__item__time">
                Yesterday
            </div>
            </li>
            <li className="UserList__container__list__item">
              <div>
                <img
                  src={defaultAvatar}
                  className="UserList__container__list__item__avatar"
                  alt="avatar"
                />
              </div>
              <div className="UserList__container__list__item__content">
                <p className="UserList__container__list__item__content__name">
                  Jovan
              </p>
                <p className="UserList__container__list__item__content__text">
                  Jovan: HAHA April Fool!
              </p>
              </div>
              <div className="UserList__container__list__item__time">1/4/20</div>
            </li>
            <li className="UserList__container__list__item">
              <div>
                <img
                  src={defaultAvatar}
                  className="UserList__container__list__item__avatar"
                  alt="avatar"
                />
              </div>
              <div className="UserList__container__list__item__content">
                <p className="UserList__container__list__item__content__name">
                  Melissa
              </p>
                <p className="UserList__container__list__item__content__text">
                  Melissa: Covid-19 LOCKDOWN!
              </p>
              </div>
              <div className="UserList__container__list__item__time">18/3/20</div>
            </li>
          </ul>
        </div>
        <div className="end">. . .</div>
      </div>
      {/* <Navbar /> */}
    </div>
  );
}

export default ChatUserList;

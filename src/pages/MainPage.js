import React, { useEffect } from "react";
import axios from "axios";
import styles from "./MainPage.module.css";
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";
import Hive from "../assets/images/5-hive.png";
import Image from "react-graceful-image";
import LoadingIndicator from "../components/LoadingIndicator"

const MainPage = ({ loggedUser, myinfo, setmyinfo, isLoading }) => {
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fivehive.herokuapp.com/api/v1/users/info/me",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(result => {
        setmyinfo(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error.response.data));
  }, []);

  console.log(myinfo);
  return (
    <>
      {isLoading ?
        (
          <div className={`page ${styles.page}`}>
            <div className={styles.fullPage}>
              <LoadingIndicator />
            </div>
          </div>
        )
        :
        (
          <div className={`page ${styles.page}`}>
            <div className={styles.containerTop}>
              <Button
                className={styles.backButton}
                tag={Link}
                to="/login"
              >
                <i class="fas fa-caret-left"></i>
              </Button>
              <div>
                <h4 className={styles.h4}>Welcome back, {myinfo.username}!</h4>
                <h6 style={{ color: "darkslategray", marginBottom: "40px" }}>
                  What are you looking for today?
                </h6>
              </div>
              <div className={styles.buddyAnimate}>
                <Button
                  tag={Link}
                  to="/nearby"
                  className={styles.buddyBtn}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <span className="hb hb-md">
                    <h6>BUDDY</h6>
                  </span>
                </Button>
              </div>
              <div className={styles.mentorAnimate}>
                <Button
                  tag={Link}
                  to="/mentor"
                  className={styles.mentorBtn}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <span className="hb hb-md">
                    <h6>MENTOR</h6>
                  </span>
                </Button>
              </div>
            </div>
            <div className={styles.containerBottom}>
              <Button
                className={styles.logo}
                tag={Link}
                to="/"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <Image src={Hive} className={styles.logo} />
              </Button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default MainPage;

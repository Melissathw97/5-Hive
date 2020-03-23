import React from "react";
import styles from "./MainPage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap"
import Hive from "../assets/images/5-hive.png"
import Image from "react-graceful-image"
import LoadingIndicator from "../components/LoadingIndicator"

const MainPage = ({ loggedUser, myinfo, isLoading }) => {
  return (
    <>
      {isLoading ?
        <div className="page">
          <LoadingIndicator />
        </div>
        :
        (
          <div className="page">
            <div className={styles.containerTop}>
              <Button tag={Link} to="/login" style={{
                top: "20px", left: "20px", position: "absolute", borderRadius: "50%", height: "35px", width: "35px", fontSize: "2em", display: "flex",
                paddingTop: "23px",
                alignItems: "center", justifyContent: "center", backgroundColor: "#fdbe83", border: "none", color: "slategray"
              }}>
                <p>&lt;</p>
              </Button>
              <div>
                <h4 className={styles.h4}>Welcome back, {myinfo.username}!</h4>
                <h6 style={{ color: "darkslategray", marginBottom: "40px" }}>What are you looking for today?</h6>
              </div>
              <div className={styles.buddyAnimate}>
                <Button tag={Link} to="/userprofile" className={styles.buddyBtn} style={{ backgroundColor: "transparent", border: "none" }}>
                  <span className="hb hb-md">
                    <h6>BUDDY</h6>
                  </span>
                </Button>
              </div>
              <div className={styles.mentorAnimate}>
                <Button tag={Link} to="/mentorform" className={styles.mentorBtn} style={{ backgroundColor: "transparent", border: "none" }}>
                  <span className="hb hb-md">
                    <h6>MENTOR</h6>
                  </span>
                </Button>
              </div>
            </div>
            <div className={styles.containerBottom}>
              <Button className={styles.logo} tag={Link} to="/" style={{ backgroundColor: "transparent", border: "none" }}>
                <Image src={Hive} className={styles.logo} />
              </Button>
            </div>
          </div>
        )
      }
    </>
  )
};

export default MainPage;

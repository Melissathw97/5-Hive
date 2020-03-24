import React from "react";
import NavBar from "../components/NavBar";
import {
  Col,
  Button,
  Container,
  Row,
} from "reactstrap";
import Image from "react-graceful-image";
import defaultImage from "../assets/images/default-profile.png";
import styles from "./UserProfile.module.css";
/*
// below are the variables for "users" that we fetched from API
age: 
email: 
fitness_level:
height:
preferred_workouts: 
username: 
weight: 
years_of_training: 
*/

const UserProfile = ({ users }) => {
  return (
    <div className="page">
      <Container fluid={true} style={{ marginBottom: "70px", backgroundColor: "rgba(255,255,255,0.6)" }}>
        <Row>
          {users.map((user, index) => {
            return (
              <Col key={index} xs="6" md="4">
                <Button className={styles.eachUser}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                  <div className={styles.picIcon}>
                    <Image src={defaultImage} className={styles.profilePic} />
                    <a className={styles.icon}><span className="hb hb-sm"><i class="fas fa-mars" style={{ color: "lightblue" }}></i></span></a>
                  </div>
                  <h4>{user.username}</h4>
                  <h6>{user.age}</h6>
                  <p>
                    {user.weight} kg, {user.height} cm
                  </p>
                  <hr />
                  <p>
                    <span className={styles.runningSpan}>running</span>
                    <span className={styles.pilatesSpan}>pilates</span>
                    <span className={styles.yogaSpan}>yoga</span>
                  </p>
                </Button>
                <Button className={styles.eachUser}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                  <div className={styles.picIcon}>
                    <Image src={defaultImage} className={styles.profilePic} />
                    <a className={styles.icon}><span className="hb hb-sm"><i class="fas fa-mars" style={{ color: "lightblue" }}></i></span></a>
                  </div>
                  <h4>{user.username}</h4>
                  <h6>{user.age}</h6>
                  <p>
                    {user.weight} kg, {user.height} cm
                  </p>
                  <hr />
                  <p>
                    <span className={styles.runningSpan}>running</span>
                    <span className={styles.pilatesSpan}>pilates</span>
                    <span className={styles.yogaSpan}>yoga</span>
                  </p>
                </Button>
              </Col>
            );
          })
          }
        </Row>
      </Container>
      <NavBar />
    </div>
  );
};

export default UserProfile;

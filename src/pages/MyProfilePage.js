import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  CustomInput
} from "reactstrap";
import styles from "./MyProfilePage.module.css";
import Image from "react-graceful-image";
import profilePic from "../assets/images/calcifer.png";
import axios from "axios";

const MyProfilePage = ({ loggedUser, myinfo, setmyinfo }) => {
  const [modal, setModal] = useState(false);
  const [fyle, setfyle] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fivehive.herokuapp.com/api/v1/users/info/me",
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
    })
      .then(result => {
        setmyinfo(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error.response.data));
  }, []);

  const toggle = e => {
    e.preventDefault();
    setModal(!modal);
  };

  const handlefile = e => {
    let targetFile = e.target.files[0];
    console.log(targetFile.name);
    setfyle(targetFile);

    let newImage = URL.createObjectURL(targetFile);
    setPreviewImage(newImage);
  };

  const uploadfile = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("media", fyle);
    axios({
      method: "POST",
      // change me
      url: `https://fivehive.herokuapp.com/api/v1/users/upload/${loggedUser}`,
      data: formData
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="page">
      <Container fluid={true} className={styles.fullPage}>
        <Row>
          <div className={styles.username}>
            {/* <span>username</span> */}
            <span>{myinfo.username}</span>
          </div>
        </Row>
        <Row className={styles.userInfo}>
          <Col xs="4">
            <Image src={profilePic} className={styles.profilePic} />
          </Col>
          <Col xs="8" className={styles.column}>
            <Row>
              {/* 11 */}
              {myinfo.age}
            </Row>
            <Row>
              {/* cm, kg */}
              {myinfo.height} cm, {myinfo.weight} kg
            </Row>
            <Row>
              {/* years of training */}
              {myinfo.years_of_training} years of training
            </Row>
            <Row className={styles.exerciseTags}>
              <span
                style={{
                  fontSize: "0.9em",
                  border: "2px solid #f8a456",
                  borderRadius: "10px",
                  color: "#f8a456"
                }}
              >
                jogging
              </span>
              <span
                style={{
                  fontSize: "0.9em",
                  border: "2px solid #fd9b8a",
                  borderRadius: "10px",
                  color: "#fd9b8a",
                  margin: "0 5px"
                }}
              >
                yoga
              </span>
              <span
                style={{
                  fontSize: "0.9em",
                  border: "2px solid #5ac5c5",
                  borderRadius: "10px",
                  color: "#5ac5c5"
                }}
              >
                weightlifting
              </span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Button className={styles.editBtn}>edit your profile</Button>
        </Row>
        <Row>
          <Button className={styles.addBtn} onClick={toggle}>
            add post
          </Button>
        </Row>
        <Row className={styles.container}>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
          <div className={styles.end}>. . .</div>
        </Row>
      </Container>
      <Container
        fluid={true}
        className={styles.fullPageModal}
        style={modal ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.modal}>
          <h4>Post something</h4>
          <hr />
          <Form>
            <div className={styles.previewBox}>
              {previewImage ? (
                <Image className={styles.imagePreview} src={previewImage} />
              ) : (
                  <h5 style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    Choose image to preview
                </h5>
                )}
            </div>
            <FormGroup className="w-50 mx-auto d-block">
              <CustomInput
                type="file"
                id="exampleCustomFileBrowser"
                name="customFile"
                className="mt-4"
                onChange={handlefile}
              />
            </FormGroup>
            <Button
              type="submit"
              onClick={e => {
                uploadfile(e);
              }}
              className={styles.modalBtn}
            >
              Upload
            </Button>
            <button onClick={toggle} className={styles.modalBtn}>
              Close
            </button>
          </Form>
        </div>
      </Container>
      {/* <NavBar /> */}
    </div>
  );
};

// age
// fitness level
// years of training
// preferred workouts
// weight
// height

export default MyProfilePage;

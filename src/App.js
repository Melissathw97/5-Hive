import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/css/hexagons.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import MyProfilePage from "./pages/MyProfilePage";
import UserProfile from "./pages/UserProfile";
import Challenges from "./pages/Challenges";
import UploadPage from "./pages/UploadPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MentorForm from "./components/MentorForm";
import { ChatkitProvider, TokenProvider } from "@pusher/chatkit-client-react";
import Chat from "./pages/Chat";
import ChatUserList from "./pages/ChatUserList";
import Match from "./pages/Match";

import axios from "axios";
import { Route, useHistory, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Navbar } from "reactstrap";
// import { ToastContainer, toast } from "react-toastify";
// import Image from "react-graceful-image";

const instanceLocator = "v1:us1:8d826e51-c074-43ba-a02f-7ad846b27f89";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8d826e51-c074-43ba-a02f-7ad846b27f89/token"
});

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isloggedin, setisloggedin] = useState(false); //for login-required content in subsequent pages
  const [usernameInput, setusernameInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [loggedUser, setloggedUser] = useState("");
  const [myinfo, setmyinfo] = useState({});
  const urlParams = new URLSearchParams(window.location.search);
  const userId = "ridza";
  const otherUserId = "matt";

  useEffect(() => {
    axios
      .get(`https://fivehive.herokuapp.com/api/v1/users/profile/${loggedUser}`)
      .then(result => {
        setmyinfo(result.data);
        setIsLoading(false);
        console.log("mounted");
      })
      .catch(console.log("cannot render page"));
  }, [loggedUser]);

  const handleUser = e => {
    setusernameInput(e.target.value);
  };

  const handlePassword = e => {
    setpasswordInput(e.target.value);
  };

  let history = useHistory();

  const submitlog = e => {
    e.preventDefault();
    if (usernameInput && passwordInput) {
      console.log(`username = ${usernameInput}, password=${passwordInput}`);
      axios({
        method: "POST",
        // change me
        url: "https://fivehive.herokuapp.com/api/v1/users/signin",
        data: {
          username: usernameInput,
          password: passwordInput
        }
      })
        .then(result => {
          history.push("/main");
          console.log(result.data[1]);
          showUsers(result.data[1]);
          setisloggedin(true);
          setloggedUser(result.data["user_id"]);
          localStorage.setItem("jwt", result.data["jwt"]);
          console.log(localStorage);
          console.log(localStorage["jwt"]);
        })
        .catch(error => {
          console.log("cannot leh");
        });
    }
  };

  const showUsers = id => {
    axios
      .get(`https://fivehive.herokuapp.com/api/v1/users/show/${id}`)
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1000}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginForm
                  isloggedin={isloggedin}
                  setisloggedin={setisloggedin}
                  usernameInput={usernameInput}
                  setusernameInput={usernameInput}
                  passwordInput={passwordInput}
                  setpasswordInput={setpasswordInput}
                  handleUser={handleUser}
                  handlePassword={handlePassword}
                  submitlog={submitlog}
                />
              </Route>
              <Route path="/signup">
                <SignUpForm />
              </Route>
              <Route path="/main">
                <MainPage loggedUser={loggedUser} myinfo={myinfo}
                  setmyinfo={setmyinfo} isLoading={isLoading} />
              </Route>
              <div className="navPages">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route path="/nearby">
                        <UserProfile users={users} setUsers={setUsers} />
                      </Route>
                      <Route path="/match">
                        <Match />
                      </Route>
                      <Route path="/challenges">
                        <Challenges />
                      </Route>
                      <Route path="/chat">
                        <div className="page">
                          <div className="App__chatframe">
                            <div className="App__chatwindow">
                              <ChatkitProvider
                                instanceLocator={instanceLocator}
                                tokenProvider={tokenProvider}
                                userId={userId}
                              >
                                {/* <ChatUserList userId={userId} /> */}
                                <Chat otherUserId={otherUserId} />
                              </ChatkitProvider>
                            </div>
                          </div>
                        </div>
                      </Route>
                      <Route path="/chatlist">
                        <div className="page">
                          <ChatkitProvider
                            instanceLocator={instanceLocator}
                            tokenProvider={tokenProvider}
                            userId={userId}
                          >
                            <ChatUserList userId={userId} />
                          </ChatkitProvider>
                        </div>
                      </Route>
                      <Route path="/myprofile">
                        <MyProfilePage loggedUser={loggedUser} myinfo={myinfo} setmyinfo={setmyinfo} />
                      </Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                <NavBar />
              </div>
              <Route path="/mentor">
                <MentorForm />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup >
      )
      } />
    </div >
  );
}

export default App;

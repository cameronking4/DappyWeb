import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Card, Tooltip } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram, 
  faTiktok, 
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  state = {
    value: "",
    copied: false,
    tooltipOpen: false
  };
  copyText = (e) => {
    e.preventDefault();
    console.log(e.target.copy.value);
    document.execCommand("copy", false, e.target.copy.value);
  };
 notify = () => toast("Contact Copied!");
  toggle = () => {
    this.setState({ tooltipOpen: true });
    setTimeout(
      function () {
        this.setState({ tooltipOpen: false });
      }.bind(this),
      1000
    );
  };
  render() {
    var isMobile = {
      Windows: function() {
          return /IEMobile/i.test(navigator.userAgent);
      },
      Android: function() {
          return /Android/i.test(navigator.userAgent);
      },
      BlackBerry: function() {
          return /BlackBerry/i.test(navigator.userAgent);
      },
      iOS: function() {
          return /iPhone|iPad|iPod/i.test(navigator.userAgent);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
      }
  };
  
//    const utoken = this.props.match.params.token;
    const uid = this.props.match.params.uid;
    var { users } = this.props;
    if (!users) {
      return (
        <div className="App">
          <div className="container">
            <div className="col-xs-12">
              <div
                className="text-center"
                style={{ paddingTop: "30px", paddingBottom: "30px" }}
              >
               
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ffffff",
                    borderRadius: "5px",
                    paddingBottom: "15px"
                  }}
                >
                  <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                    Loading...
                  </h2>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (!uid) {
      return (
        <div className="App">
          <div className="container">
            <div className="col-xs-12">
              <div
                className="text-center"
                style={{ paddingTop: "30px", paddingBottom: "30px" }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ffffff",
                    borderRadius: "5px",
                    paddingBottom: "15px"
                  }}
                >
                  <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                    Invalid Url
                  </h2>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }
//    const checkToken=users &&
//    users.filter((user) => {
//      return  user.token === utoken;
//    });
    const checkUid=
    users.filter((user) => {
      return user.userId === uid ;
    });
    const thisUser =users &&
    users.filter((user) => {
      return user.userId === uid;
    })[0];
//      if (!checkToken[0]) {
//      return (
//        <div className="App">
//          <div className="container">
//            <div className="col-xs-12">
//              <div
//                className="text-center"
//                style={{ paddingTop: "30px", paddingBottom: "30px" }}
//              >
//                <Card
//                  style={{
//                    backgroundColor: "transparent",
//                    border: "1px solid #ffffff",
//                    borderRadius: "5px",
//                    paddingBottom: "15px"
//                  }}
//                >
//                  <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
//                    User With This {utoken} Does Not Exist!
//                  </h2>
//                </Card>
//              </div>
//            </div>
//          </div>
//        </div>
//      );
//    }
    if (!checkUid[0]) {
      return (
        <div className="App">
          <div className="container">
            <div className="col-xs-12">
              <div
                className="text-center"
                style={{ paddingTop: "30px", paddingBottom: "30px" }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ffffff",
                    borderRadius: "5px",
                    paddingBottom: "15px"
                  }}
                >
                  <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                  User With This {uid} Does Not Exist!
                  </h2>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }


    if (!thisUser) {
      return (
        <div className="App">
          <div className="container">
            <div className="col-xs-12">
              <div
                className="text-center"
                style={{ paddingTop: "30px", paddingBottom: "30px" }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ffffff",
                    borderRadius: "5px",
                    paddingBottom: "15px"
                  }}
                >
                  <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                    User Not Found
                  </h2>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container">
          <div className="col-xs-12">
            <div
              className="text-center"
              style={{ paddingTop: "30px", paddingBottom: "30px" }}
            >
              <img
                className="backdrop linktree"
                src={thisUser.photoUrl ? thisUser.photoUrl : "/dummy-avatar.jpg"}
              />
              <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                {thisUser.firstName ? thisUser.firstName : ""} &nbsp;
                {thisUser.lastName ? thisUser.lastName : ""}
              </h2>
              <h3> {thisUser.userName ? thisUser.userName : ""}</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="col-xs-12">
              <div className="text-center">
                <div style={{ paddingBottom: "30px" }}>
                <ToastContainer />
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen}
                    target="TooltipExample"
                  >
                    Copied
                  </Tooltip>
                  <CopyToClipboard
                    text={
                      "name: " +
                      thisUser.firstName +
                      " " +
                      thisUser.lastName +
                      " phone: " +
                      thisUser.phone
                    }
                    onCopy={() => {
                      this.setState({ copied: true });
                    }}
                  >
                    <button
                      className="btn shake"
                      style={{
                        width: "80%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: 700,
                      }}
                      id="TooltipExample"
                      onClick={this.notify}
                    >
                      Copy Contact Info
                    </button>
                  </CopyToClipboard>
                </div>
                
                {thisUser.instagram &&
                <div style={{ paddingBottom: "30px" }}>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  <a
                    href={'http://instagram.com/'+ thisUser.instagram}
                    className="btn btn-outline-light"

                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600,
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  > 
                      <FontAwesomeIcon icon={faInstagram} size="1x" /> Instagram:   
                    {thisUser.instagram ? thisUser.instagram : null}
                  </a>
                </div> }

                {thisUser.facebook &&
                <div style={{ paddingBottom: "30px" }}>
                  <a
                    href={'http://facebook.com/'+ thisUser.facebook}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                      <FontAwesomeIcon icon={faFacebook} size="1x" /> Facebook: 
                    {thisUser.facebook ? thisUser.facebook : null}
                  </a>
                </div> }

                {thisUser.snapchat &&
                <div style={{ paddingBottom: "30px" }}>
                   <a
                    href={'http://facebook.com/'+ thisUser.snapchat}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                      <FontAwesomeIcon icon={faSnapchat} size="1x" /> Snapchat:  
                    {thisUser.snapchat ? thisUser.snapchat : null}
                  </a>
                </div> } 

            {thisUser.linkedin &&
                <div style={{ paddingBottom: "30px" }}>
                  <a
                    href={'http://facebook.com/'+ thisUser.linkedin}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                      <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn: 
                    {thisUser.linkedin ? thisUser.linkedin : null}
                  </a>
                </div>}

            {thisUser.twitter &&
                <div style={{ paddingBottom: "30px" }}>
                   <a
                    href={'http://twitter.com/'+ thisUser.twitter}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                      <FontAwesomeIcon icon={faTwitter} size="1x" />  Twitter:
                    {thisUser.twitter ? thisUser.twitter : null}
                  </a>
                </div>}

            {thisUser.venmo &&
                <div style={{ paddingBottom: "30px" }}>
                   <a
                    href={'http://facebook.com/'+ thisUser.venmo}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                      Venmo ID:  
                    {thisUser.venmo ? thisUser.venmo : null}
                  </a>
                </div>} 

            {thisUser.cashapp &&
                <div style={{ paddingBottom: "30px" }}>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                   <a
                    href={'http://facebook.com/'+ thisUser.cashapp}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                     CashApp ID: 
                    {thisUser.cashapp ? thisUser.cashapp : null}
                  </a>
                </div> }

            {thisUser.tiktok &&
                <div style={{ paddingBottom: "30px" }}>
                   <a
                    href={'http://facebook.com/'+ thisUser.tiktok}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                     <FontAwesomeIcon icon={faTiktok} size="1x" /> TikTok:  
                    {thisUser.tiktok ? thisUser.tiktok : null}
                  </a>
                </div> }
                
            {thisUser.website &&
                <div style={{ paddingBottom: "30px" }}>
                   <a
                    href={thisUser.website}
                    className="btn btn-outline-light"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 600, 
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  >
                    Website Link: {thisUser.website ? thisUser.website : null}  
                  </a>
                </div>}


                <div
                  style={{
                    padding: "100px",
                    paddingTop: "0px",
                    paddingBottom: "50px",
                  }}
                >
                
                    
                  <button
                    // onclick={"location.href="+isMobile.Android()?"https://play.google.com/store/apps":isMobile.iOS?"https://www.apple.com/app-store/":""}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href=isMobile.Android()?"https://play.google.com/store/apps":isMobile.iOS?"https://www.apple.com/app-store/":"/";
                      }}   type="button"
                    className="btn shake"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: 800, 
                      backgroundColor: "white", 
                      color: "black"
                    }}
                  >
                    Download the Dappy app!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ paddingBottom: "30px" }}>
            <a href="https://www.cameronking.nyc" style={{ color: "#34312f" }}>
              Copyright Dappy. All Rights Reserved.
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.Users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  firestoreConnect([{ collection: "Users" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(App);

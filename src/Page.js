import React, { useState } from "react";

import { Container, Row, Col, Button, Fade } from "reactstrap";

const Page = (props) => {
  const CardStyling = {
    margin: "20px 20%",
    boxShadow: "1px 1px 10px 5px #888888"
  };

  const Icon = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "inline",
    margin: "5px"
  };

  const cardText = {
    margin: "15px",
    textShadow: "blue 0.9px 1px"
  };

  const [LIKE, setLIKE] = useState("🤍");

  const likeupdate = () => {
    setLIKE("❤️");
  };

  return (
    <div>
      <div style={CardStyling}>
        <img
          style={Icon}
          src="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile"
        />
        <span
          style={{
            position: "relative",
            top: "-12px",
            marginLeft: "5px",
            fontWeight: "700"
          }}
        >
          BeautiFul Brandy
        </span>
        <div>
          <img
            width="100%"
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="model"
          />
        </div>

        <span onClick={likeupdate} style={{ fontSize: "20px", margin: "5px" }}>
          {LIKE}
        </span>
        <p style={cardText}>
          Nothing compares to Chilling under the Disco Lights....
        </p>
        <p style={{ margin: "20px", visibility: "hidden" }}>Blank TEXT</p>
      </div>
    </div>
  );
};

export default Page;

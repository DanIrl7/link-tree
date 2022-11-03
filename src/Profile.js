import React from "react";
import image from "./image1.jpg";

export default function Profile() {
  return (
    <div className="profile-card">
      <h1>Link Tree</h1>
      <p>Daniel Masona</p>
      <div className="profile-pic">
        {" "}
        <img src={image} alt="dp" />
      </div>
      <a
        target='"_blank"'
        href="https://twitter.com/SnoopDogg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
      >
        Twitter
      </a>
      <div id="slack">Daniel Masona</div>
    </div>
  );
}

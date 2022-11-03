import React from "react";

export default function Profile() {
  return (
    <div className="profile-card">
      <p>Daniel Masona</p>
      <div className="profile-pic"></div>
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

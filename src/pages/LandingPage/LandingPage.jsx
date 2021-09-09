import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="landingTitles">
        <span className="landingTitleSm">Connect Four / Jotto / Blackjack / & more to come</span>
        <span className="landingTitleLg">GameHub</span>
      </div>
      <hr />
<h3>GameHub is a website to play games locally with friends. <br /> Create an account to get started and choose from four games.</h3>
<ul className="gamesUList">
  <li>Connect Four</li>
  <li>Jotto</li>
  <li>Blackjack</li>
  <li>Tic Tac Toe</li>
</ul>

  <br />
      <hr />
    </div>
  );
}

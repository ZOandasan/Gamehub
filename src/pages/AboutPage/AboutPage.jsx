import "./About.css";

export default function AboutPage() {
  return (
    <div className="about">
      <h1>Meet the Team</h1>
      <div>
        <p className="p-about">
          Originating from the same cohort in <b>General Assembly</b>'s Software
          Engineer Immersive, <u>Chris</u>, <u>Zach</u>, <u>Jeremy</u>, <u>Will</u>, <u>Andy</u> and <u>Liam</u> have all
          worked together extensively on projects ranging from Full Crud Game
          tracking apps to Single Page Location tracking apps. The boys enjoy
          video games, talking about nonsense stuff, job seaching
          together, and taking long walks on the beach.
        </p>
      </div>
      <div className="about-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <br />
              <th></th>
              <br />
              <th>Contributions</th>
              <br />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">Zachary Oandasan</td>
              <br />
              &nbsp;&nbsp;&nbsp;<td>
                <a href="https://www.linkedin.com/in/zachary-oandasan/">
                  <img className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/ZOandasan">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<td>Blackjack, Tic-Tac-Toe, Jotto</td>
              <br />
            </tr>
            <tr>
              <td className="name">Christopher Burwell</td>
              <br />
              <td>
                <a href="https://www.linkedin.com/in/crburwell/">
                  <img className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/countchrisdo">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              <td>Connect-Four, Jotto</td>
              <br />
            </tr>
            <tr>
              <td className="name">Jeremy Young-Hotz</td>
              <br />
              <td>
                <a href="https://www.linkedin.com/in/jeremyyoung-hotz/">
                  <img className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/jhotz2112">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              <td>Connect-Four</td>
              <br />
            </tr>
            <tr>
              <td className="name">Andy Li</td>
              <br />
              <td>
                <a href="https://www.linkedin.com/in/andy-jia-li/">
                  <img  className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/sunsetdee">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              <td>Blackjack</td>
              <br />
            </tr>
            <tr>
              <td className="name">William Stull</td>
              <br />
              <td>
                <a href="https://www.linkedin.com/in/wsii/">
                  <img className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/stulldude">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              <td>Simon</td>
              <br />
            </tr>
            <tr>
              <td className="name">Liam Messick</td>
              <br />
              <td>
                <a href="https://www.linkedin.com/in/william-messick-a4956721a/">
                  <img className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                    alt="linkedin"
                  ></img>
                </a>
                &nbsp;&nbsp;&nbsp;<a href="https://github.com/wolflord480">
                  <img className="img"
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    alt="github"
                  ></img>
                </a>
              </td>
              <br />
              <br />
              <td>Jotto</td>
              <br />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
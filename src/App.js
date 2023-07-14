import "../src/styles/App.scss";
import "../src/styles/Normalize.scss";
import themeIcon from "./img/theme.svg";
import html from "./img/HTML.svg";
import js from "./img/js.svg";
import react from "./img/react.svg";
import ts from "./img/ts.svg";
//
import htmlpng from "./img/html.png";
import jspng from "./img/js.png";
import reactpng from "./img/react.png";
import tspng from "./img/ts.png";
import getBoundingClientRect from "react";
import projectImg from "./img/projectImg.png";
import buttonIcon from "./img/buttonIcon.svg";
import git from "./img/git.svg";
import mail from "./img/Mail.svg";
import { useRef, useEffect, useState } from "react";

import Header from "./components/Header";

import pizzaImg from "./img/reactPizza.png";
import pizzaAnimation from "./img/Animation2.gif";
import weatherAn from "./img/WeatherAn.gif";
import timerAn from "./img/TimerAn.gif";
import tetrisAn from "./img/TetrisAn.gif";
function App() {
  const downloadLinkRef = useRef(null);
  const handleDownload = () => {
    const fileUrl =
      "  https://drive.google.com/file/d/1zVw3nGxUvUMcswLpuV2xyw0a9JoyW0mK/view?usp=share_link";

    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "Timur's Resume.pdf"; // Укажите желаемое имя файла для скачивания
    downloadLink.target = "_blank";

    // Симулируем щелчок по ссылке для запуска скачивания
    downloadLink.click();
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Header handleDownload={handleDownload} setIsVisible={setIsVisible} />
      <main>
        <section className="about">
          <h4 style={{ fontWeight: "800" }}>Hey,I'm</h4>
          <h1>Timur Yeskov</h1>
          <h4>
            I'm an enthusiastic and detail-oriented Frontend Software Engineer
            seeking an entry-level position with Company to use my skills in
            coding, troubleshooting complex problems, and assisting in the
            timely completion of projects.
          </h4>
          <div style={{ display: "flex" }}>
            <a href="https://github.com/TimYeskov" target="_blank">
              {" "}
              <img src={git} style={{ width: "50px", marginRight: "20px" }} />
            </a>
            {/* <img src={mail} style={{marginRight:"20px"}}/> */}
            <a ref={downloadLinkRef} style={{ display: "none" }} />
            <button onClick={handleDownload} className="resume__btn">
              View resume
            </button>
            <h4 className="mail">timur.yeskov@gmail.com</h4>
          </div>
        </section>
        <section className="services" id="services">
          <h2>Services</h2>
          <div className="container">
            <div className="container_block">
              <div
                style={{ backgroundImage: " linear-gradient(#0C8AE5,#F328BA)" }}
              >
                <h3>UX/Usability</h3>
                <h4>
                  {" "}
                  Skill in creating user-centric designs, conducting user
                  research, prototyping and testing interfaces, optimizing
                  usability, and delivering intuitive and enjoyable experiences
                  across digital products and services.
                </h4>
              </div>
              <div
                style={{ backgroundImage: " linear-gradient(#DE1FEF,#7B0854)" }}
              >
                <h3>Responsive and cross-browser layout</h3>
                <h4>
                  Proficiency in designing and developing web layouts that adapt
                  seamlessly to different screen sizes and devices, ensuring
                  consistent functionality and visual integrity across various
                  browsers and platforms.
                </h4>
              </div>
              <div
                style={{
                  backgroundImage: " linear-gradient(#9603AE87,#06AFA5)",
                }}
              >
                <h3>Web Application Architecture Design</h3>
                <h4>
                  Experienced in designing scalable and robust web application
                  architectures that meet the specific requirements of the
                  project. Proficient in selecting suitable
                  technologies,security, and maintainability.
                </h4>
              </div>
            </div>
            <div className="container_block">
              <div
                style={{
                  backgroundImage: "  linear-gradient(#F328BA,#0C8AE5)",
                }}
              >
                <h3>Website testing and debugging</h3>
                <h4>
                  Skilled in conducting thorough testing and debugging of
                  websites to ensure optimal functionality and user
                  experience.Experienced in using debugging tools and techniques
                  to troubleshoot and resolve issues efficiently.
                </h4>
              </div>
              <div
                style={{
                  backgroundImage: " linear-gradient(#7B0854,#DE1FEF)",
                }}
              >
                <h3>Layout of web pages according to the layout</h3>
                <h4>
                  Skilled in creating well-structured and visually appealing web
                  page layouts based on provided design mockups or wireframes.
                  Proficient in organizing content, applying appropriate grid
                  systems, and maintaining consistent spacing and alignment for
                  optimal user experience.{" "}
                </h4>
              </div>
              <div
                style={{
                  backgroundImage: " linear-gradient(#06AFA5,#9603AE87)",
                }}
              >
                <h3>Written code refactoring</h3>
                <h4>
                  {" "}
                  Experienced in performing code refactoring to improve code
                  quality, readability, and maintainability.Skilled in applying
                  design patterns, modularizing code, and optimizing algorithms
                  for improved performance.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="skills" id="skills">
          <h2>Skills</h2>
          <div className="container">
            <div
              style={{ backgroundImage: `linear-gradient(#e97521,#f7f2f200)` }}
              className="skills__div"
            >
              <img
                src={html}
                style={{ position: "relative", top: "-2px", right: "1px" }}
              />
              <h3>HTML5/CSS3</h3>
              <div>
                <ul>
                  <li>
                    {" "}
                    • Attention to detail to create pixel-perfect HTML/CSS3
                    designs.
                  </li>
                  <li>
                    {" "}
                    • Effective communication and collaboration for seamless
                    HTML/CSS3 development.
                  </li>
                  <li>
                    {" "}
                    • Collaboration with UX/UI designers to ensure seamless
                    integration of HTML/CSS3 elements.
                  </li>
                  <li>
                    {" "}
                    • Time management to meet project deadlines and deliver
                    high-quality HTML/CSS3 work.
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{ backgroundImage: `linear-gradient(#e9d44d,#f7f2f200)` }}
              className="skills__div"
            >
              <img
                src={js}
                style={{ position: "relative", top: "-2px", right: "3px" }}
              />
              <h3>Javascript</h3>
              <div>
                <ul>
                  <li> • Strong problem-solving skills in JavaScript</li>
                  <li>
                    {" "}
                    • Excellent communication abilities for effective
                    collaboration.
                  </li>
                  <li>
                    {" "}
                    • Highly adaptable to changing JavaScript technologies.
                  </li>
                  <li>
                    {" "}
                    • Keen attention to detail in writing clean and error-free
                    code.
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{ backgroundImage: `linear-gradient(#5ed3f3,#f7f2f200)` }}
              className="skills__div"
            >
              <img
                src={react}
                style={{ position: "relative", top: "-2px", right: "1px" }}
              />
              <h3>React</h3>
              <div>
                <ul>
                  <li>
                    {" "}
                    •Proficient in developing scalable web applications using
                    React.
                  </li>
                  <li>
                    {" "}
                    • Strong understanding of React component lifecycle and
                    state management.
                  </li>
                  <li>
                    {" "}
                    • Agile mindset for quickly adapting to evolving React
                    frameworks and libraries.
                  </li>
                  <li>
                    {" "}
                    • Attention to detail in crafting reusable and maintainable
                    React code.
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{ backgroundImage: `linear-gradient(#2f74c0,#f7f2f200)` }}
              className="skills__div"
            >
              <img src={ts} />
              <h3>Typescript</h3>
              <div>
                <ul>
                  <li>
                    {" "}
                    • Skilled in developing robust and type-safe applications
                    using TypeScript.
                  </li>
                  <li>
                    {" "}
                    • Effective problem-solving skills for tackling complex
                    challenges in TypeScript projects.
                  </li>
                  <li>
                    {" "}
                    • Proficient in leveraging TypeScript's features to enhance
                    code quality and maintainability.
                  </li>
                  <li>
                    {" "}
                    • Strong understanding of TypeScript's static typing and
                    type inference capabilities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="projects" id="projects">
          <h2>Featured projects</h2>
          <div className="container">
            <div className="project__block">
              <div className="left-img react-pizza">
                <figure style={{ margin: "0" }}>
                  <img src={pizzaAnimation} />
                </figure>
              </div>

              <div className="block__right" id="your-element-id">
                <div>
                  <h2>React-Pizza e-commerce</h2>
                  <h3>
                    A simple and intuitive e-commerce platform built with React,
                    offering a delightful online pizza ordering experience.
                    Browse my menu, customize your favorite pizzas, and
                    conveniently place your order with ease.
                  </h3>
                  <h4>Website</h4>
                  <div className="buttons">
                    <a href="https://reactpizza.onrender.com" target="_blank">
                      <button className="work">
                        <span>View Live</span>
                        <img src={buttonIcon} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/TimYeskov/ReactPizza"
                      target="_blank"
                    >
                      <button className="work">GitHub repo</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project__block reverse">
              <div className="block__right" id="your-element-id">
                <div>
                  <h2>Weather App</h2>
                  <h3>
                    This is intuitive weather application built with React. It
                    allows users to quickly check the current weather conditions
                    and get accurate forecasts for any location. The app
                    provides a clean and user-friendly interface, making it easy
                    to navigate and find the information you need.
                  </h3>
                  <h4>App</h4>
                  <div className="buttons">
                    <a
                      href="https://weather-app-b39n.onrender.com"
                      target="_blank"
                    >
                      <button className="work">
                        <span>View Live</span>
                        <img src={buttonIcon} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/TimYeskov/Weather-app"
                      target="_blank"
                    >
                      <button className="work">
                        <span>GitHub repo</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-img weather-app">
                <figure style={{ margin: "0" }}>
                  <img src={weatherAn} />
                </figure>
              </div>
            </div>

            <div className="project__block">
              <div className="timer-img">
                <figure style={{ margin: "0" }}>
                  <img src={timerAn} />
                </figure>
                {/* <img src={timer}/> */}
              </div>
              <div className="block__right" id="your-element-id">
                <div>
                  <h2>Pomodorro Timer</h2>
                  <h3>
                    A simple and efficient Pomodoro Timer built with React. Stay
                    focused and improve productivity by breaking tasks into
                    manageable intervals. Customize work and break durations to
                    suit your needs. Get started with the React Pomodoro Timer
                    and enhance your time management skills.
                  </h3>
                  <h4>App</h4>
                  <div className="buttons">
                    <a
                      href="https://pomodoro-timer-d1bw.onrender.com"
                      target="_blank"
                    >
                      <button className="work">
                        <span>View Live</span>
                        <img src={buttonIcon} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/TimYeskov/Pomodoro-timer"
                      target="_blank"
                    >
                      <button className="work">GitHub repo</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="project__block reverse">
              <div className="block__right" id="your-element-id">
                <div>
                  <h2>Tetris</h2>
                  <h3>
                    Enjoy the timeless thrill of Tetris with this JavaScript
                    implementation. Clear lines, stack blocks, and aim for high
                    scores in this engaging and visually appealing game.
                    Experience smooth controls and nostalgic gameplay. Have fun
                    with JavaScript Tetris!
                  </h3>
                  <h4>Game</h4>
                  <div className="buttons">
                    <a
                      href="https://github.com/TimYeskov/Tetris"
                      target="_blank"
                    >
                      <button className="work">GitHub repo</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tetris-img">
                <figure style={{ margin: "0" }}>
                  <img src={tetrisAn} />
                </figure>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      {/* <footer  id='contact'>
        <h1>Get in touch</h1>
        <form class="decor">

<div class="form-inner">
<input type="text" placeholder="Username"/>
<input type="email" placeholder="Email"/>
<textarea placeholder="Сообщение..." rows="3"></textarea>
<input type="submit" value="Отправить"/>
</div>
</form>
      </footer> */}
    </div>
  );
}

export default App;

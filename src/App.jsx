import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="header">
        <div className="navBar">
          <div className="navName">
            <img className="navLogoImage" src="/Logo.png" alt="logo"></img>
          </div>
          <div className="navOptions">
            <a href="#about" className="navItem">
              About
            </a>
            <a href="#organizers" className="navItem">
              Organizers
            </a>
            <a href="#agenda" className="navItem">
              Agenda
            </a>
            <a href="#participate" className="navItem">
              Participate
            </a>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noreferrer"
              className="navItem"
            >
              Contribute a Pet Photo
            </a>
          </div>
        </div>
        <div className="headerContent">
          <div className="headerPets">
            <img className="headerPetsFrame" src="/frame.png" />

            <div className="petWrapper">
              <img className="headerPetsPet" src="/cat1.jpg" />
            </div>

            <div className="headerPetsLabel">
              <div className="petName">Yuanyuan</div>
              <div className="petTitle">by: Michael Yin</div>
            </div>
          </div>
          <div className="headerLogo">
            <img
              className="headerLogoImage"
              src="/LogoFull.png"
              alt="fulltitle"
            ></img>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="innerContent">
          <div className="about" id="about">
            <h2> Overview </h2>
            <img className="line" src="/line.png" alt="fulltitle"></img>
            <p>
              {" "}
              This meet-up aims to bring together researchers, students, and pet
              enthusiasts to explore how living with pets influences our daily
              lives and how technology can enhance these relationships. Many
              graduate students, especially those studying abroad, often turn to
              pets for companionship in the face of cultural differences or
              mental health support. <br></br>
              <br></br>Yet pets are also demanding, needing attention and
              specific care, which can clash with deep, uninterrupted academic
              work. As HCI researchers, we often design technologies primarily
              for humans, but what if we designed for both humans and pets? In
              this meet-up, we will discuss how to design for pets and human to
              enhance joint happiness and life satisfaction. We will also
              explore how to design digital or robotic pets that can provide
              meaningful emotional support to humans. We highlight how design
              and HCI thinking can support human-pet interactions, and we hope
              that participants will leave with a renewed appreciation for their
              relationship with their pets, as well as consideration of ways to
              provide their pets with an enriched environment. <br></br>
              <br></br> This gathering is also an opportunity to share personal
              stories, make new friends, and collectively imagine how
              human-computer interaction can improve the human-pet life
              experiences.
            </p>
          </div>
          <div className="organizers" id="organizers">
            <h2>Organizers</h2>
            <img className="line" src="/line.png" alt="line" />

            <div className="organizerGrid">
              {[
                {
                  name: "Michael Yin",
                  link: "https://mikeyin.xyz",
                  img: "/michael.png",
                  school: "University of British Columbia",
                },
                {
                  name: "Elise Shen",
                  link: "https://elisexinranshen.github.io/",
                  img: "/elise.png",
                  school: "University of Toronto",
                },
                {
                  name: "Angela Chiang",
                  link: "https://www.linkedin.com/in/a-hc-chiang/",
                  img: "/angela.png",
                  school: "University of British Columbia",
                },
                {
                  name: "Xinchang Huang",
                  link: "https://xincheng.me/",
                  img: "/xincheng.png",
                  school: "University of British Columbia",
                },
                {
                  name: "Preeti Vyas",
                  link: "https://www.cs.ubc.ca/~pv/",
                  img: "/preeti.png",
                  school: "University of British Columbia",
                },
                {
                  name: "Robert Xiao",
                  link: "https://www.robertxiao.ca/",
                  img: "/robert.png",
                  school: "University of British Columbia",
                },
              ].map((o) => (
                <div className="organizerCard" key={o.name}>
                  <img className="organizerPic" src={o.img} alt={o.name} />

                  <a
                    className="organizerName"
                    href={o.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {o.name}
                  </a>

                  <div className="organizerSchool">{o.school}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="agenda" id="agenda">
            <h2> Planned Agenda </h2>
            <img className="line" src="/line.png" alt="fulltitle"></img>
            <p>
              TBD once we learn more about our allotted time and location! The
              meetup will be mostly informally structured, but we will have some
              light icebreakers and a competition for prizes!{" "}
            </p>
          </div>
          <div className="participate" id="participate">
            <h2> Want to Participate? </h2>
            <img className="line" src="/line.png" alt="fulltitle"></img>
            <p>
              Anyone attending CHI 2026 can participate! To help us plan for the
              event, please fill out the interest form here.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Papa from "papaparse";

function App() {
  const [pets, setPets] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    Papa.parse("/petList.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        setPets(data);

        if (data.length > 0) {
          const rand = Math.floor(Math.random() * data.length);
          setCurrent(rand);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (pets.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % pets.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [pets]);

  const currentPet = pets[current];

  return (
    <div>
      <div className="header">
        <div className="navBar">
          <div className="navName">
            <img className="navLogoImage" src="/Logo.png" alt="logo"></img>
            <img className="navLogoImage" src="/chi2027.svg" alt="CHI 2027"></img>
          </div>
          <div className="navOptions">
            <a href="#about" className="navItem">
              About
            </a>
            <a href="#last-year" className="navItem">
              2026
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
              href="https://forms.gle/8NdHidKu19AF1oVW6"
              target="_blank"
              rel="noreferrer"
              className="navItem2"
            >
              Contribute a Photo!
            </a>
          </div>
        </div>
        <div className="headerContent">
          {currentPet && (
            <div className="headerPets">
              <img className="headerPetsFrame" src="/frame.png" />

              <div className="petWrapper">
                {pets.map((pet, idx) => (
                  <img
                    key={idx}
                    src={`/pets/${pet.File}`}
                    alt={pet.Pet}
                    className={`headerPetsPet ${
                      idx === current ? "visible" : "hidden"
                    }`}
                  />
                ))}
              </div>
              <div
                className={`headerPetsLabel`}
                key={current} 
              >
                <div className="petName fadeLabel">{currentPet.Pet}</div>
                <div className="petTitle fadeLabel">by: {currentPet.Owner}</div>
              </div>
            </div>
          )}
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
            <img className="line" src="/line.png" alt="line"></img>
            <p className="eventBadge">
              Proposed for <strong>CHI 2027</strong> &middot; May 10&ndash;14,
              2027 &middot; Pittsburgh, PA, USA
            </p>
            <p>
              The <strong>2nd Annual</strong> Human-CAT Interaction Meet-up
              brings together researchers, students, and pet enthusiasts to
              explore how living with pets (of any kind!) shapes our daily lives,
              and how technology can support relationships between humans and
              pets. This year, we focus on technologies for shared activities,
              care, communication, and wellbeing across physical, robotic, and
              digital pets, including emerging technologies such as virtual
              reality and generative AI.
              <br></br>
              <br></br>
              Designing for pets raises questions that differ from designing for
              humans alone. How can technology account for the needs,
              preferences, and agency of both humans and animals? When should it
              mediate a human-pet relationship, and when might it interfere? How
              can systems support shared experiences while attending to animal
              welfare?
              <br></br>
              <br></br>
              The meet-up is an open, drop-in event: come for ten minutes or the
              whole session, share your pet stories, make new friends, and help
              us build a growing public record of design opportunities for
              human-pet technology.
            </p>
          </div>
          <div className="lastYear" id="last-year">
            <h2> Last Year at CHI 2026 </h2>
            <img className="line" src="/line.png" alt="line"></img>
            <p>
              The 1st Human-CAT Interaction Meet-up was a great success, with
              60&ndash;70 attendees, roughly double what we expected! Ideas that
              came up during and after the discussions included:
            </p>
            <ul className="ideaList">
              <li>Co-play across humans and pets, including play across physical distance</li>
              <li>Unobtrusive sensing for everyday pet health</li>
              <li>Interfaces giving pets more agency over doors, feeders, and spaces</li>
              <li>Technologies supporting memorialization after a pet&apos;s death</li>
            </ul>
            <p>
              Because people kept arriving and leaving throughout the session,
              this year&apos;s meet-up runs as parallel, drop-in stations, so you
              can join at any point.
            </p>
          </div>
          <div className="organizers" id="organizers">
            <h2>Organizers</h2>
            <img className="line" src="/line.png" alt="line" />
            <img
              className="organizerPets"
              src="/organizer-pets.jpg"
              alt="A collage of the organizers' pets: a white long-haired cat, a white Bichon Frise dog, a seal-point cat, a chicken, a tabby cat in a tree wearing a pink harness, and a virtual frog from the game Travel Frog."
            />
            <p className="caption">
              Our organizers&apos; pets, physical and digital.
            </p>

            <div className="organizerGrid">
              {[
                {
                  name: "Elise Shen",
                  link: "https://elisexinranshen.github.io/",
                  img: "/elise.png",
                  school: "University of Toronto",
                },
                {
                  name: "Michael Yin",
                  link: "https://mikeyin.xyz",
                  img: "/michael.jpg",
                  school: "University of British Columbia",
                },
                {
                  name: "Hye-Young Jo",
                  link: "https://hyeyoungjo.com",
                  img: "/hyeyoung.jpg",
                  school: "University of Colorado Boulder",
                },
                {
                  name: "Xincheng Huang",
                  link: "https://xincheng.me/",
                  img: "/xincheng.jpeg",
                  school: "University of British Columbia",
                },
                {
                  name: "Samuel Rhys Cox",
                  link: "https://www.samcox.eu/",
                  img: "/sam.jpg",
                  school: "Aalborg University",
                },
                {
                  name: "Robert Xiao",
                  link: "https://www.robertxiao.ca/",
                  img: "/robert.jpg",
                  school: "University of British Columbia",
                },
              ].map((o) => (
                <div className="organizerCard" key={o.name}>
                  <img className="organizerPic" src={o.img} alt={o.name} />

                  {o.link ? (
                    <a
                      className="organizerName"
                      href={o.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {o.name}
                    </a>
                  ) : (
                    <span className="organizerName">{o.name}</span>
                  )}

                  <div className="organizerSchool">{o.school}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="agenda" id="agenda">
            <h2> Planned Agenda </h2>
            <img className="line" src="/line.png" alt="line"></img>
            <p>
              Stations run in parallel for the full 90 minutes, so you can join
              or leave at any point. No preparation needed!
            </p>
            <div className="activityGrid">
              {[
                {
                  title: "Welcome & networking",
                  timing: "Continuous",
                  text: "Organizers greet arrivals, hand out prompt cards with conversation starters, and introduce newcomers to a group.",
                },
                {
                  title: "Pet gallery & stickers",
                  timing: "Continuous",
                  text: "Submit your pet via a QR code to join the projected gallery, and get a printed CHI 2027 sticker of your pet within minutes.",
                },
                {
                  title: "Design wall",
                  timing: "Continuous",
                  text: "Draw or write ideas for pet technologies on cards, post them on the wall, and respond to others' ideas. We publish the wall here afterwards.",
                },
                {
                  title: "Round-ups",
                  timing: "45 & 75 min",
                  text: "At the midpoint, we read out ideas and responses. In the final 15 minutes, everyone dot-votes and we award small prizes!",
                },
              ].map((a) => (
                <div className="activityCard" key={a.title}>
                  <div className="activityTiming">{a.timing}</div>
                  <div className="activityTitle">{a.title}</div>
                  <div className="activityText">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="participate" id="participate">
            <h2> Want to Participate? </h2>
            <img className="line" src="/line.png" alt="line"></img>
            <p>
              Anyone attending CHI 2027 can participate, with or without a pet!
              Before the meet-up, you can{" "}
              <a
                href="https://forms.gle/8NdHidKu19AF1oVW6"
                target="_blank"
                rel="noreferrer"
              >
                contribute a photo
              </a>{" "}
              of your pet (physical, digital, or robotic), a short account of an
              activity you share with them, and a technology you wish you had.
              Submitted pets appear on our rolling display during the session.
              This is entirely optional.
              <br></br>
              <br></br>
              Questions or accessibility needs? Email us at{" "}
              <a href="mailto:humancatinteractionmeetup@gmail.com">
                humancatinteractionmeetup@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

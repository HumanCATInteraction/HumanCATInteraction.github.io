import { useState, useEffect } from "react";
import "./App.css";
import Papa from "papaparse";

const PHOTO_FORM = "https://forms.gle/8NdHidKu19AF1oVW6";
const CONTACT = "humancatinteractionmeetup@gmail.com";

const ORGANIZERS = [
  { name: "Elise Shen", link: "https://elisexinranshen.github.io/", img: "/elise.png", school: "University of Toronto" },
  { name: "Michael Yin", link: "https://mikeyin.xyz", img: "/michael.jpg", school: "University of British Columbia" },
  { name: "Hye-Young Jo", link: "https://hyeyoungjo.com", img: "/hyeyoung.jpg", school: "University of Colorado Boulder" },
  { name: "Xincheng Huang", link: "https://xincheng.me/", img: "/xincheng.jpeg", school: "University of British Columbia" },
  { name: "Samuel Rhys Cox", link: "https://www.samcox.eu/", img: "/sam.jpg", school: "Aalborg University" },
  { name: "Robert Xiao", link: "https://www.robertxiao.ca/", img: "/robert.jpg", school: "University of British Columbia" },
];

const ACTIVITIES = [
  {
    title: "Welcome & networking",
    timing: "Continuous",
    text: "Organizers greet arrivals, hand out prompt cards with conversation starters, and introduce newcomers to a group.",
  },
  {
    title: "Pet gallery & stickers",
    timing: "Continuous",
    text: "Submit your pet via a QR code to join the projected gallery, and get a printed sticker with the CHI 2027 logo within minutes.",
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
];

const IDEAS = [
  "Co-play across humans and pets, including play across physical distance",
  "Unobtrusive sensing for everyday pet health",
  "Interfaces giving pets more agency over doors, feeders, and spaces",
  "Technologies supporting memorialization after a pet's death",
];

function Gallery() {
  const [pets, setPets] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    Papa.parse("/petList.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setPets(result.data);
        setCurrent(Math.floor(Math.random() * result.data.length));
      },
    });
  }, []);

  useEffect(() => {
    if (pets.length === 0) return;
    const interval = setInterval(() => setCurrent((c) => (c + 1) % pets.length), 5000);
    return () => clearInterval(interval);
  }, [pets]);

  const pet = pets[current];
  if (!pet) return null;

  return (
    <figure className="gallery">
      <div className="galleryPhoto">
        {pets.map((p, idx) => (
          <img
            key={p.File}
            src={`/pets/${p.File.trim()}`}
            alt={p.Pet}
            className={idx === current ? "visible" : ""}
          />
        ))}
      </div>
      <figcaption key={current}>
        <strong>{pet.Pet}</strong> by {pet.Owner}
        <span className="galleryNote">From the CHI 2026 pet gallery</span>
      </figcaption>
    </figure>
  );
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="navLogos">
            <img src="/Logo.png" alt="Human-CAT logo" />
            <img src="/chi2027.svg" alt="CHI 2027, May 10-14, Pittsburgh" />
          </div>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#last-year">2026</a>
            <a href="#organizers">Organizers</a>
            <a href="#agenda">Agenda</a>
            <a href="#participate">Participate</a>
          </div>
          <a className="button small" href={PHOTO_FORM} target="_blank" rel="noreferrer">
            Contribute a Photo!
          </a>
        </nav>

        <div className="heroBody">
          <video
            className="heroVideo"
            src="/hero.mp4"
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Human-CAT (Connection, Animals, Technology) Interaction Meet-Up, with the organizers' pets peeking over the title"
          />
          <p className="kicker">The 2nd Annual</p>
          <p className="eventLine">
            Proposed for <strong>CHI 2027</strong> · May 10–14, 2027 · Pittsburgh, PA, USA
          </p>
        </div>

      </header>

      <main>
        <section id="about" className="section">
          <h2>Overview</h2>
          <div className="prose">
            <p>
              The <strong>2nd Annual</strong> Human-CAT Interaction Meet-up brings together
              researchers, students, and pet enthusiasts to explore how living with pets (of any
              kind!) shapes our daily lives, and how technology can support relationships between
              humans and pets. This year, we focus on technologies for shared activities, care,
              communication, and wellbeing across physical, robotic, and digital pets, including
              emerging technologies such as virtual reality and generative AI.
            </p>
            <p>
              Designing for pets raises questions that differ from designing for humans alone. How
              can technology account for the needs, preferences, and agency of both humans and
              animals? When should it mediate a human-pet relationship, and when might it interfere?
              How can systems support shared experiences while attending to animal welfare?
            </p>
            <p>
              The meet-up is open and drop-in: share your pet stories, make new friends, and help us
              build a growing public record of design opportunities for human-pet technology.
            </p>
          </div>
        </section>

        <section id="last-year" className="section">
          <h2>Last Year at CHI 2026</h2>
          <div className="lastYear">
            <div className="prose">
              <p>
                The 1st Human-CAT Interaction Meet-up was a great success, with{" "}
                <strong>60–70 attendees</strong>, roughly double what we expected! Ideas we drew from
                the discussions, during and after the event, included:
              </p>
              <ul className="ideas">
                {IDEAS.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
              <p>
                Because people kept arriving and leaving throughout the session, this year we replace
                the fixed schedule with parallel stations.
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        <section id="organizers" className="section">
          <h2>Organizers</h2>
          <figure className="organizerPets">
            <img
              src="/organizer-pets.jpg"
              alt="A collage of the organizers' pets: a white long-haired cat, a white Bichon Frise dog, a seal-point cat, a chicken, a tabby cat in a tree wearing a pink harness, and a virtual frog from the game Travel Frog."
            />
            <figcaption>Our organizers' pets, physical and digital.</figcaption>
          </figure>
          <div className="organizerGrid">
            {ORGANIZERS.map((o) => (
              <a className="organizer" key={o.name} href={o.link} target="_blank" rel="noreferrer">
                <img src={o.img} alt="" />
                <span className="organizerName">{o.name}</span>
                <span className="organizerSchool">{o.school}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="agenda" className="section">
          <h2>Planned Agenda</h2>
          <p className="lead">
            Stations run in parallel for the full 90 minutes, so you can join or leave at any point.
            No preparation needed!
          </p>
          <div className="activityGrid">
            {ACTIVITIES.map((a) => (
              <div className="activity" key={a.title}>
                <span className="activityTiming">{a.timing}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="participate" className="section">
          <div className="participate">
            <h2>Want to Participate?</h2>
            <p>
              Anyone attending CHI 2027 can participate, with or without a pet! Before the meet-up,
              you can contribute a photo of your pet (physical, digital, or robotic), a short account
              of an activity you share with them, and a technology you wish you had. Submitted pets
              appear on our rolling display during the session. This is entirely optional.
            </p>
            <div className="participateActions">
              <a className="button" href={PHOTO_FORM} target="_blank" rel="noreferrer">
                Contribute a photo
              </a>
              <a className="button ghost" href={`mailto:${CONTACT}`}>
                {CONTACT}
              </a>
            </div>
            <p className="small">Questions or accessibility needs? Email us anytime.</p>
          </div>
        </section>
      </main>

      <footer className="footer">Human-CAT Interaction Meet-Up · CHI 2027 · Pittsburgh</footer>
    </div>
  );
}

export default App;

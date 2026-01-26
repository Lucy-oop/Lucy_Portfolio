import React, { useState } from "react";
import "./Projects.css";
import Name from "./Name";

// ✅ images (reuse safely)
import momKitchen from "./mini/momkitchen.png";
import kfcImg from "./mini/kfc.png";
import ecommerceImg from "./mini/ecommerce.png";
import myFlixImg from "./mini/myflix.png";
import trinkoraImg from "./mini/trinkora.png";
import chatBotImg from "./mini/chatbot.png";
import kpopImg from "./mini/kpopdemon.png";
import quizImg from "./mini/quiz.png";
import toastImg from "./mini/toast-notibar.png";
import todoImg from "./mini/todolist.png";
import noteImg from "./mini/note.png";
import ageImg from "./mini/agecalculator.png";
import calculatorImg from "./mini/calculator.png";
import chefHotelImg from "./mini/chefshotel.png";
import zenniferImg from "./mini/zennifer.png";
import fashionStoreImg from "./mini/fashionstore.png";
import moveItImg from "./mini/moveit.png";
import tinDogImg from "./mini/tindog.png";
import jennieImg from "./mini/jennie.png";
import digitalClockImg from "./mini/digitalclock.png";
import restaurantImg from "./mini/restaurant.png";
import dragDropImg from "./mini/drag&drop.png";
import drumKitImg from "./mini/drumkit.png";
import loginScreenImg from "./mini/loginscreen.png";
import designAgencyImg from "./mini/designagency.png";
import memoryMatchingImg from "./mini/memorymatching.png";
import guessTheNumberImg from "./mini/numberguessing.png";
import snakeGameImg from "./mini/snakegame.png";
import diceGameImg from "./mini/dicegame.png";


const projects = [
    {
    title: "TrinKora Clothing",
    href: "https://lucy-oop.github.io/TRINKORAClothing/",
    info: "React",
    responsive: true,
    img: trinkoraImg,
  },
  {
    title: "Mom’s Kitchen",
    href: "https://lucy-oop.github.io/mom-skitchen/",
    info: "React",
    responsive: true,
    img: momKitchen,
  },
  {
    title: "KFC Website",
    href: "https://lucy-oop.github.io/KFC-L/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: kfcImg,
  },
  {
    title: "Ecommerce Project (TS)",
    href: "https://lucy-oop.github.io/Ecommerce-project-ts/",
    info: "TypeScript",
    responsive: true,
    img: ecommerceImg,
  },
  {
    title: "MyFlix",
    href: "https://lucy-oop.github.io/myFlix-L/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: myFlixImg,
  },
  {
    title: "Chatbot Project",
    href: "https://lucy-oop.github.io/Chatbot-project/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: chatBotImg,
  },
  {
    title: "K-Pop Demon Hunter",
    href: "https://lucy-oop.github.io/K-pop-Demon-Hunter/",
    info: "HTML, CSS",
    responsive: true,
    img: kpopImg,
  },
  {
    title: "Quiz About Lucy",
    href: "https://lucy-oop.github.io/Quiz-about-Lucy/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: quizImg,
  },
  {
    title: "Calculator",
    href: "https://lucy-oop.github.io/Calculator-/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: calculatorImg,
  },
  {
    title: "Chef’s Hotel",
    href: "https://lucy-oop.github.io/Chef-s-Hotel/",
    info: "HTML, CSS",
    responsive: true,
    img: chefHotelImg,
  },
  {
    title: "Zennifer Freelance App",
    href: "https://lucy-oop.github.io/Zennifer-Freelance-App/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: zenniferImg,
  },
  {
    title: "Fashion Store",
    href: "https://lucy-oop.github.io/Fashion-Store/",
    info: "HTML, CSS",
    responsive: true,
    img: fashionStoreImg,
  },
  {
    title: "Move It",
    href: "https://lucy-oop.github.io/Move-It-/",
    info: "HTML, CSS",
    responsive: true,
    img: moveItImg,
  },
  {
    title: "TinDog Project",
    href: "https://lucy-oop.github.io/TinDog-Project/",
    info: "HTML, CSS",
    responsive: true,
    img: tinDogImg,
  },
  {
    title: "Jennie Show",
    href: "https://lucy-oop.github.io/Jennie-Show/",
    info: "HTML, CSS",
    responsive: true,
    img: jennieImg,
  },
  {
    title: "Digital Clock",
    href: "https://lucy-oop.github.io/Digital-Clock/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: digitalClockImg,
  },
  {
    title: "Note App",
    href: "https://lucy-oop.github.io/Note-App/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: noteImg,
  },
  {
    title: "Lucy Restaurant App",
    href: "https://lucy-oop.github.io/Lucy-Restaurant-App/",
    info: "HTML, CSS",
    responsive: true,
    img: restaurantImg,
  },
  {
    title: "To-Do List",
    href: "https://lucy-oop.github.io/To-Do-List-L/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: todoImg,
  },
  {
    title: "Drag & Drop",
    href: "https://lucy-oop.github.io/Drag-Drop/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: dragDropImg,
  },
  {
    title: "Drum Kit Game",
    href: "https://lucy-oop.github.io/Drum-Kit-Game/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: drumKitImg,
  },
  {
    title: "Login Screen",
    href: "https://lucy-oop.github.io/Login-Screen/",
    info: "HTML, CSS",
    responsive: true,
    img: loginScreenImg,
  },
  {
    title: "Toast Notification Bar",
    href: "https://lucy-oop.github.io/Toast-Noti-Bar/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: toastImg,
  },
  {
    title: "Design Agency",
    href: "https://lucy-oop.github.io/Basic-Design-Agency/",
    info: "HTML, CSS",
    responsive: true,
    img: designAgencyImg,
  },
  {
    title: "Age Calculator",
    href: "https://lucy-oop.github.io/Age-Calculator/",
    info: "HTML, CSS, JS",
    responsive: true,
    img: ageImg,
  },
  {
  title: "Memory Matching Game",
  href: "https://lucy-oop.github.io/MemoryMatchingGame/",
  info: "HTML, CSS, JS",
  responsive: true,
  img: memoryMatchingImg,
},
{
  title: "Number Guessing Game",
  href: "https://lucy-oop.github.io/Number-Guessing-Game/",
  info: "HTML, CSS, JS",
  responsive: true,
  img: guessTheNumberImg,
},
{
  title: "Running Snake Game",
  href: "https://lucy-oop.github.io/Running-Snake-Game/",
  info: "HTML, CSS, JS",
  responsive: true,
  img: snakeGameImg,
},
{
  title: "Dice Game",
  href: "https://lucy-oop.github.io/Dice-Game/",
  info: "HTML, CSS, JS",
  responsive: true,
  img: diceGameImg,
},
];

export default function Projects() {
  const [preview, setPreview] = useState(null);

  return (
    <div className="project-container">
      <Name />

      <div className={`cornerPreview ${preview ? "show" : ""}`}>
        {preview && <img src={preview} alt="Project preview" />}
      </div>

      <div className="allproject">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <a
              href={p.href}
              className="pname"
              data-text={p.title}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setPreview(p.img)}
              onMouseLeave={() => setPreview(null)}
              onFocus={() => setPreview(p.img)}
              onBlur={() => setPreview(null)}
            >
         {p.title}
            </a>

            <p className="p-info">
              {p.info}
              {p.responsive && <span>[Responsive]</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

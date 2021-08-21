import React from "react";
import Navbar from "../components/Navbar";
import { HomeWrapper, HomeContainer, HomeInfo, HomeCardList, HomeCard } from "./styles";

import Computer from "../assets/computer.svg";
import Footer from "../components/Footer";

const cards = [
  {
    icon: "",
    text: "Choose a module of any of the programs below",
  },
  {
    icon: "",
    text: "Complete the questionnaire of the module",
  },
  {
    icon: "",
    text: "Get the relevant information in the module report ",
  },
];

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeContainer>
        <HomeInfo>
          <h1>Let's get started</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero consectetur in impedit necessitatibus magnam. Libero
            molestiae quaerat dolorem, eveniet ratione quod aut amet harum autem? Iure sapiente earum odio.
          </p>
          <div className="link">
            <a href="www.google.com">Learn more</a>
          </div>
        </HomeInfo>
        <HomeCardList>
          {cards.map((card, i) => (
            <HomeCard key={i} height={i % 2 === 0 ? "500px" : undefined}>
              <div className="index-round">
                <h2>{i + 1}</h2>
              </div>
              <p>{card.text}</p>
            </HomeCard>
          ))}
        </HomeCardList>
      </HomeContainer>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;

import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-sizing: 
  justify-content: space-between;
  height: 90vh;
  transition: height 1s;
  background-color: #506496;
  border: solid 7px #1f2537;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  overflow: scroll;
  color: white;
  font-size: 18px;
  h1{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      margin-bottom: 0px;
      color: white;
  }
  a{
    color: #ffd3b6;
    text-decoration: none;
  }
  p{
  }
  button {
    padding: 10px;
    font-size: 18px;
    margin: auto;
    display: flex;
    border-radius: 5px;
    border: none;
  }
`;
const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
`;
const TryButton = styled.button`
  background-color: white;
  height: 50px;
  justify-content: center;
  align-items: center;
  a {
    color: black;
  }
`;
const BackButton = styled.button`
  background-color: white;
  width: 50px;
  height: 50px;
  font-size: 25px !important;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <div className="block center mt-10px mb-10px">
        <a href="https://www.tomlum.com/">
          <img
            src="https://s3.us-east-2.amazonaws.com/tomlum/logo-white.png"
            alt="Tom Lum Logo"
            height="70"
            width="70"
          />
        </a>

        <a href="https://twitter.com/tomlumperson">
          <img
            src="https://s3.us-east-2.amazonaws.com/tomlum/bird-white.png"
            alt="Twitter"
            height="70"
            width="70"
          />
        </a>
      </div>

      <div className="row justify-center align-center">
        <div className="flex1">
        <Link to="/" className="flex5 mauto">
          <BackButton className="flex1">
            <b>{`<`}</b>
            </BackButton>
            </Link>
        </div>
        <Link to="/" className="flex5 mauto">
          <h1>Wallet Simulator</h1>
        </Link>
        <div className="flex1"></div>
      </div>
      <AboutContent>
        <p>
          Study after study have shown that {` `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nytimes.com/2016/03/27/your-money/credit-cards-encourages-extra-spending-as-the-cash-habit-fades-away.html"
          >
            <b>spending real, physical money reduces overall spending.</b>
          </a>{" "}
        </p>
        <p>
          <b>Wallet Simulator</b> is an attempt at a middle ground between the
          convenience of digital payment and the frugality of physical cash.
        </p>
        <p>
          Withdraw simulated dollars for however much you want to budget for
          your week, month, trip, and then spend it on Wallet Simulator before
          you make that easy apple pay purchase. This reminds you of how much
          you're really about to spend, and how much you've already been
          spending.
        </p>
        <TryButton>
          <a href="/">
            <Link to="/">
              <b>Try it Now!</b>
            </Link>
          </a>
        </TryButton>
        <p>
          Wallet simulator doesn't store any of your data, in fact you can use
          it offline or as a{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1"
          >
            <b>progressive web app</b>.
          </a>
        </p>
        <p>
          I also want to be crystal clear on one thing: most of our financial
          woes stem not from spending too much on coffee or avocadoes, but from
          legsilative and systemic issues, such as the fact that{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.washingtonpost.com/news/wonk/wp/2017/12/29/the-u-s-has-one-of-the-stingiest-minimum-wage-policies-of-any-wealthy-nation/"
          >
            <b>minimum wages in the U.S. peaked in 1968</b>
          </a>{" "}
          or the fact that{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pewsocialtrends.org/2020/01/09/trends-in-income-and-wealth-inequality/"
          >
            <b>wealth inequality has skyrocketed </b>
          </a>
          or the fact that the U.S. spends{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.commonwealthfund.org/publications/issue-briefs/2020/jan/us-health-care-global-perspective-2019"
          >
            <b>
              twice as much as most developed nations on health care, despite
              having the lowest life expectancy, and despite our healthcare
              still not being free.
            </b>
          </a>
        </p>
        <p>
          So while I hope Wallet Simulator will help you be more
          money-conscious, I don't want the takeaway to be that frugality and
          personal finance are a moral failing. Don't put all the blame on
          yourself!
        </p>
        <br />
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

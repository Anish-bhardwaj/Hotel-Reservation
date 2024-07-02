import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);
 /*useEffect(() => {
    if (play) {
      setCountdown(10);
      setWin("");

      // Pick four random colors
      const shuffledColors = colors.sort(() => 0.5 - Math.random());
      const selectedColors = shuffledColors.slice(0, 4);
      const sidesWithColors = [
        { side: 'top', color: selectedColors[0].hex },
        { side: 'right', color: selectedColors[1].hex },
        { side: 'bottom', color: selectedColors[2].hex },
        { side: 'left', color: selectedColors[3].hex },
      ];
      setSides(sidesWithColors);

      // Randomly pick one of the selected sides as the target
      const randomSide = sidesWithColors[Math.floor(Math.random() * sidesWithColors.length)];
      setTargetSide(randomSide.side);

      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            setWin('Time\'s up! You lose.');
            setPlay(false);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [play]);*/
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;

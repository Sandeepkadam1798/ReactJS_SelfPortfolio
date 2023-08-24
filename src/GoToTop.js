import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn shadow-xl " onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon " />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  .top-btn:hover{
    background:#ff014f;
    
  }

  .top-btn--icon:hover{
    color:white;
    
  }
  .top-btn:hover{
    color:white;
    
  }


  .top-btn {
    
    font-size: 20px;
    width: 50px;
    height: 50px;
    color: #ff014f;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 20px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: " linear-gradient(90deg, rgba(228,234,237,1) 0%, rgba(236,240,242,1) 50%, rgba(239,242,244,1) 100%) ";
    

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  }
`;

export default GoToTop;
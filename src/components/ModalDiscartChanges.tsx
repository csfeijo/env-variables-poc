import React from 'react';
import { FunctionComponent, useEffect } from "react";
import "./ModalDiscartChanges.css";

type ModalDiscartChangesType = {
  onClose?: () => void;
};

const ModalDiscartChanges: FunctionComponent<ModalDiscartChangesType> = ({
  onClose,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="modaldiscartchanges" data-animate-on-scroll>
      <button className="iconlink13">
        <img className="close-icon2" alt="" src="/close2.svg" />
      </button>
      <div className="texts2">
        <div className="text4">Discart changes</div>
        <div className="text5">Your sets will be not saved before exit</div>
      </div>
      <div className="button-group2">
        <button className="button4" onClick={onClose}>
          <div className="label4">Cancel</div>
        </button>
        <button className="button5">
          <div className="label5">Discart</div>
        </button>
      </div>
    </div>
  );
};

export default ModalDiscartChanges;

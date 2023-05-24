import React from 'react';
import { FunctionComponent, useEffect } from "react";
import "./ModalRemoveVariable.css";

type ModalRemoveVariableType = {
  onClose?: () => void;
};

const ModalRemoveVariable: FunctionComponent<ModalRemoveVariableType> = ({
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
    <div className="modalremovevariable" data-animate-on-scroll>
      <button className="iconlink11">
        <img className="close-icon" alt="" src="/close.svg" />
      </button>
      <div className="texts">
        <div className="text">Remove variable from set</div>
        <div className="text1">You cannot use this variable anymore</div>
      </div>
      <div className="button-group">
        <button className="button" onClick={onClose}>
          <div className="label">Cancel</div>
        </button>
        <button className="button1">
          <div className="label1">Remove</div>
        </button>
      </div>
    </div>
  );
};

export default ModalRemoveVariable;

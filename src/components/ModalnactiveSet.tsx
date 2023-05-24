import React from 'react';
import { FunctionComponent, useEffect } from "react";
import "./ModalnactiveSet.css";

type ModalnactiveSetType = {
  onClose?: () => void;
};

const ModalnactiveSet: FunctionComponent<ModalnactiveSetType> = ({
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
    <div className="modalnactiveset" data-animate-on-scroll>
      <button className="iconlink12">
        <img className="close-icon1" alt="" src="/close1.svg" />
      </button>
      <div className="texts1">
        <div className="text2">Inactive set?</div>
        <div className="text3">You can reactive ”Global Variables” anytime</div>
      </div>
      <div className="button-group1">
        <button className="button2" onClick={onClose}>
          <div className="label2">Cancel</div>
        </button>
        <button className="button3">
          <div className="label3">Action</div>
        </button>
      </div>
    </div>
  );
};

export default ModalnactiveSet;

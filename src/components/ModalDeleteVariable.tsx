import React from 'react';
import { FunctionComponent, useEffect } from "react";
import "./ModalDeleteVariable.css";

type ModalDeleteVariableType = {
  onClose?: () => void;
};

const ModalDeleteVariable: FunctionComponent<ModalDeleteVariableType> = ({
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
    <div className="modaldeletevariable" data-animate-on-scroll>
      <button className="iconlink14" onClick={onClose}>
        <img className="close-icon3" alt="" src="/close3.svg" />
      </button>
      <div className="texts3">
        <div className="text6">
          Delete “Example of Environment” set of variables?
        </div>
        <div className="text7">You cannot use this set anymore</div>
      </div>
      <div className="button-group3">
        <button className="button6" onClick={onClose}>
          <div className="label6">Cancel</div>
        </button>
        <button className="button7">
          <div className="label7">Delete</div>
        </button>
      </div>
    </div>
  );
};

export default ModalDeleteVariable;

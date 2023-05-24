import React from 'react';
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SubHeader.css";

type SubHeaderType = {
  title?: string;
};

const SubHeader: FunctionComponent<SubHeaderType> = ({
  title = "Pagename",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/new");
  }, [navigate]);

  return (
    <div className="subheader">
      <div className="title1">
        <h1 className="title2">{title}</h1>
        <div className="tag1">
          <img className="icon6" alt="" src="/icon.svg" />
          <b className="label21">Tag</b>
        </div>
      </div>
      <button className="button11" onClick={onButtonClick}>
        <div className="label22">Add variable set</div>
      </button>
    </div>
  );
};

export default SubHeader;

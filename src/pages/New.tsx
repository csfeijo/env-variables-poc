import React from 'react';
import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import ModalRemoveVariable from "../components/ModalRemoveVariable";
import PortalPopup from "../components/PortalPopup";
import ModalnactiveSet from "../components/ModalnactiveSet";
import ModalDiscartChanges from "../components/ModalDiscartChanges";
import { useNavigate } from "react-router-dom";
import "./New.css";
const New: FunctionComponent = () => {
  const [isModalRemoveVariablePopupOpen, setModalRemoveVariablePopupOpen] =
    useState(false);
  const [isModalnactiveSetPopupOpen, setModalnactiveSetPopupOpen] =
    useState(false);
  const [isModalDiscartChangesPopupOpen, setModalDiscartChangesPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const openModalRemoveVariablePopup = useCallback(() => {
    setModalRemoveVariablePopupOpen(true);
  }, []);

  const closeModalRemoveVariablePopup = useCallback(() => {
    setModalRemoveVariablePopupOpen(false);
  }, []);

  const openModalnactiveSetPopup = useCallback(() => {
    setModalnactiveSetPopupOpen(true);
  }, []);

  const closeModalnactiveSetPopup = useCallback(() => {
    setModalnactiveSetPopupOpen(false);
  }, []);

  const openModalDiscartChangesPopup = useCallback(() => {
    setModalDiscartChangesPopupOpen(true);
  }, []);

  const closeModalDiscartChangesPopup = useCallback(() => {
    setModalDiscartChangesPopupOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <>
      <main className="new">
        <div className="environmentvariablesheader">
          <div className="container1">
            <div className="previouspage">
              <div className="tag">
                <img className="icon5" alt="" src="/icon.svg" />
                <b className="label8">Tag</b>
              </div>
              <button className="button8" onClick={onButtonClick}>
                <div className="label9">Back</div>
              </button>
            </div>
            <div className="title">
              <button className="iconlink15" onClick={onIconLinkClick}>
                <img className="arrow-icon" alt="" src="/arrow.svg" />
              </button>
              <input
                className="inputtext1"
                type="text"
                defaultValue="Variable set name"
                placeholder="Variable set name"
                required
                autoFocus
              />
              <img className="edit-icon" alt="" src="/edit.svg" />
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="alert-blocks1" />
          <form className="forms">
            <div className="row">
              <div className="textinput-with-label">
                <label className="label10">
                  <div className="label11">Key</div>
                  <div className="required">*</div>
                </label>
                <div className="textinput">
                  <input
                    className="inputtext2"
                    type="text"
                    placeholder="e.g DATA_BASE_TOKEN"
                  />
                </div>
              </div>
              <div className="textinput-with-label">
                <label className="label10">
                  <div className="label11">Value</div>
                  <div className="required1">*</div>
                </label>
                <div className="textinput">
                  <input
                    className="inputtext3"
                    type="text"
                    placeholder="Set a value"
                  />
                </div>
              </div>
              <div className="actions">
                <div className="click-box">
                  <FormControlLabel
                    label="isSecret"
                    control={
                      <Switch color="primary" size="medium" defaultChecked />
                    }
                    id="isSecret"
                  />
                </div>
                <button
                  className="iconlink16"
                  onClick={openModalRemoveVariablePopup}
                >
                  <img className="arrow-icon" alt="" src="/delete2.svg" />
                </button>
              </div>
            </div>
            <button className="addbutton">
              <img className="add-icon" alt="" src="/add.svg" />
              <div className="label18" data-animate-on-scroll>
                New
              </div>
            </button>
          </form>
        </div>
        <div className="actionbar">
          <div className="toggle" onClick={openModalnactiveSetPopup}>
            <FormControlLabel
              label="Active"
              control={<Switch color="primary" size="medium" defaultChecked />}
            />
          </div>
          <div className="button-group4">
            <button className="button9" onClick={openModalDiscartChangesPopup}>
              <div className="label19">Cancel</div>
            </button>
            <button className="button10">
              <div className="label20">Save</div>
            </button>
          </div>
        </div>
      </main>
      {isModalRemoveVariablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(30, 30, 30, 0.8)"
          placement="Centered"
          onOutsideClick={closeModalRemoveVariablePopup}
        >
          <ModalRemoveVariable onClose={closeModalRemoveVariablePopup} />
        </PortalPopup>
      )}
      {isModalnactiveSetPopupOpen && (
        <PortalPopup
          overlayColor="rgba(30, 30, 30, 0.8)"
          placement="Centered"
          onOutsideClick={closeModalnactiveSetPopup}
        >
          <ModalnactiveSet onClose={closeModalnactiveSetPopup} />
        </PortalPopup>
      )}
      {isModalDiscartChangesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(30, 30, 30, 0.8)"
          placement="Centered"
          onOutsideClick={closeModalDiscartChangesPopup}
        >
          <ModalDiscartChanges onClose={closeModalDiscartChangesPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default New;

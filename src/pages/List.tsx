import React from 'react';
import { FunctionComponent, useState, useCallback } from "react";
import ModalDeleteVariable from "../components/ModalDeleteVariable";
import PortalPopup from "../components/PortalPopup";
import SubHeader from "../components/SubHeader";
import "./List.css";
const List: FunctionComponent = () => {
  const [isModalDeleteVariablePopupOpen, setModalDeleteVariablePopupOpen] =
    useState(false);

  const openModalDeleteVariablePopup = useCallback(() => {
    setModalDeleteVariablePopupOpen(true);
  }, []);

  const closeModalDeleteVariablePopup = useCallback(() => {
    setModalDeleteVariablePopupOpen(false);
  }, []);

  return (
    <>
      <main className="list">
        <SubHeader title="Environment Variables" />
        <div className="alert-blocks" />
        <div className="container">
          <div className="searchinput">
            <input className="inputtext" type="text" placeholder="Search" />
            <button className="iconlink">
              <img className="search-icon" alt="" src="/search.svg" />
            </button>
          </div>
          <div className="table">
            <div className="tableheader">
              <div className="content">
                <div className="header">Name</div>
                <div className="table-components-sort">
                  <div className="arrow-down">
                    <img className="icon" alt="" src="/icon1.svg" />
                  </div>
                </div>
              </div>
              <div className="content1">
                <div className="header">Ref Count</div>
                <div className="table-components-sort">
                  <div className="arrow-down">
                    <img className="icon" alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
              <div className="content2">
                <div className="header">Last Editor</div>
                <div className="table-components-sort">
                  <div className="arrow-down">
                    <img className="icon" alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
              <div className="content2">
                <div className="header">Last Modified</div>
                <div className="table-components-sort">
                  <div className="arrow-down">
                    <img className="icon" alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
              <div className="content4">
                <div className="table-components-sort4">
                  <div className="arrow-down">
                    <img className="icon" alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tablerow">
              <div className="content5">
                <div className="example-of-environment">
                  Example of Environment
                </div>
              </div>
              <div className="content6">
                <div className="floating-link">
                  <a className="edge-function">edge-function</a>
                  <img
                    className="external-link-icon"
                    alt=""
                    src="/externallink.svg"
                  />
                  <div className="tooltip">
                    <div className="column">
                      <div className="tooltip1">
                        <b className="tooltip-title">Open</b>
                      </div>
                      <div className="arrow">
                        <img
                          className="arrowpath-icon"
                          alt=""
                          src="/arrowpath.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content7">
                <div className="user">User</div>
              </div>
              <div className="content7">
                <div className="user">-</div>
              </div>
              <div className="content9">
                <button
                  className="iconlink1"
                  onClick={openModalDeleteVariablePopup}
                >
                  <img className="search-icon" alt="" src="/delete.svg" />
                </button>
              </div>
            </div>
          </div>
          <div className="pagination">
            <button className="paginationbutton">
              <div className="numberpage">1</div>
            </button>
            <button className="paginationbutton1">
              <div className="numberpage">2</div>
            </button>
            <button className="paginationbutton1">
              <div className="numberpage">3</div>
            </button>
            <button className="paginationbutton3">
              <div className="numberpage3">6</div>
            </button>
          </div>
        </div>
      </main>
      {isModalDeleteVariablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(30, 30, 30, 0.8)"
          placement="Centered"
          onOutsideClick={closeModalDeleteVariablePopup}
        >
          <ModalDeleteVariable onClose={closeModalDeleteVariablePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default List;

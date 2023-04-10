import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import './Modal.scss';

const Modal = ({ openModalId, setOpenModalId, name, id }) => {
  const [check, setCheck] = useState('');

  const returnOpen = id => {
    setOpenModalId(id);
  };

  const handleChange = e => {
    setCheck(e.target.value);
  };

  return (
    <div className="modal">
      <div className={name}>
        <button onClick={() => returnOpen(id)} className="button" id={id}>
          <span className="btn-text">{name}</span>

          <ChevronDown className="filter-icon" />
          {openModalId === id && (
            <div
              className="filter-box"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <div className="border-box">
                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="ASC"
                    defaultChecked={check === 'ASC'}
                    onChange={handleChange}
                  />
                  <span className="text">높은가격순</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="DESC"
                    checked={check === 'DESC'}
                    onChange={handleChange}
                  />

                  <span className="text">낮은가격순</span>
                </label>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Modal;
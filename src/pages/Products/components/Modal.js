import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import { useSearchParams } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ openModalId, setOpenModalId, name, id }) => {
  const [check, setCheck] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const returnOpen = id => {
    setOpenModalId(id);
  };

  const handleChange = value => {
    setCheck(value);
    searchParams.set('pricefilter', value);
    setSearchParams(searchParams);
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
                    defaultChecked={check === 'DESC'}
                    onChange={() => handleChange('DESC')}
                  />
                  <span className="text">높은가격순</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="DESC"
                    checked={check === 'ASC'}
                    onChange={() => handleChange('ASC')}
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

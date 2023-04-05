import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import './Modal.scss';

//map도는 부분은 컴포넌드화 해서 각각의 유즈스테이트를 갖도록!

//지금의 문제! 두번째 클릭한 버튼에 체크박스를 클릭할때 두번 클릭해야됨.

const Modal = ({ id, name }) => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState('');

  const returnOpen = id => {
    // if (open === false) {
    //   setOpen(true);
    // } else if (open === true) {
    //   setOpen(false);
    // }
    // open ? setOpen(false) : setOpen(true);
    // setOpen(!open);
    // if ({ id } == 3) {
    //   setOpen(prev => !prev);
    // } else {
    //   setOpen('');
    // }
    setOpen(prev => !prev);
  };

  const handleChange = e => {
    setCheck(e.target.value);
  };

  return (
    <div className="modal">
      <div className={name}>
        <button onClick={returnOpen} className="button">
          {name}
          <ChevronDown className="filter-icon" />
          {open && (
            <div
              className="filter-box"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <div className="border-Box">
                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="hight"
                    defaultChecked={check === 'hight'}
                    onChange={handleChange}
                  />
                  <span className="text">높은가격순</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="low"
                    checked={check === 'low'}
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

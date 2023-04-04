import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, CheckCircle } from 'react-feather';
import './Signup.scss';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    birth: '',
    phone: '',
    gender: '',
    email: '',
    address: '',
    password: '',
  });

  const [checkboxes, setCheckboxes] = useState({
    terms: false,
    privacy: false,
  });

  const { terms, privacy } = checkboxes;

  const { name, birth, phone, gender, email, address, password } = inputs;

  const allFieldFilled =
    name && birth && phone && email && address && password && terms && privacy;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validations = {
    name: name.length >= 3,
    birth: birth.match(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/),
    phone: phone.match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/),
    email: email.match(/^\S+@\S+\.\S+$/),
    address: address.length >= 5,
    password: password.match(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,20})/),
  };

  const messages = {
    name: ['사용 가능한 이름입니다.', '이름을 입력해주세요.'],
    birth: [
      '사용 가능한 생일입니다.',
      '생년월일을 YYYY-MM-DD 형식으로 입력해주세요.',
    ],
    phone: [
      '사용 가능한 핸드폰 번호입니다.',
      '올바른 핸드폰 번호를 입력해주세요.',
    ],
    email: ['사용 가능한 이메일입니다.', '올바른 이메일 정보를 입력해주세요.'],
    address: ['사용 가능한 주소입니다.', '올바른 주소 정보를 입력해주세요.'],
    password: [
      '사용 가능한 비밀번호입니다.',
      '8자 이상의 영문+숫자 조합 비밀번호를 입력해주세요.',
    ],
  };

  const allValueValidated =
    allFieldFilled &&
    validations.name &&
    validations.birth &&
    validations.phone &&
    validations.phone &&
    validations.email &&
    validations.password;

  const handleSubmit = event => {
    event.preventDefault();

    allValueValidated
      ? console.log(inputs)
      : alert('입력 값을 다시 확인해주세요!');
  };

  return (
    <div className="signup">
      <div className="left">
        <div className="column-content">
          <div className="column-top">
            <ArrowLeft className="arrow-left" />
            <div className="wekea-logo" />
          </div>
          <h1 className="title">
            <span className="ikea-blue">WEKEA Family</span> 회원 가입
          </h1>
          <div className="login">
            <p>이미 가입하셨나요?&nbsp;</p>
            <Link to="/signup-new" className="link">
              로그인 하기
            </Link>
          </div>
          <div className="images-container">
            <div className="images-column">
              <div className="image-reg" />
              <div className="image-reg" />
              <div className="image-short" />
              <div className="image-reg" />
            </div>
            <div className="images-column">
              <div className="image-short" />
              <div className="image-short" />
              <div className="image-reg" />
              <div className="image-short" />
              <div className="image-reg" />
            </div>
          </div>
          <div className="kiosk-label">
            WEKEA.kr - 쿠키 정책 , 개인정보처리방침
          </div>
          <div className="kiosk-label">
            © Inter WEKEA Systems B.V. 1999-2023
          </div>
        </div>
      </div>
      <div className="right">
        <div className="column-content">
          <fieldset>
            <legend className="legend">IKEA Family에 가입하시겠어요?</legend>
            <span>
              <input
                name="family-signup"
                type="radio"
                className="family-signup"
                defaultChecked
                value="family-signup"
              />
              <label htmlFor="family-signup">
                예, IKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다! IKEA
                Family 혜택
              </label>
            </span>
            <span>
              <input
                name="family-no"
                type="radio"
                className="family-signup"
                value="family-no"
              />
              <label htmlFor="family-no">
                아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다. IKEA
                Family 혜택
              </label>
            </span>
          </fieldset>
          <form onSubmit={() => console.log(inputs)}>
            {USER_INPUT_INFO_LIST.map(
              ({ id, label, name, type, placeholder }) => {
                return (
                  <React.Fragment key={id}>
                    {label === '성별' ? (
                      <label>
                        성별
                        <select
                          onChange={handleInput}
                          name="gender"
                          value={gender}
                          type="select"
                        >
                          <option value={null} />
                          <option value="male">남성</option>
                          <option value="female">여성</option>
                          <option value="deny">응답 거부</option>
                        </select>
                      </label>
                    ) : (
                      <React.Fragment key={id}>
                        <label>
                          {label}
                          <input
                            onChange={handleInput}
                            value={inputs[name]}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                          />
                        </label>
                        {validations[name] ? (
                          <div className="okay">
                            <CheckCircle className="icon" /> {messages[name][0]}
                          </div>
                        ) : (
                          <div className="warning">
                            <AlertCircle className="icon" /> {messages[name][1]}
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              }
            )}
            <div className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                onChange={() =>
                  setCheckboxes({
                    ...checkboxes,
                    terms: !terms,
                  })
                }
                value={terms}
              />
              <span className="label">
                (필수) 약관을 모두 읽고 동의합니다. 이용약관
              </span>
            </div>
            <div className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                onChange={() =>
                  setCheckboxes({
                    ...checkboxes,
                    privacy: !privacy,
                  })
                }
                value={privacy}
              />
              <span className="label">
                (필수) 개인정보 수집ㆍ이용에 동의합니다. 개인정보 수집ㆍ이용
                동의
              </span>
            </div>
            <button
              className={`submit-btn ${!allFieldFilled && 'disabled'}`}
              onClick={handleSubmit}
            >
              회원 가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

const USER_INPUT_INFO_LIST = [
  {
    id: 1,
    label: '이름',
    name: 'name',
    type: 'text',
    placeholder: '이름을 입력해주세요',
  },
  {
    id: 2,
    label: '생일',
    name: 'birth',
    type: 'text',
    placeholder: 'YYYY-MM-DD',
  },
  {
    id: 3,
    label: '핸드폰',
    name: 'phone',
    type: 'text',
    placeholder: '010-1234-5678',
  },
  {
    id: 4,
    label: '성별',
  },
  {
    id: 5,
    label: '이메일',
    name: 'email',
    type: 'text',
    placeholder: '이메일 주소를 입력해주세요',
  },
  {
    id: 6,
    label: '주소',
    name: 'address',
    type: 'text',
    placeholder: '주소를 입력해주세요',
  },
  {
    id: 7,
    label: '비밀번호',
    name: 'password',
    type: 'password',
    placeholder: '8자 이상 영문+숫자 조합의 비밀번호를 입력해주세요',
  },
];

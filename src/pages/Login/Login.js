import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Eye } from 'react-feather';
import './Login.scss';

function Login() {
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
  });

  const { userId, password } = inputs;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [warning, setWarning] = useState({
    idIncorrect: false,
    pwIncorrect: false,
  });

  const { idIncorrect, pwIncorrect } = warning;

  const handleInput = event => {
    const { name, value } = event.target;
    event.preventDefault();

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    console.log(inputs);
  };

  const userIdValid = userId.match(/^\S+@\S+\.\S+$/);
  const passwordValid = password.length > 7;

  const allInputValid = userIdValid && passwordValid;

  return (
    <div className="login">
      <div className="left">
        <div className="column-content">
          <div className="column-top">
            <ArrowLeft className="arrow-left" />
            <div className="wekea-logo-white" />
          </div>
          <div className="hero-wrapper">
            <h1 className="title">로그인</h1>
            <p>
              외워야 할 비밀번호가 많아 불편하셨죠? 이제 일회용 코드를 이용하여
              간편하게 로그인하세요.
            </p>
            <p>* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능</p>
          </div>
          <span>
            <div className="kiosk-label">
              WEKEA.kr - 쿠키 정책 , 개인정보처리방침
            </div>
            <div className="kiosk-label">
              © Inter WEKEA Systems B.V. 1999-2023
            </div>
          </span>
        </div>
      </div>
      <div className="right">
        <div className="right-content-container">
          <label>
            이메일 또는 확인된 핸드폰 번호
            <input
              onChange={handleInput}
              onBlur={() => {
                !userIdValid
                  ? setWarning({ ...warning, idIncorrect: true })
                  : setWarning({ ...warning, idIncorrect: false });
              }}
              value={userId}
              name="userId"
              type="text"
              placeholder="아이디를 입력해주세요"
            />
          </label>
          <div className="feature-otp">
            <p>다른 로그인 방법: &nbsp; </p>
            <span className="underline">일회용 코드로 로그인</span>
          </div>
          {idIncorrect && (
            <div className="warning">
              <AlertCircle className="icon" /> 올바른 아이디를 입력해주세요.
            </div>
          )}
          <label>
            비밀번호
            <input
              onChange={handleInput}
              value={password}
              onBlur={() => {
                !passwordValid
                  ? setWarning({ ...warning, pwIncorrect: true })
                  : setWarning({ ...warning, pwIncorrect: false });
              }}
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
            />
          </label>
          <div onClick={handleClick} className="reveal-container">
            <Eye height={20} width={20} />
            <p>비밀번호 확인하기</p>
          </div>
          {pwIncorrect && (
            <div className="warning">
              <AlertCircle className="icon" /> 비밀번호를 8자 이상 입력해주세요.
            </div>
          )}
          <div className="checkbox-container">
            <input className="checkbox" type="checkbox" />
            <span className="label">로그인 상태 유지</span>
          </div>
          <button
            className={allInputValid ? 'submit-btn' : 'submit-btn disabled'}
          >
            로그인
          </button>
          <div className="signup">
            <div className="text">
              IKEA 계정이 없으신가요? 지금 바로 만들어보세요.
            </div>
            <button onClick={handleSubmit} className="btn">
              회원 가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

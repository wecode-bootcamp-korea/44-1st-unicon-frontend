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

  const birthValid = birth.match(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/);
  const phoneValid = phone.match(
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  );
  const emailValid = email.match(/^\S+@\S+\.\S+$/);
  const passwordValid = password.length > 7;

  const allValueValidated =
    allFieldFilled && birthValid && phoneValid && emailValid && passwordValid;

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
            <label>
              이름
              <input
                onChange={handleInput}
                value={name}
                name="name"
                type="text"
                placeholder="이름을 입력해주세요"
              />
            </label>
            {name.length < 3 ? (
              <div className="warning">
                <AlertCircle className="icon" /> 이름을 입력해주세요.
              </div>
            ) : (
              <div className="okay">
                <CheckCircle className="icon" /> 사용 가능한 이름입니다.
              </div>
            )}
            <label>
              생일
              <input
                onChange={handleInput}
                value={birth}
                name="birth"
                type="text"
                placeholder="YYYY-MM-DD"
              />
            </label>
            {birthValid ? (
              <div className="okay">
                <CheckCircle className="icon" /> 사용 가능한 생일입니다.
              </div>
            ) : (
              <div className="warning">
                <AlertCircle className="icon" /> 생년월일을 YYYY-MM-DD 형식으로
                입력해주세요.
              </div>
            )}
            <label>
              휴대폰
              <input
                onChange={handleInput}
                value={phone}
                name="phone"
                type="text"
                placeholder="010-1234-5678"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              />
            </label>
            {phoneValid ? (
              <div className="okay">
                <CheckCircle className="icon" /> 사용 가능한 핸드폰 번호입니다.
              </div>
            ) : (
              <div className="warning">
                <AlertCircle className="icon" /> 올바른 핸드폰 번호를
                입력해주세요.
              </div>
            )}
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
            <label>
              이메일
              <input
                onChange={handleInput}
                value={email}
                name="email"
                type="text"
                placeholder="이메일을 입력해주세요"
              />
            </label>
            {emailValid ? (
              <div className="okay">
                <CheckCircle className="icon" /> 사용 가능한 이메일입니다.
              </div>
            ) : (
              <div className="warning">
                <AlertCircle className="icon" /> 이메일 필드는 필수 필드입니다.
              </div>
            )}
            <label>
              주소
              <input
                onChange={handleInput}
                value={address}
                name="address"
                type="text"
                placeholder="주소를 입력해주세요"
              />
            </label>
            {!address && (
              <div className="warning">
                <AlertCircle className="icon" /> 주소 필드는 필수 필드입니다.
              </div>
            )}
            <label>
              비밀번호
              <input
                onChange={handleInput}
                value={password}
                name="password"
                type="password"
                placeholder="비밀번호를 8자 이상 입력해주세요"
              />
            </label>
            {passwordValid ? (
              <div className="okay">
                <AlertCircle className="icon" /> 사용 가능한 비밀번호입니다.
              </div>
            ) : (
              <div className="warning">
                <AlertCircle className="icon" /> 비밀번호를 8자 이상
                입력해주세요.
              </div>
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

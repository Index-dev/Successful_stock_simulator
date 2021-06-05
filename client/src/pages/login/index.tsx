import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiAccount, mdiLock } from "@mdi/js";

const LoginMain = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 100vw;
  height: 100vh;

  * {
    box-sizing: border-box;
  }

  background-color: #16a596;

  article.login-block {
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    width: 400px;
    height: 460px;
    padding: 40px 30px;

    background-color: #fae0df;
    border-radius: 10px;
    box-shadow: 0 5px 30px 1px rgba(250, 224, 223, 0.5);

    .texts {
      > div:first-child {
        font-size: 1.9rem;
        font-weight: bold;
      }

      > div:last-child {
        margin-top: 10px;
        font-size: 1.3rem;
        color: rgb(100, 100, 100);
      }
    }

    .input-box {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      padding: 0 14px;

      background-color: #f6f5f1;
      border-radius: 20px;
      box-shadow: 0 8px 15px 2px rgba(0, 0, 0, 0.2);

      input {
        outline: none;
        width: 100%;
        height: 100%;
        margin-left: 10px;

        border: none;
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.2rem;
      }
    }

    .id-input {
      margin-top: 50px;
    }

    .pwd-input {
      margin-top: 20px;
    }

    .login-button {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div:first-child {
        border-radius: 20px;
        background-color: #16a596;
        padding: 15px 40px;
        color: #ddd;
        cursor: pointer;
        transition: 0.2s all ease-in-out;

        &:hover {
          color: #fff;
        }
      }

      > div:last-child {
        color: rgb(120, 120, 120);
        cursor: pointer;
      }
    }

    .signup-button {
      margin-top: 50px;
      font-size: 1rem;
      color: rgb(120, 120, 120);

      em {
        margin-left: 5px;
        color: rgb(50, 50, 50);
        cursor: pointer;
      }
    }
  }
`;

const Login = () => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSignupClick = () => {
    alert("회원가입");
  };

  return (
    <LoginMain>
      <article className="login-block">
        <div className="texts">
          <div>Welcome Back!</div>
          <div>Please login your account</div>
        </div>

        <div className="id-input input-box">
          <Icon path={mdiAccount} size={1.2} color="rgb(120, 120, 120)" />
          <input
            type="text"
            placeholder="User Name"
            onChange={handleIdChange}
          />
        </div>
        <div className="pwd-input input-box">
          <Icon path={mdiLock} size={1.2} color="rgb(120, 120, 120)" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="login-button">
          <div>Login</div>
          <div>Forgot password?</div>
        </div>

        <div className="signup-button">
          Don't have an account?
          <em onClick={handleSignupClick}>Signup</em>
        </div>
      </article>
    </LoginMain>
  );
};

export default Login;

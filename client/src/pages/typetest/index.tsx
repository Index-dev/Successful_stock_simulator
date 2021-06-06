import { useState } from "react";
import styled from "styled-components";

import User from "pages/typetest/User";
import Icon from "@mdi/react";
import { mdiHumanGreeting } from "@mdi/js";

interface IUser {
  name: string;
  age: number;
  job: string;
  isAdult: boolean;
}

const TestMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  * {
    box-sizing: border-box;
  }

  .playground {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 600px;
    padding: 40px;

    border: 2px solid black;
    border-radius: 10px;

    .title {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }

    .add-user {
      position: relative;
      margin-top: 20px;
      text-align: center;
      width: 200px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px;

      cursor: pointer;
      /* border: 1px solid rgb(180, 180, 180); */
      background-color: #ffbdd1;
      border-radius: 8px;

      transition: 0.1s all ease-in-out;
      box-shadow: 0 4px 2px rgba(150, 150, 150, 0.8);

      &:active {
        box-shadow: 0 1px 1px rgba(150, 150, 150, 0.9);
        transform: translateX(-50%) translateY(3px);
      }
    }

    .user-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 100px;
    }
  }

  .add-user-modal {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 120px;
    width: 500px;
    height: 350px;
    padding: 20px;

    border-radius: 10px;
    background-color: rgb(50, 60, 30);
    color: #fff;

    .modal-title {
      display: flex;
      align-items: center;

      > div {
        margin-left: 10px;
      }
    }

    > div:first-child {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .new-user-name {
      margin-top: 40px;
    }

    .new-user-age {
      margin-top: 30px;
    }

    .new-user-job {
      margin-top: 30px;
    }

    .add-new-user-button {
      margin-top: 30px;
      padding: 8px 16px;
      width: 200px;
      background-color: #3b9096;
      border-radius: 10px;

      text-align: center;
      font-size: 1.2rem;

      cursor: pointer;
    }

    .input-box {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
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

    animation: slide-modal 0.5s ease-in;

    @keyframes slide-modal {
      0% {
        top: 50px;
      }

      100% {
        top: 120px;
      }
    }
  }

  .modal-bg {
    position: absolute;
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    animation: show-background 0.5s ease-in;

    background-color: rgba(50, 50, 50, 0.6);

    .close-modal-button {
      position: absolute;
      top: 15px;
      right: 20px;
      cursor: pointer;
    }

    @keyframes show-background {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;

const Typetest = () => {
  const [userList, setUserList] = useState<IUser[]>([
    {
      name: "Yohan",
      age: 29,
      job: "Developer",
      isAdult: true,
    },
    {
      name: "Leon",
      age: 15,
      job: "Student",
      isAdult: false,
    },
    {
      name: "Nancy",
      age: 17,
      job: "Student",
      isAdult: false,
    },
    {
      name: "Mark",
      age: 48,
      job: "Carpenter",
      isAdult: true,
    },
    {
      name: "Lucy",
      age: 34,
      job: "Scientist",
      isAdult: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [newUserName, setNewUserName] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  const [newUserJob, setNewUserJob] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserAge(e.target.value);
  };

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserJob(e.target.value);
  };

  const handleCloseModal = () => {
    setNewUserName("");
    setNewUserAge("");
    setNewUserJob("");
    setShowModal(false);
  };

  const handleAddNewUser = () => {
    const newAge = parseInt(newUserAge);

    const newUser: IUser = {
      name: newUserName,
      age: newAge,
      job: newUserJob,
      isAdult: newAge >= 19 ? true : false,
    };

    setUserList([...userList, newUser]);

    handleCloseModal();
  };

  return (
    <TestMain>
      <div className="playground">
        <div className="title">타입스크립트 테스트를 위한 공간입니다.</div>
        <div className="add-user" onClick={() => setShowModal(true)}>
          유저 추가하기
        </div>

        <div className="user-list">
          {userList.map((user) => (
            <User data={user} />
          ))}
        </div>
      </div>

      <div
        className="modal-bg"
        style={showModal ? { display: "flex" } : { display: "none" }}
      >
        <div className="add-user-modal">
          <div className="modal-title">
            <Icon
              path={mdiHumanGreeting}
              size={1.2}
              color="rgb(250, 250, 250)"
            />
            <div>신규 유저 추가</div>
            <div className="close-modal-button" onClick={handleCloseModal}>
              X
            </div>
          </div>

          <div className="new-user-name input-box">
            <input
              type="text"
              value={newUserName}
              placeholder="이름을 입력해주세요"
              onChange={handleNameChange}
            />
          </div>

          <div className="new-user-age input-box">
            <input
              type="number"
              value={newUserAge}
              placeholder="나이를 입력해주세요"
              onChange={handleAgeChange}
            />
          </div>

          <div className="new-user-job input-box">
            <input
              type="text"
              value={newUserJob}
              placeholder="직업을 입력해주세요"
              onChange={handleJobChange}
            />
          </div>

          <div className="add-new-user-button" onClick={handleAddNewUser}>
            추가하기
          </div>
        </div>
      </div>
    </TestMain>
  );
};

export default Typetest;

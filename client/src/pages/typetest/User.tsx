import React from "react";
import styled from "styled-components";

interface IUser {
  name: string;
  age: number;
  job: string;
  isAdult: boolean;
}

const UserMain = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  box-sizing: border-box;
  width: 220px;
  height: 120px;

  border-radius: 8px;
  padding: 10px 20px;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 0.15);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .age {
      font-size: 0.8rem;
      color: rgb(100, 100, 100);
    }
  }

  .job {
    margin-top: 6px;
    font-style: italic;
  }

  .delete-user-button {
    position: absolute;
    background-color: rgb(252, 60, 60);
    color: #fff;
    padding: 4px 12px;
    border-radius: 8px;

    font-size: 0.7rem;
    bottom: 6px;
    right: 10px;

    cursor: pointer;
  }
`;

const User = (props: { data: IUser }) => {
  const { name, age, job, isAdult } = props.data;

  return (
    <UserMain
      style={
        isAdult
          ? { backgroundColor: "#87cfff" }
          : { backgroundColor: "#caff9c" }
      }
    >
      <div className="wrapper">
        <div className="name">{name}</div>
        <div className="age">Age: {age}</div>
      </div>
      <div className="job">{job}</div>

      {/* <div className="delete-user-button">Delete</div> */}
    </UserMain>
  );
};

export default User;

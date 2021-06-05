import styled from "styled-components";

import { UserType } from "types/auth/user";

const HomeHeaderPresenter = (props: propsIState) => {
  return (
    <Container>
      <div className="userName">{props.user.email}</div>
      <div className="userName">{props.text}</div>
    </Container>
  );
};

interface propsIState {
  user: UserType;
  text: string | null;
}

export default HomeHeaderPresenter;

const Container = styled.div``;

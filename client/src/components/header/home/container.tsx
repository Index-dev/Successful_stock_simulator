import { useState } from "react";

import HomeHeaderPresenter from "components/header/home/presenter";

const HomHeaderContainer = () => {
  const [text, setText] = useState("hi");
  const user = {
    email: "opwer032@naver.com",
    password: "dkfjlsejfklesjudfj23",
  };

  return <HomeHeaderPresenter user={user} text={text} />;
};

export default HomHeaderContainer;

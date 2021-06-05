import Header from "components/header/home";

function Presenter({ text }: HomePresenterIState) {
  return (
    <div>
      <Header />
      {text}
    </div>
  );
}

export default Presenter;

interface HomePresenterIState {
  text: string;
}

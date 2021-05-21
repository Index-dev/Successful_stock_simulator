function Presenter({ text }: HomePresenterIState) {
  return <div>{text}</div>;
}

export default Presenter;

interface HomePresenterIState {
  text: string;
}

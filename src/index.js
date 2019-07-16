import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Ball = () => <div className="ball" />;
const Shadow = () => <div className="ball shadow" />;

const changePosition = pos =>
  Array(4)
    .fill(0)
    .map((p, i) => (pos === i ? 1 : p));

const Box = ({ children, onClick }) => (
  <div className="box" onClick={onClick}>
    {children}
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [1, 0, 0, 0],
      old: [0, 0, 0, 0]
    };
  }

  handleClick = p => () => {
    this.setState({
      old: [...this.state.boxes],
      boxes: changePosition(p)
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.boxes.map((b, p) => (
          <Box onClick={b !== 1 ? this.handleClick(p) : () => {}}>
            {b ? <Ball /> : null}
            {this.state.old[p] ? <Shadow /> : null}
          </Box>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

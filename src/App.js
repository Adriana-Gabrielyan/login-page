import React from "react";
import logo from "./assets/images/npmlogo.png";
import bear from "./assets/images/bear.png";
import Input from "./components/input/Input.component";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="app">
        <img src={logo} alt="logo" className="app__logo" />
        <form className="app__form">
          <img src={bear} alt="bear" className="app__image" />
          <h1 className="app__title">Sign In</h1>
          <Input required handleChange={this.handleChange} name="username">
            Username
          </Input>
          <Input required handleChange={this.handleChange} name="password">
            <span>Password</span>
            <a href="#" className="form__link">
              Forgot password?
            </a>
          </Input>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="form__button"
          >
            Sign In
          </button>
          <a href="#" className="form__link form__link--center">
            Create Account
          </a>
        </form>
      </div>
    );
  }
}

export default App;

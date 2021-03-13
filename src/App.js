import logo from "./assets/images/npmlogo.png";
import bear from "./assets/images/bear.png";
import Input from "./components/input/Input.component";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <img src={logo} alt="logo" className="app__logo" />
      <form className="app__form">
        <img src={bear} className="app__image" />
        <h1 className="app__title">Sign In</h1>
        <Input>Username</Input>
        <Input>
          <span>Password</span>
          <a href="#" className="form__link">
            Forgot password?
          </a>
        </Input>
        <button type="submit" className="form__button">
          Sign In
        </button>
        <a href="#" className="form__link form__link--center">
          Create Account
        </a>
      </form>
    </div>
  );
}

export default App;

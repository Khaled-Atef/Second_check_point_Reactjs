import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
    <form className="needs-validation">
    <div className="form-group">
    <label htmlFor="uname">First Name:</label>
      <input type="text" className="form-control" id="uname" placeholder="Enter First Name" name="uname" required/>
    <label htmlFor="uname">Last Name:</label>
      <input type="text" className="form-control" id="uname" placeholder="Enter Last Name" name="uname" required/>
    <label htmlFor="uname">Gender:</label>
    <div className="form-check">
      <label className="form-check-label" htmlFor="check1">
        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />Male
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label" htmlFor="check2">
        <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something"/>Female
      </label>
    </div>
    <br/>
    <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div className="form-group">
    <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    <label htmlFor="pwd">confirm Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="confirm password" name="pswd"/>
    </div>
    
    
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
    </div>
  );
}

export default App;

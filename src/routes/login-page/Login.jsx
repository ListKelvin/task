import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.scss";
import { listAccount } from "../../utils/data";
import { UserContext } from "../../App";
function Login() {
  const [admin, setAdmin] = useState("");
  const [pass, setPass] = useState("");
  const { setUser } = useContext(UserContext);
  let history = useNavigate();
  const handelLogin = () => {
    let account = listAccount.filter(function (account) {
      return account.username === admin && account.password === pass;
    });
    if (account.length === 0) {
      alert("The account does not exist!!");
      setAdmin("");
      setPass("");
      return;
    } else {
      setUser({ loggedIn: true });
      history("/home");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="form">
          <p className="title align">username</p>
          <input
            className="align"
            value={admin}
            onChange={(event) => setAdmin(event.target.value)}
          />
          <p className="title align">password</p>
          <input
            className="align"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
          <button className="btn align" onClick={handelLogin}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

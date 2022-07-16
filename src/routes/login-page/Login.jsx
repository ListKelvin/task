import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.scss";
import { listAccount } from "../../utils/data";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
function Login() {
  const { register, handleSubmit, getValues, resetField } = useForm();
  // const onSubmit = (data) => console.log(watch("username"));

  // const [admin, setAdmin] = useState("");
  // const [pass, setPass] = useState("");
  const { setUser } = useContext(UserContext);
  let history = useNavigate();
  const handelLogin = () => {
    let account = listAccount.filter(function (account) {
      return (
        account.username === getValues("username") &&
        account.password === getValues("password")
      );
    });
    const userName = getValues("username");
    const passWord = getValues("password");
    if (account.length === 0 || userName === "" || passWord === "") {
      alert("The account does not exist!!");
      resetField("username");
      resetField("password");
      return;
    } else {
      setUser({ loggedIn: true });
      history("/home");
    }
  };

  return (
    <div>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit(handelLogin)}>
          <p className="title align">username</p>
          <input
            className="align"
            {...register("username")}
            // value={admin}
            // onChange={(event) => setAdmin(event.target.value)}
          />
          <p className="title align">password</p>
          <input
            className="align"
            {...register("password")}
            // value={pass}
            // onChange={(event) => setPass(event.target.value)}
          />
          <button className="btn align">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

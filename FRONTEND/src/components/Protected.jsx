import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");
  console.log("logToken : " + " " + token);

  if (!token) {
    return navigate("/login");
  }

  return <div className="container">{token && <>{children}</>}</div>;
};

export default Protected;

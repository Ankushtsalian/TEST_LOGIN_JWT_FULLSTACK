import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");
  if (!token) {
    return navigate("/login");
  }

  return <div className="container">{token && <>{children}</>}</div>;
};

export default Protected;

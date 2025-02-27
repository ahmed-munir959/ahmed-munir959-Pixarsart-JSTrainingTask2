import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "20px" }}>
      <button
        onClick={() => navigate("/about")}
        style={{ marginRight: "10px" }}
      >
        Go to About
      </button>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Button;

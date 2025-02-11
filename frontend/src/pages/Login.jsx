import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/users/login/", formData);
      localStorage.setItem("accessToken", res.data.access);
      alert("로그인 성공!");
    } catch (error) {
      alert("로그인 실패!");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="아이디" onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;

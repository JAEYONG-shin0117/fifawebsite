import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/users/register/", formData);
      alert("회원가입 성공!");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="아이디" onChange={handleChange} />
        <input type="email" name="email" placeholder="이메일" onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Register;

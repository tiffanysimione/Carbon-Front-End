import React from "react";
import authStore from "../stores/authStore";

export default function LoginForm() {
  const store = authStore();
  
  const handleLoginFormChange = (e) => {
    store.updateLoginForm(e);
  };
  
  return (
    <form onSubmit={store.login}>
      <input onChange={handleLoginFormChange} value={store.loginForm.email} type="email" name="email" />
      <input onChange={handleLoginFormChange} value={store.loginForm.password} type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
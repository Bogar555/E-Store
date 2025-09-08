import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signupData } from "../../assets/data/signupInterfaceData";

const Login = () => {
  const [form, setForm] = useState(signupData);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login/authenticate",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("res", res.data);

      if (res.data.status === "success") {
        alert(res.data.message); // shows "Login successful"
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/ProductGrid");
      } else {
        alert(res.data.message); // shows "Invalid email or password"
      }
    } catch (err: any) {
      alert("Login failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ flex: 1, mr: 1 }}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/signup"
            sx={{ flex: 1, ml: 1 }}
          >
            Signup
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;

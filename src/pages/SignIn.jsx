import React, { useContext, useState } from "react";
import AuthLayout from "../component/Layouts/AuthLayout";
import FormSignIn from "../component/Fragment/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../component/Element/AppSnackbar";
import { DarkModeContext } from "../context/darkModeContext"; 
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function signIn() {
  const { login } = useContext(AuthContext);

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      login(refreshToken); 
    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center transition-colors duration-200">
        <AuthLayout>
          <FormSignIn onSubmit={handleLogin} />

          <div className="flex justify-center mt-6">
            <div 
              onClick={toggleDarkMode} 
              className="cursor-pointer p-2 rounded-full transition-transform hover:scale-110 text-black dark:text-white"
            >
              {isDarkMode ? (
                <LightModeOutlinedIcon sx={{ fontSize: 24 }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ fontSize: 24 }} />
              )}
            </div>
          </div>

          <AppSnackbar
            open={snackbar.open}
            message={snackbar.message}
            severity={snackbar.severity}
            onClose={handleCloseSnackbar}
          />
        </AuthLayout>
      </div>
    </>
  );
}

export default signIn;
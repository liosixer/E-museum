import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import theme from "../theme";
import WelcomeScreen from "@/views/WelcomeScreen";
import BuildingUnit from "@/views/BuildingUnit";
import MuseumIntro from "@/views/MuseumIntro";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 应用进入时默认跳转到 /welcome
    if (location.pathname === "/") {
      navigate("/welcome", { replace: true });
    }
    
    // 监听路由变化并打印当前路径
    console.log("当前路由:", location.pathname);
  }, [location, navigate]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <main>
        <Routes>
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/building" element={<BuildingUnit />} />
          <Route path="/intro" element={<MuseumIntro />} />
          {/* 可以添加其他路由，例如 /production, /game */}

          {/* 捕获所有未定义的路径，重定向到 /welcome */}
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </main>
    </Box>
  );
}

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

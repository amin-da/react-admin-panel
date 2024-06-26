import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TopBar from "./layouts/TopBar";
import SideBar from "./layouts/SideBar";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/Contacts";
import Calendar from "./pages/Calendar";
import Geography from "./pages/Geography";
import Team from "./pages/Team";
import Form from "./pages/Form";
import FAQ from "./pages/Faq";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Line from "./pages/Line";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
            <SpeedInsights />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

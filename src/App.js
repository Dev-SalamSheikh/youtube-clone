import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import { darkTheme, lightTheme } from "./Utilities/Theme";
import { Routes, Route } from "react-router-dom";
import Video from "./components/pages/Video";
import Signin from "./components/sign in/Signin";
import Signup from "./components/pages/Signup";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

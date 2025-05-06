import React, { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// Assets
import { IRoute, ROUTES } from "./routes";

// Components
import { Layout } from "./components";

// Contexts
import { ThemeContext, TThemeContext } from "./providers/theme.provider";

const App: FC = () => {
  const { isDarkMode }: TThemeContext = useContext(
    ThemeContext
  ) as TThemeContext;

  return (
    <Layout isDarkMode={isDarkMode}>
      <Routes>
        {ROUTES.map((route: IRoute, index: number) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Layout>
  );
};

export default App;

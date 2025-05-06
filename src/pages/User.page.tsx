import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

// Components
import { Spinner } from "../components";

// Contexts
import { ThemeContext, TThemeContext } from "../providers/theme.provider";

// Types
import { TUser } from "../types/types";

// Utils
import { httpRequest, setPageTitle } from "../utils";

const User: FC = () => {
  const { userId: id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isDarkMode }: TThemeContext = useContext(
    ThemeContext
  ) as TThemeContext;
  const [user, setUser] = useState<TUser | null>(null);
  const navigate: NavigateFunction = useNavigate();

  setPageTitle(user?.username as string);

  const username: string = user?.username as string;
  const name: string = user?.name as string;
  const address: string = `${user?.address?.city}, ${user?.address?.street} ${user?.address?.suite}, ${user?.address?.zipcode}`;
  const phone: string = user?.phone as string;
  const website: string = user?.website as string;

  async function getData(): Promise<void> {
    await Promise.resolve(
      httpRequest("https://jsonplaceholder.typicode.com/users", "GET")
    ).then((response: any) => {
      const user: TUser = response?.find(
        (x: any) => x.id === parseInt(id as string)
      );
      setUser(user);

      setTimeout(() => {
        // Just to keep the spinner visible for one second
        setIsLoading(false);
      }, 1000);
    });
  }

  const spinner: ReactNode = <Spinner isDarkMode={isDarkMode} />;

  const component: ReactNode = (
    <div className="px-60 mobile:px-5 flex flex-col gap-5">
      <button
        className={`transition-all duration-300 px-5 py-2 rounded-full hover:opacity-50 max-w-40 flex justify-center items-center ${
          isDarkMode ? "bg-drakgray text-white" : "bg-gray text-black"
        }`}
        onClick={() => navigate(-1)}
      >
        &lt; Torna indietro
      </button>
      <div className="flex justify-center items-center">
        <div
          className={`flex flex-col border-2 p-10 rounded-3xl transition-all duration-300 gap-5 mobile:p-5 ${
            isDarkMode ? "bg-black border-drakgray" : "bg-white border-gray"
          }`}
        >
          <div className="flex flex-row items-start gap-2">
            <span
              className={`transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Username:
            </span>
            <span
              className={`transition-all duration-300 font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {username}
            </span>
          </div>
          <div className="flex flex-row items-start gap-2">
            <span
              className={`transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Nome:
            </span>
            <span
              className={`transition-all duration-300 font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {name}
            </span>
          </div>
          <div className="flex flex-row items-start gap-2">
            <span
              className={`transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Indirizzo:
            </span>
            <span
              className={`transition-all duration-300 font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {address}
            </span>
          </div>
          <div className="flex flex-row items-start gap-2">
            <span
              className={`transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Numero di telefono:
            </span>
            <span
              className={`transition-all duration-300 font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {phone}
            </span>
          </div>
          <div className="flex flex-row items-start gap-2">
            <span
              className={`transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Sito Web:
            </span>
            <span
              className={`transition-all duration-300 font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {website}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, []);

  return isLoading ? spinner : component;
};

export default User;

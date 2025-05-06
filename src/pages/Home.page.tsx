import { FC, JSX, ReactNode, useContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Components
import { Card, Modal, Spinner } from "../components";

// Contexts
import { ThemeContext, TThemeContext } from "../providers/theme.provider";

// Types
import { TPost, TSelectedPost, TUser } from "../types/types";

// Utils
import { httpRequest } from "../utils";

interface IModal {
  show: boolean;
  item: TSelectedPost | null;
}

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [users, setUsers] = useState<TUser[]>([]);
  const [modal, setModal] = useState<IModal>({ show: false, item: null });
  const { isDarkMode }: TThemeContext = useContext(
    ThemeContext
  ) as TThemeContext;
  const navigate: NavigateFunction = useNavigate();

  const userInitials: string = `${modal.item?.user?.name
    .split(" ")[0]
    .charAt(0)}${modal.item?.user?.name.split(" ")[1].charAt(0)}`;

  async function getData(): Promise<void> {
    await Promise.all([
      httpRequest("https://jsonplaceholder.typicode.com/posts", "GET"),
      httpRequest("https://jsonplaceholder.typicode.com/users", "GET"),
    ]).then((response: any[]) => {
      setPosts(response[0]);
      setUsers(response[1]);

      setTimeout(() => {
        // Just to keep the spinner visible for one second
        setIsLoading(false);
      }, 1000);
    });
  }

  function onPostClick(data: TSelectedPost) {
    setModal({ show: true, item: data });
  }

  function pageHandler(user: TUser): void {
    const url: string = `/users/${user.id}`;
    navigate(url);
  }

  const spinner: ReactNode = <Spinner isDarkMode={isDarkMode} />;

  const component: ReactNode = (
    <div className="flex justify-center items-center py-20 mobile:px-20">
      {posts && posts.length > 0 ? (
        <div className="flex flex-col gap-5">
          {posts.map((post: TPost, index: number) => {
            const user: TUser = users?.find(
              (user: TUser) => user.id === post.userId
            ) as TUser;

            return (
              <div key={index}>
                <Card
                  data={post}
                  user={user}
                  onClick={onPostClick}
                  isDarkMode={isDarkMode}
                  pageHandler={pageHandler}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <span
          className={`transition-all duration-300 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Nessun dato disponibile...
        </span>
      )}
    </div>
  );

  const modalComponent: JSX.Element = (
    <Modal
      isOpen={modal.show}
      isDarkMode={isDarkMode}
      title={modal.item?.post.title}
      onClose={() => setModal({ show: false, item: null })}
    >
      <div className="flex flex-row items-center gap-5">
        <div className="w-[50px] h-[50px] bg-red rounded-lg flex justify-center items-center p-5">
          <span className="text-white font-bold text-3xl">{userInitials}</span>
        </div>
        <span
          className={`transition-all duration-300 text-lg ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {modal.item?.post?.body}
        </span>
      </div>
      <span
        className={`text-[0.75rem] transition-all duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Pubblicato da:{" "}
        <span
          onClick={() => pageHandler(modal.item?.user as TUser)}
          className="text-red underline cursor-pointer"
        >
          {modal.item?.user?.username}
        </span>
      </span>
    </Modal>
  );

  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? spinner : component}
      {modalComponent}
    </>
  );
};

export default Home;

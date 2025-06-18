
import Header from "./Header";
import Navigation from "./Navigation";
import { ToggleAsideContextProvider } from "../Contexts/asideContext/ToggleAsideContext";


export default function ClientLayout({ children }) {
   

  return (
    <ToggleAsideContextProvider>
      <div className="mx-auto gap-x-3 flex w-full 2xl:max-w-[1400px] min-h-screen">
        <aside className="bg-base100 pl-4 mr-0 h-full flex-shrink-0">
          <Navigation />
        </aside>

        <main className={`flex-1 relative bg-base100`}>
          <header className="fixed top-0 right-0 z-0 bg-base100 h-[4rem] w-full px-4 py-2 border-b border-gray-200">
            <Header />
          </header>

          <section className=" w-full mx-auto relative mt-[4rem] h-[calc(100vh-4rem)] overflow-y-auto p-4 xl:px-2">
            {children}
          </section>
        </main>
      </div>
    </ToggleAsideContextProvider>
  );
}

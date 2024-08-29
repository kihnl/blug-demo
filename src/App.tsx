import WinterWonderland from "./assets/winter-wonderland.webp";
import TuxHeadshot from "./assets/tux-headshot.webp";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${WinterWonderland})` }}
        className="h-screen bg-cover bg-center shadow-lg"
      >
        <div className="h-1/6" />
        <div className="flex w-full justify-center bg-white bg-opacity-50 py-5">
          <img src={TuxHeadshot} className="h-[400px] w-[400px] rounded-full" />
          <div className="ml-10 flex w-[500px] flex-col justify-center">
            <h2 className="text-xl font-bold text-gold-500">Meet Tux</h2>
            <p>
              Meet Tux, the cheerful Linux penguin who loves exploring his snowy
              winter wonderland. Join him in his favorite winter activities,
              from building snowmen to cozying up by the campfire. Check out the
              hobbies page below for info on all of Tux's latest hobbies!
            </p>
            <div className="mt-4 flex w-full justify-center">
              <Link to={"/hobbies"}>
                <button className="rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400">
                  Tux's Hobbies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

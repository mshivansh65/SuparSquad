import "./styles.css";
import { useSelector } from "react-redux";
import HeroList from "./Component/HeroList";
import FavHeroList from "./Component/FavHeroList";
import Stats from "./Component/Stats";
export default function App() {
  const favHeroList = useSelector((state) => state.heroList.favList);
  let showMessage = false;
  if (favHeroList.length === 5) {
    showMessage = true;
  }
  console.log(favHeroList);
  return (
    <>
      <h1>SuparSquad</h1>
      <div className="App">
        <HeroList />
        <FavHeroList />
        <Stats />
      </div>
      {showMessage && (
        <h4 className="message">Can't add more than 5 heroes in your squad</h4>
      )}
    </>
  );
}

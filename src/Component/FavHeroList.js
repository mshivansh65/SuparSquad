import { useSelector } from "react-redux";
import HeroItem from "./HeroItem";
export default function FavHeroList(props) {
  const favList = useSelector((state) => state.heroList.favList);

  return (
    <div className="container">
      <ul>
        {favList.map((hero) => (
          <HeroItem
            key={hero.id * 10 + 1}
            name={hero.name}
            remove={true}
            hero={hero}
          />
        ))}
      </ul>
    </div>
  );
}

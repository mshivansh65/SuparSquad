import { useSelector } from "react-redux";
import HeroItem from "./HeroItem";
export default function HeroList() {
  const heroList = useSelector((state) => state.heroList.items);

  return (
    <div className="container">
      <ul>
        {heroList.map((hero) => {
          return <HeroItem key={hero.id} name={hero.name} hero={hero} />;
        })}
      </ul>
    </div>
  );
}

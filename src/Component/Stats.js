import { useSelector } from "react-redux";
export default function () {
  const favList = useSelector((stats) => stats.heroList.favList);
  const strength = favList.reduce((total, hero) => total + hero.strength, 0);
  const intelligence = favList.reduce(
    (total, hero) => total + hero.intelligence,
    0
  );
  const speed = favList.reduce((total, hero) => total + hero.speed, 0);
  return (
    <>
      {favList.length > 0 && (
        <div>
          <h3>strength: {strength} </h3>
          <h3> intelligence: {intelligence} </h3>
          <h3> speed: {speed}</h3>
        </div>
      )}
    </>
  );
}

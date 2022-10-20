import { useDispatch } from "react-redux";
import HeroActions from "../Store/HeroStore";
export default function HeroItem(props) {
  const dispatch = useDispatch();
  function addHero() {
    dispatch(HeroActions.AddHero(props.hero));
  }
  function removeHero() {
    dispatch(HeroActions.RemoveHero(props.hero));
  }
  return (
    <li>
      {console.log(props.hero.id)}
      <div className={"hero_list"}>
        {props.name}
        {!props.remove && (
          <button className={`btn add`} onClick={addHero}>
            +
          </button>
        )}
        {props.remove && (
          <button className={`btn add`} onClick={removeHero}>
            -
          </button>
        )}
      </div>
    </li>
  );
}

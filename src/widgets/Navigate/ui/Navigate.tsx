import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig";

export const Navigate = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={RoutePath.main}>Главная</Link>
        </li>
        <li>
          <Link to={RoutePath.about}>О нас</Link>
        </li>
      </ul>
    </div>
  );
};

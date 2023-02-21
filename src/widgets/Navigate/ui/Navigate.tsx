import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig";

export const Navigate = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li>
          <Link to={RoutePath.main}>{t("Главная")}</Link>
        </li>
        <li>
          <Link to={RoutePath.about}>{t("О нас")}</Link>
        </li>
      </ul>
    </div>
  );
};

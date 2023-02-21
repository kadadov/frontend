import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      <h2>{t("Главная")}</h2>
    </div>
  );
};

export default MainPage;

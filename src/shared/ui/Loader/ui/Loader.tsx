import cls from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.loader}></div>
    </div>
  );
};

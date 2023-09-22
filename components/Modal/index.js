import style from "./style.module.scss";

export default function Modal({
  text,
  handleClick,
  btnVal,
  closeModal,
  extra,
}) {
  return (
    <div className={style.modal}>
      <div className={style.content}>
        <button onClick={closeModal} className={style.close}>
         &times;
        </button>
        <div className={style.texts}>
          <p>{text}</p>
          <p>{extra}</p>
        </div>

        <button onClick={handleClick} className={style.mainBtn}>
          {btnVal}
        </button>
      </div>
    </div>
  );
}

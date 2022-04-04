import React from 'react';
import style from "./styles.module.scss";

const Card = ({card}) => {
  return (
    <div class={style.card}>
      <img class={style.img} src={card.img} alt="person"/>
      <div class={style.info}>
        <div class={style.state}>{card.status}</div>
        <div class={style.name}>{card.name}</div>
        <p class={style.text}><span>{card.birthday}</span></p>
      </div>
    </div>
  );
}
export default Card
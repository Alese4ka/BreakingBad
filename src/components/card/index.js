import React from 'react';
import style from "./styles.module.scss";

/*const cards = [
  {
    id: uuid4(),
    name: "Walter White",
    birthday: "09-07-1958",
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Deceased",
  },
  {
    id: uuid4(),
    name: "Jesse Pinkman",
    birthday: "09-24-1984",
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
    status: "Alive",
  },
  {
    id: uuid4(),
    name: "Skyler White",
    birthday: "08-11-1970",
    img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    status: "Alive",
  },
  {
    id: uuid4(),
    name: "Walter White Jr.",
    birthday: "07-08-1993",
    img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
    status: "Alive",
  },
  {
    id: uuid4(),
    name: "Henry Schrader",
    birthday: "Unknown",
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
    status: "Deceased",
  },
];*/

const Component = (props) => {
  return (
    <h1>
      <header>
        <div class={style.logo}></div>
        <button class={style.catalog}>Каталог</button>
      </header>
      <main>
        <button class={style.return}>Назад в каталог</button>
        <div class={style.description}>
          <div class={style.img}></div>
          <div class={style.info}>
            <div class={style.state}>живой</div>
            <h2>Андрей Панасюк</h2>
            <p class={style.text}><span>Дата рождения:</span> 23.11.2001</p>
            <p class={style.text}><span>Ник-нейм:</span> Андрей-завоеватель</p>
            <p class={style.quote}><span>Цитата:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquam laoreet vivamus sed. Diam fames mi, quam tellus cursus volutpat velit massa.</p>
          </div>
        </div>
      </main>
      <footer>
        <p>2022</p>
        <p>@Alesya</p>
      </footer>
    </h1>
  );
}
export default Component
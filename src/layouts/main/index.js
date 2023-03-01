import { useEffect, useRef, useState } from "react";
import EditButton from "./edit";
import map from "./map.png";

export default function Main() {
  const [edit, setEdit] = useState(false);
  const editRef = useRef();

  function handleEdit(e) {
    setEdit(!edit);
  }

  useEffect(() => {
    editRef.current.focus();
  }, [edit]);

  const [email, setEmail] = useState('');
  const [href, setHref] = useState('#');

  function showEmail(e) {
    if (e.target.href.endsWith('#')) {
      setEmail(store.contacts.email);
      setHref("mailto:" + store.contacts.email);
      e.preventDefault();
    }
  }
  
  const store = {
    name: "a-store.uz",
    title: "фирменный магазин",
    description: "Различное профессиональное музыкальное оборудование. Бесплатная доставка музыкальных инструментов и платная – аксессуаров, таких как струны, подставки и т.д. в пределах города Ташкента.",
    image: '',
    contacts: {
      product: "XIAOMI",
      since: 2022,
      address: "Ташкент, Юнусабадский р-н, пр-т Амира Темура, 129Б",
      landmark: "I MAXI супермаркет, ЮНУСАБАДСКИЙ РАЙОННЫЙ СУД ПО УГОЛОВНЫМ ДЕЛАМ",
      phone: "712071234",
      schedule: {
        open: [10,21],
        break: []
      },
      site: "a-store.uz",
      email: "example@a-store.uz"
    }
  }
  let phone = store.contacts.phone;
  const [hiddenPhone, setHiddenPhone] = useState("XX-XX");
  function showPhone(e) {
    setHiddenPhone(phone.slice(5,7) + "-" + phone.slice(7,9));
  }
  return (
    <div id="outer">
    <main>
      <h2>{store.name}</h2>
      <h3>{store.title}</h3>
      <aside>
        Контактные данные компании «GOODZONE МАГАЗИН БЫТОВОЙ ТЕХНИКИ И ЭЛЕКТРОНИКИ» — телефоны, местонахождение, режим работы, виды деятельности и другая полезная информация. Пожалуйста, сообщите огранизации, что вы нашли их контакты на сайте Справочник Ташкента — Sprav.uz.
      </aside>
      <article id="store-details">
        <div id="store-intro">
          <img src={store.image}
               id="store-image" />
          <div>
            <h4>{store.contacts.product}</h4>
            <p id="edit">
              <EditButton onClick={handleEdit} />
              с&nbsp;
              <span ref={editRef} contentEditable={edit}>
                {store.contacts.since}
              </span>
              &nbsp;года
            </p>
          </div>
        </div>
        <ul id="contacts">
          <li id="address">{store.contacts.address}</li>
          <li id="landmark">{store.contacts.landmark}</li>
          <li id="phone">
            +998 {phone.slice(0,2)} {phone.slice(2,5)}-{hiddenPhone}
            <button type="button" onClick={showPhone}>Показать номер</button>
          </li>
          <li id="schedule">
            <ol>
              <li className="schedule" id="open">
                <span>с {store.contacts.schedule.open[0]} по {store.contacts.schedule.open[1]}</span>
              </li>
              <li className="schedule" id="break">
                <span>{store.contacts.schedule.break.length || "без перерыва"}</span>
              </li>
            </ol>
          </li>
          <li id="site">
            <a href={"https://www." + store.contacts.site}>{store.contacts.site}</a>
          </li>
          <li id="email">
            <a href={href} onClick={showEmail}>
              {email || "Показать e-mail"}
            </a>
          </li>
        </ul>
        <section id="map">
          <img src={map} alt="" />
          <select id="branches"
                  name="branches">
            <option>Филиалы</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </section>
        <section id="store-description">
          <p>{store.description}</p>
        </section>
      </article>
        <menu id="store-info">
          <li>
            <a>Информация</a>
          </li>
          <li>
            <a>Фотогалерея</a>
          </li>
          <li>
            <a href='#' className="active">График работы</a>
          </li>
          <li>
            <a href='#'>Виды деятельности</a>
          </li>
        </menu>
    </main>
      <div id="ad">
      </div>
    </div>
  );
}

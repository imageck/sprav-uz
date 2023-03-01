export default function Locale() {
  return (
    <>
      <div className="locale">
        <label htmlFor="locale-select"
               className="visually-hidden">Выберите язык: </label>
        <select id="locale-select"
                name="locale">
          <option value="ru">Ру</option>
          <option value="uz">Oʻz</option>
          <option value="en">En</option>
        </select>
      </div>
      <menu className="locale">
        <li><a href='#'>Ру</a></li>
        <li><a href='#'>Oʻz</a></li>
        <li><a href='#'>En</a></li>
      </menu>
    </>
  );
}

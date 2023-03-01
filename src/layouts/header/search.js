export default function Search() {
  function search(e) {
    e.preventDefault();
    let fd = Object.fromEntries(new FormData(e.target));
    alert(JSON.stringify(fd));
  }

  return (
    <form onSubmit={search}
          id="search-form"
          autoComplete="off">
      <div>
        <label htmlFor="region"
               className="visually-hidden">Выберите регион: </label>
        <select id="region"
                name="region">
          <option>Ташкент</option>
        </select>
      </div>
      <div id="searchbox">
        <label htmlFor="search"
               className="visually-hidden">Поиск</label>
        <input type="search"
               id="search"
               name="q"
               placeholder="Поиск"
               inputMode="search"
               enterKeyHint="search"
        />
      </div>
    </form>
  );
}

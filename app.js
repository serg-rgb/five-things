const SPOTS = [
  { x: "2%", y: "6%", r: "-8deg", z: 1 },
  { x: "54%", y: "2%", r: "6deg", z: 1 },
  { x: "30%", y: "32%", r: "-2deg", z: 3 },
  { x: "0%", y: "56%", r: "7deg", z: 2 },
  { x: "50%", y: "58%", r: "-6deg", z: 2 },
];

const TIMES = [
  { id: "today", label: "Сегодня, 19:30" },
  { id: "tomorrow", label: "Завтра, 13:00" },
  { id: "sat", label: "Суббота, 11:00" },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function svg(body) {
  return `<svg viewBox="0 0 120 120" aria-hidden="true">${body}</svg>`;
}

function portrait(id) {
  const faces = {
    sasha: `
      <rect width="160" height="200" fill="#efe6d4"/>
      <path d="M16 200v-46c0-22 26-36 64-36s64 14 64 36v46z" fill="#d9c4a2"/>
      <path d="M80 122l-14 28 14-6 14 6z" fill="#f4efe4"/>
      <path d="M67 124c2 22 24 22 26 0" fill="#e7c2a6"/>
      <ellipse cx="47" cy="98" rx="6" ry="8" fill="#efc8ab"/>
      <ellipse cx="113" cy="98" rx="6" ry="8" fill="#efc8ab"/>
      <ellipse cx="80" cy="92" rx="34" ry="40" fill="#efc8ab"/>
      <path d="M46 90c0-38 14-52 34-52 22 0 36 16 36 42 0 6-1 12-4 16-8-22-20-30-32-28-14 2-26 16-34 22z" fill="#2a2420"/>
      <path d="M48 88c-2 14 4 22 8 18 0-8 0-14-2-18h-6z" fill="#2a2420"/>
      <path d="M112 86c4 14-2 24-8 18 2-8 2-14 2-18h6z" fill="#2a2420"/>
      <path d="M62 88h12M90 88h12" stroke="#2a2420" stroke-width="1.7" fill="none"/>
      <path d="M66 96h8M92 96h8" stroke="#2a2420" stroke-width="1.8"/>
      <path d="M80 98v12" stroke="#c48b74" stroke-width="1.5"/>
      <path d="M70 120c6 4 14 4 20 0" stroke="#9a5348" stroke-width="1.6" fill="none"/>
      <circle cx="99" cy="112" r="1.4" fill="#9a5348"/>`,
    lera: `
      <rect width="160" height="200" fill="#efe6d4"/>
      <path d="M14 200v-42c2-28 30-42 66-42s64 14 66 42v42z" fill="#3e4d40"/>
      <path d="M70 128c4 16 16 16 20 0v18H70z" fill="#e8c3a4"/>
      <ellipse cx="80" cy="96" rx="33" ry="38" fill="#f0c9ad"/>
      <path d="M42 108c-2-46 14-74 38-74 26 0 42 24 42 62 0 14-6 28-14 36-6-28-16-42-28-42s-24 16-30 36c-6-6-8-12-8-18z" fill="#1c1916"/>
      <path d="M46 104c8 10 14 8 16-2" stroke="#1c1916" stroke-width="6" fill="none"/>
      <path d="M114 104c-8 10-14 8-16-2" stroke="#1c1916" stroke-width="6" fill="none"/>
      <circle cx="112" cy="112" r="3.2" fill="#c6a15a"/>
      <path d="M64 96h10M90 96h10" stroke="#2a2420" stroke-width="1.8"/>
      <path d="M60 88c6-4 12-2 14 1M88 89c4-3 12-2 14 2" stroke="#2a2420" stroke-width="1.5" fill="none"/>
      <path d="M80 100v10" stroke="#c48b74" stroke-width="1.4"/>
      <path d="M72 118c5 3 11 3 16 0" stroke="#9a5348" stroke-width="1.6" fill="none"/>`,
    mark: `
      <rect width="160" height="200" fill="#efe6d4"/>
      <path d="M12 200v-40c4-30 32-44 68-44s64 14 68 44v40z" fill="#314056"/>
      <path d="M68 126c3 20 21 20 24 0" fill="#e4bea0"/>
      <ellipse cx="46" cy="100" rx="6" ry="8" fill="#e8c0a2"/>
      <ellipse cx="114" cy="100" rx="6" ry="8" fill="#e8c0a2"/>
      <ellipse cx="80" cy="96" rx="34" ry="40" fill="#e8c0a2"/>
      <path d="M48 86c2-36 16-50 32-50s32 14 34 48c-8-10-18-16-34-16s-26 6-32 18z" fill="#3a2a22"/>
      <path d="M50 108c6 16 18 26 30 28 12-2 24-12 30-28-8 6-16 8-30 8s-22-2-30-8z" fill="#6a4a3c" opacity="0.85"/>
      <path d="M62 92h12M90 92h12" stroke="#2a2420" stroke-width="1.8"/>
      <path d="M58 84h16M88 84h16" stroke="#3a2a22" stroke-width="1.8"/>
      <path d="M80 98v14" stroke="#c48b74" stroke-width="1.5"/>
      <path d="M70 124c6 3 14 3 20-1" stroke="#8d4d44" stroke-width="1.5" fill="none"/>`,
    nina: `
      <rect width="160" height="200" fill="#efe6d4"/>
      <path d="M16 200v-44c0-24 28-38 64-38s64 14 64 38v44z" fill="#8d3d34"/>
      <path d="M72 124c2 18 16 20 16 0" fill="#efc7aa"/>
      <ellipse cx="52" cy="102" rx="5" ry="7" fill="#f0c8ac"/>
      <ellipse cx="108" cy="102" rx="5" ry="7" fill="#f0c8ac"/>
      <ellipse cx="80" cy="100" rx="32" ry="38" fill="#f0c8ac"/>
      <circle cx="80" cy="52" r="16" fill="#4a3024"/>
      <path d="M50 96c2-34 12-52 30-56 20-4 36 10 40 40-6-20-16-30-34-28-16 2-28 16-36 44z" fill="#4a3024"/>
      <path d="M108 70c10 8 14 20 12 34" stroke="#4a3024" stroke-width="4" fill="none"/>
      <path d="M62 100h10M90 100h10" stroke="#2a2420" stroke-width="1.8"/>
      <path d="M58 92c6-4 14-3 16 0M88 92c4-3 12-2 16 1" stroke="#4a3024" stroke-width="1.5" fill="none"/>
      <path d="M80 104v10" stroke="#c48b74" stroke-width="1.4"/>
      <path d="M72 122c5 4 12 4 17 0" stroke="#9a5348" stroke-width="1.6" fill="none"/>
      <circle cx="96" cy="116" r="1.3" fill="#9a5348"/>`,
  };
  return `<svg viewBox="0 0 160 200" aria-hidden="true">${faces[id]}</svg>`;
}

const DRAW = {
  bowl: svg(`
    <ellipse class="sand" cx="60" cy="86" rx="30" ry="8"/>
    <path class="cream" d="M28 62c2 20 14 32 32 32s30-12 32-32"/>
    <path class="ink" d="M28 62c2 20 14 32 32 32s30-12 32-32"/>
    <ellipse class="brass" cx="60" cy="62" rx="32" ry="12"/>
    <ellipse class="ink" cx="60" cy="62" rx="32" ry="12"/>
    <path class="thin" d="M64 56c2 8-4 14 0 24"/>
    <path class="scar" d="M70 58c4 2 6 8 2 14"/>`),
  ticket: svg(`
    <path class="paper" d="M30 34h62c4 0 8 6 8 10v32c0 4-4 10-8 10H30c-2 0-6-2-6-6V40c0-4 4-6 6-6z"/>
    <path class="ink" d="M30 34h62c4 0 8 6 8 10v32c0 4-4 10-8 10H30c-2 0-6-2-6-6V40c0-4 4-6 6-6z"/>
    <rect class="red" x="31" y="36" width="7" height="48"/>
    <path class="thin" d="M46 48h36M46 58h28M46 68h20"/>
    <circle class="linen-hole" cx="34" cy="46" r="2" fill="#e6dcc8"/>
    <circle cx="34" cy="58" r="2" fill="#e6dcc8"/>
    <circle cx="34" cy="70" r="2" fill="#e6dcc8"/>`),
  player: svg(`
    <rect class="navy" x="22" y="38" width="76" height="46" rx="5"/>
    <rect class="ink" x="22" y="38" width="76" height="46" rx="5"/>
    <rect class="paper" x="30" y="46" width="50" height="24" rx="2"/>
    <rect class="ink" x="30" y="46" width="50" height="24" rx="2"/>
    <circle class="navy" cx="44" cy="58" r="7"/>
    <circle class="navy" cx="66" cy="58" r="7"/>
    <circle class="brass" cx="44" cy="58" r="2"/>
    <circle class="brass" cx="66" cy="58" r="2"/>
    <rect class="brass" x="34" y="74" width="42" height="5" rx="1"/>
    <path class="light" d="M86 48h8v6h-8"/>`),
  key: svg(`
    <circle class="brass" cx="46" cy="48" r="16"/>
    <circle class="ink" cx="46" cy="48" r="16"/>
    <circle cx="46" cy="48" r="6" fill="#e6dcc8"/>
    <path class="brass" d="M60 48h36v8H60z"/>
    <path class="ink" d="M60 48h36v8H60z"/>
    <path class="brass" d="M82 56v12h8V56zM96 56v8h6v-8z"/>
    <path class="ink" d="M82 56v12h8V56zM96 56v8h6v-8z"/>
    <path class="red" d="M18 70h22l4 8H22z"/>
    <circle cx="28" cy="78" r="2" fill="#f7f3ea"/>`),
  stone: svg(`
    <path class="sand" d="M28 68c-2-24 18-36 40-34 26 2 36 20 30 40-6 22-28 30-48 24-16-6-20-12-22-30z"/>
    <path class="ink" d="M28 68c-2-24 18-36 40-34 26 2 36 20 30 40-6 22-28 30-48 24-16-6-20-12-22-30z"/>
    <path class="paper" d="M58 52c12-8 26 2 18 16-8-2-14 2-18-16z"/>
    <path class="thin" d="M62 58c6 2 12 8 10 14"/>`),
  lighter: svg(`
    <rect class="paper" x="40" y="40" width="40" height="52" rx="4"/>
    <rect class="ink" x="40" y="40" width="40" height="52" rx="4"/>
    <path class="brass" d="M40 52h40v8H40z"/>
    <circle class="inkfill" cx="60" cy="36" r="6"/>
    <path class="thin" d="M52 36h16"/>
    <path class="red" d="M57 36c0-10 8-12 8-4 0 3-2 5-4 6-2-1-4-3-4-2z"/>
    <path class="thin" d="M58 46h4"/>`),
  glasses: svg(`
    <circle class="paper" cx="42" cy="62" r="16"/>
    <circle class="paper" cx="80" cy="62" r="16"/>
    <circle class="ink" cx="42" cy="62" r="16"/>
    <circle class="ink" cx="80" cy="62" r="16"/>
    <path class="ink" d="M58 62h6"/>
    <path class="ink" d="M26 58c-6 2-10 10-8 16"/>
    <path class="thin" d="M96 60h8"/>`),
  envelope: svg(`
    <path class="paper" d="M24 42h72v42H24z"/>
    <path class="ink" d="M24 42h72v42H24z"/>
    <path class="cream" d="M24 42l36 24 36-24"/>
    <path class="ink" d="M24 42l36 24 36-24"/>
    <path class="thin" d="M24 84l24-16M96 84L72 68"/>`),
  matches: svg(`
    <rect class="red" x="36" y="40" width="40" height="50" rx="2"/>
    <rect class="ink" x="36" y="40" width="40" height="50" rx="2"/>
    <rect class="paper" x="42" y="28" width="28" height="22"/>
    <rect class="ink" x="42" y="28" width="28" height="22"/>
    <path class="brass" d="M78 70l16 8-2 6-16-6z"/>
    <path class="ink" d="M78 70l16 8-2 6-16-6z"/>
    <circle class="inkfill" cx="96" cy="76" r="3"/>`),
  earring: svg(`
    <path class="ink" d="M78 24c8 0 12 8 8 14"/>
    <path class="brass" d="M70 40c0 16 20 16 20 0 0-6-4-10-10-10s-10 4-10 10z"/>
    <path class="ink" d="M70 40c0 16 20 16 20 0 0-6-4-10-10-10s-10 4-10 10z"/>
    <circle class="paper" cx="80" cy="40" r="4"/>
    <path class="thin" d="M80 50v10"/>`),
  cinema: svg(`
    <path class="inkfill" d="M28 46h64l6 8v24c0 2-2 4-4 4H32c-2 0-8-2-8-6V54z"/>
    <path class="light" d="M34 58h52M34 68h36"/>
    <path class="brass" d="M28 46h64v6H28z"/>
    <path class="light" d="M36 40c4 4 8 4 12 0M52 40c4 4 8 4 12 0"/>`),
  shears: svg(`
    <circle class="paper" cx="42" cy="78" r="10"/>
    <circle class="paper" cx="62" cy="78" r="10"/>
    <circle class="ink" cx="42" cy="78" r="10"/>
    <circle class="ink" cx="62" cy="78" r="10"/>
    <circle cx="42" cy="78" r="3" fill="#e6dcc8"/>
    <circle cx="62" cy="78" r="3" fill="#e6dcc8"/>
    <path class="brass" d="M48 72L78 28l8 6L56 74zM56 72L86 36l-6 8-28 30z"/>
    <path class="ink" d="M48 72L78 28l8 6L56 74zM56 72L86 36l-6 8-28 30z"/>`),
  thread: svg(`
    <rect class="paper" x="34" y="28" width="52" height="64" rx="2"/>
    <rect class="ink" x="34" y="28" width="52" height="64" rx="2"/>
    <ellipse class="navy" cx="60" cy="58" rx="16" ry="18"/>
    <ellipse cx="60" cy="58" rx="6" ry="7" fill="#f7f3ea"/>
    <path class="thin" d="M34 40h52" stroke="#314056"/>`),
  cards: svg(`
    <rect class="paper" x="30" y="36" width="36" height="50" rx="3" transform="rotate(-14 48 61)"/>
    <rect class="ink" x="30" y="36" width="36" height="50" rx="3" transform="rotate(-14 48 61)"/>
    <rect class="paper" x="46" y="32" width="36" height="50" rx="3" transform="rotate(8 64 57)"/>
    <rect class="ink" x="46" y="32" width="36" height="50" rx="3" transform="rotate(8 64 57)"/>
    <path class="red" d="M68 46l5 7-5 7-5-7z" transform="rotate(8 64 57)"/>`),
  flashlight: svg(`
    <path class="gold" d="M34 50h18l10-8v36l-10-8H34z"/>
    <path class="ink" d="M34 50h18l10-8v36l-10-8H34z"/>
    <rect class="navy" x="62" y="46" width="28" height="28" rx="4"/>
    <rect class="ink" x="62" y="46" width="28" height="28" rx="4"/>
    <path class="light" d="M70 60h12"/>
    <path class="brass" d="M22 54h12v12H22z"/>`),
  napkin: svg(`
    <path class="paper" d="M30 40l48-8 16 18-10 36-46 8z"/>
    <path class="ink" d="M30 40l48-8 16 18-10 36-46 8z"/>
    <path class="thin" d="M40 52h32M38 62h28M40 72h18"/>
    <path class="red" d="M78 36l6 4-10 2z"/>`),
  watch: svg(`
    <rect class="navy" x="50" y="22" width="20" height="22" rx="3"/>
    <rect class="navy" x="50" y="76" width="20" height="24" rx="3"/>
    <circle class="paper" cx="60" cy="60" r="24"/>
    <circle class="ink" cx="60" cy="60" r="24"/>
    <circle class="inkfill" cx="60" cy="60" r="2.5"/>
    <path class="ink" d="M60 60V42"/>
    <path class="thin" d="M60 42v-4M78 60h-4M60 78v-4M42 60h4"/>`),
  seeds: svg(`
    <path class="paper" d="M40 36h28l14 58H28z"/>
    <path class="ink" d="M40 36h28l14 58H28z"/>
    <ellipse class="brass" cx="48" cy="78" rx="5" ry="3"/>
    <ellipse class="brass" cx="62" cy="84" rx="5" ry="3"/>
    <ellipse class="brass" cx="70" cy="74" rx="4" ry="2.6"/>
    <path class="thin" d="M44 36c4 8 16 8 22 0"/>`),
  tile: svg(`
    <path class="blue" d="M34 46l40-16 22 18-8 36-44 10z"/>
    <path class="ink" d="M34 46l40-16 22 18-8 36-44 10z"/>
    <path class="paper" d="M48 42l18 8-6 20-16-4z"/>
    <path class="thin" d="M52 50l10 28"/>`),
  postcard: svg(`
    <rect class="paper" x="22" y="36" width="76" height="50"/>
    <rect class="ink" x="22" y="36" width="76" height="50"/>
    <path class="blue" d="M22 64c10-8 18-8 28 0s20 8 28 0 12-6 20-2v24H22z"/>
    <rect class="red" x="80" y="42" width="12" height="14"/>
    <path class="thin" d="M30 48h28M30 54h20"/>`),
  whistle: svg(`
    <path class="brass" d="M24 58h46l18-12v28L70 70H24c-6 0-10-6-10-12s4-12 10-12z"/>
    <path class="ink" d="M24 58h46l18-12v28L70 70H24c-6 0-10-6-10-12s4-12 10-12z"/>
    <circle cx="34" cy="64" r="4" fill="#e6dcc8"/>
    <path class="thin" d="M88 52v16"/>`),
  honey: svg(`
    <path class="gold" d="M42 48h36l8 40H34z"/>
    <path class="ink" d="M42 48h36l8 40H34z"/>
    <rect class="red" x="40" y="40" width="40" height="10"/>
    <rect class="ink" x="40" y="40" width="40" height="10"/>
    <path class="paper" d="M46 34h28v8H46z"/>
    <path class="ink" d="M46 34h28v8H46z"/>
    <ellipse class="paper" cx="60" cy="70" rx="6" ry="10"/>`),
  pencil: svg(`
    <path class="brass" d="M22 70l62-28 14 10-62 28z"/>
    <path class="ink" d="M22 70l62-28 14 10-62 28z"/>
    <path class="paper" d="M22 70l10-4-6 10z"/>
    <path class="inkfill" d="M22 70l6-2-4 6z"/>
    <path class="thin" d="M78 46l8 14"/>`),
};

const THINGS = {
  bowl: { short: "Пиала", name: "Треснутая пиала", story: "Треснула в переезде. Пью из неё каждое утро." },
  ticket: { short: "Билет", name: "Билет до Варшавы", story: "Обратный так и лежит." },
  player: { short: "Плеер", name: "Кассетный плеер", story: "Внутри чужая плёнка." },
  key: { short: "Ключ", name: "Ключ с красной биркой", story: "От двери, которой больше нет." },
  stone: { short: "Галька", name: "Морская галька", story: "Третий год в кармане пальто." },
  lighter: { short: "Зажигалка", name: "Чужая зажигалка", story: "Не моя. Лежит с лета." },
  glasses: { short: "Очки", name: "Очки без виска", story: "Второй висок остался в такси." },
  envelope: { short: "Конверт", name: "Конверт без адреса", story: "Письмо внутри дописано." },
  matches: { short: "Спички", name: "Почти пустая коробка", story: "Одной спичкой зажигаю плиту." },
  earring: { short: "Серьга", name: "Серьга без пары", story: "Вторая осталась в трамвае, в марте." },
  cinema: { short: "Билет", name: "Вчерашний билет", story: "Фильм просидела одна до титров." },
  shears: { short: "Секатор", name: "Маленький секатор", story: "Режу чужие букеты. Свои не покупаю." },
  thread: { short: "Нитка", name: "Синяя нитка", story: "Зашиваю всё одним цветом, даже если ткань другая." },
  cards: { short: "Колода", name: "Колода без туза", story: "Туз червей отдал человеку в поезде." },
  flashlight: { short: "Фонарь", name: "Карманный фонарь", story: "Свет жёлтый, батарейка чужая." },
  napkin: { short: "Салфетка", name: "Рецепт на салфетке", story: "Три строки. Почерк не мой." },
  watch: { short: "Часы", name: "Часы без минутной", story: "Опоздания измеряю приблизительно." },
  seeds: { short: "Семечки", name: "Кулёк семечек", story: "Открыт в кармане уже неделю." },
  tile: { short: "Плитка", name: "Осколок плитки", story: "С пола подъезда, который ремонтируют третий год." },
  postcard: { short: "Открытка", name: "Открытка без марки", story: "Написана мне. Отправить забыли." },
  whistle: { short: "Свисток", name: "Металлический свисток", story: "С волейбола, куда больше не хожу." },
  honey: { short: "Мёд", name: "Банка мёда", story: "Густой. Ложка стоит." },
  pencil: { short: "Карандаш", name: "Плотницкий карандаш", story: "Плоский, чтобы не скатывался со стола." },
};

const LIBRARY = ["bowl", "ticket", "player", "key", "stone", "lighter", "glasses", "envelope"];

const PEOPLE = [
  {
    id: "lera",
    name: "Лера",
    age: 31,
    from: "с Октябрьской",
    place: "У окна на Октябрьской",
    g: "f",
    face: "lera",
    answered: true,
    things: ["matches", "earring", "cinema", "shears", "thread"],
  },
  {
    id: "mark",
    name: "Марк",
    age: 29,
    from: "с Грушевки",
    place: "Скамья у воды на Грушевке",
    g: "m",
    face: "mark",
    answered: false,
    things: ["cards", "flashlight", "napkin", "watch", "seeds"],
  },
  {
    id: "nina",
    name: "Нина",
    age: 34,
    from: "с Немиги",
    place: "Двор на Немиге",
    g: "f",
    face: "nina",
    answered: false,
    things: ["tile", "postcard", "whistle", "honey", "pencil"],
  },
];

function fresh() {
  return {
    screen: "intro",
    tab: "look",
    name: "Саша",
    slots: ["bowl", "ticket", "player", "key", "stone"],
    renames: {},
    reactions: {},
    sent: {},
    left: {},
    meeting: {},
    lookingAt: "lera",
    sheet: null,
    seal: "up",
    faceUp: true,
    toast: "",
    draftWhen: "sat",
  };
}

let state = fresh();
let toastTimer = 0;

function personById(id) {
  return PEOPLE.find((person) => person.id === id);
}

function thingName(id) {
  const custom = state.renames[id];
  if (custom && custom.trim()) return custom.trim();
  return THINGS[id].name;
}

function thingShort(id) {
  const custom = state.renames[id];
  if (custom && custom.trim()) return custom.trim();
  return THINGS[id].short;
}

function displayName() {
  return state.name.trim() || "Без имени";
}

function reactionMap(personId) {
  return state.reactions[personId] || {};
}

function doneCount(person) {
  const map = reactionMap(person.id);
  return person.things.filter((id) => map[id]).length;
}

function incomingMarks() {
  const kinds = ["know", "ask", "pass", "ask", "know"];
  const marks = {};
  state.slots.forEach((id, index) => {
    marks[id] = kinds[index];
  });
  return marks;
}

function verbs(person) {
  if (person.g === "f") return { know: "Узнала", ask: "Спросила", pass: "Мимо" };
  return { know: "Узнал", ask: "Спросил", pass: "Мимо" };
}

function replyLines(person) {
  const marks = incomingMarks();
  const groups = { know: [], ask: [], pass: [] };
  state.slots.forEach((id) => {
    const name = thingName(id);
    groups[marks[id]].push(name.charAt(0).toLowerCase() + name.slice(1));
  });
  const words = verbs(person);
  return ["know", "ask", "pass"]
    .filter((kind) => groups[kind].length)
    .map((kind) => `${words[kind]}: ${groups[kind].join(", ")}.`);
}

function mutualPeople() {
  return PEOPLE.filter((person) => state.sent[person.id] && person.answered);
}

function stamp(kind) {
  if (!kind) return "";
  return `<i class="stamp ${kind}" aria-hidden="true"></i>`;
}

function objectSpot(id, index, { kind, act, attrs }) {
  const spot = SPOTS[index];
  return `
    <div class="spot" style="--x:${spot.x};--y:${spot.y};--z:${spot.z}">
      <button type="button" class="thing ${kind || ""}" data-act="${act}" ${attrs} aria-label="${esc(thingName(id))}">
        <span class="art">
          <span class="tilt" style="--r:${spot.r}">${DRAW[id]}</span>
          ${stamp(kind)}
        </span>
        <span class="cap">${esc(thingShort(id))}</span>
      </button>
    </div>`;
}

function tableOf(ids, options) {
  const spots = ids.map((id, index) => objectSpot(id, index, {
    kind: options.kind(id),
    act: options.act,
    attrs: options.attrs(id, index),
  })).join("");
  return `<div class="tabletop">${spots}</div>`;
}

function ticks(person) {
  const map = reactionMap(person.id);
  return `<div class="ticks">${person.things.map((id) => `<i class="${map[id] || ""}"></i>`).join("")}</div>`;
}

function nav() {
  const items = [
    ["table", "Стол"],
    ["look", "Смотреть"],
    ["open", "Открыто"],
  ];
  return `<nav class="nav">${items.map(([id, label]) => `
    <button type="button" data-act="tab" data-tab="${id}" class="${state.tab === id ? "on" : ""}">${label}</button>
  `).join("")}</nav>`;
}

function chrome({ head, stage, dock = "", withNav = true }) {
  const sheetOpen = Boolean(state.sheet);
  return `
    ${head ? `<header class="head">${head}</header>` : ""}
    <div class="stage">${stage}</div>
    ${dock && !sheetOpen ? `<div class="dock">${dock}</div>` : ""}
    ${withNav && !sheetOpen ? nav() : ""}
    ${sheetHtml()}
    ${toastHtml()}`;
}

function intro() {
  return `
    <section class="intro">
      <div>
        <p class="kicker">знакомства</p>
        <h1 class="display">Пять<br>вещей</h1>
        <p class="lede">На стол кладут пять предметов. Имя и лицо появляются, когда вы оба ответили на каждый.</p>
      </div>
      <button type="button" class="primary" data-act="start">Собрать стол</button>
    </section>`;
}

function compose() {
  return chrome({
    withNav: false,
    head: `
      <p class="kicker">твой стол</p>
      <h1>Пять вещей</h1>
      <p class="subhead">Нажми на предмет, если хочешь заменить его или переименовать.</p>`,
    stage: tableOf(state.slots, {
      kind: () => "",
      act: "edit",
      attrs: (_id, index) => `data-i="${index}"`,
    }),
    dock: `<button type="button" class="primary" data-act="to-seal">Дальше, к лицу</button>`,
  });
}

function seal() {
  const down = state.seal === "down";
  return `
    <section class="seal">
      <header>
        <p class="kicker">лицо</p>
        <h1 class="title">${down ? "Рубашкой вверх" : "Твоё лицо"}</h1>
      </header>
      <div class="seal-card">
        <div class="polaroid ${down ? "is-down" : ""}">
          <div class="polaroid-inner">
            <div class="front">
              <div class="photo">${portrait("sasha")}</div>
              <p class="pname live">${esc(displayName())}</p>
            </div>
            <div class="backface">
              <div class="cardback"></div>
              <p class="pname">лицо</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label class="field">
          <span>как тебя называть</span>
          <input id="your-name" data-field="name" maxlength="24" value="${esc(state.name)}" autocomplete="off">
        </label>
        <p class="hint">Другие увидят имя вместе с лицом, после пяти ответов на твой стол.</p>
        ${down
          ? `<button type="button" class="primary" data-act="enter">Смотреть чужие столы</button>`
          : `<button type="button" class="primary" data-act="flip">Положить рубашкой вверх</button>`}
        <button type="button" class="textbtn" data-act="back-compose">К вещам</button>
      </div>
    </section>
    ${toastHtml()}`;
}

function lookTab() {
  const person = personById(state.lookingAt);
  if (state.sent[person.id] && person.answered) return reveal(person);
  if (state.sent[person.id]) return waiting(person);
  return browsing(person);
}

function browsing(person) {
  const left = 5 - doneCount(person);
  return chrome({
    head: `
      <p class="kicker">стол</p>
      <div class="headrow">
        <h1>${esc(person.name)}</h1>
        <p class="frac"><b>${doneCount(person)}</b><span>из 5</span></p>
      </div>
      ${ticks(person)}`,
    stage: tableOf(person.things, {
      kind: (id) => reactionMap(person.id)[id] || "",
      act: "open-thing",
      attrs: (id) => `data-who="${person.id}" data-id="${id}"`,
    }),
    dock: `<button type="button" class="primary" data-act="send" data-id="${person.id}" ${left ? "disabled" : ""}>${left ? `Ещё ${left}` : "Отдать реакции"}</button>`,
  });
}

function waiting(person) {
  const next = PEOPLE.find((item) => !state.sent[item.id]);
  return chrome({
    head: `
      <p class="kicker">отдано</p>
      <h1>${esc(person.name)}</h1>
      <p class="subhead">Лицо откроется, когда ${person.g === "f" ? "она" : "он"} ответит на твой стол.</p>`,
    stage: `
      ${tableOf(person.things, {
        kind: (id) => reactionMap(person.id)[id] || "",
        act: "sealed",
        attrs: () => "",
      })}
      <p class="band">Отметки уже лежат на вещах.</p>`,
    dock: next
      ? `<button type="button" class="primary" data-act="next">Следующий стол</button>`
      : `<p class="hint">Дальше столов нет.</p>`,
  });
}

function reveal(person) {
  const asks = person.things
    .filter((id) => reactionMap(person.id)[id] === "ask")
    .map((id) => ({ name: thingName(id), story: THINGS[id].story }));
  const meeting = state.meeting[person.id];
  const left = state.left[person.id];
  const next = PEOPLE.find((item) => !state.sent[item.id]);
  const nextButton = next ? `<button type="button" class="textbtn" data-act="next">Следующий стол</button>` : "";
  const stories = asks.length
    ? asks.map((item) => `
        <h3>${esc(item.name)}</h3>
        <p>${esc(item.story)}</p>`).join("")
    : `<p>Ты не спросил ни про одну вещь. Истории остались при ${person.g === "f" ? "ней" : "нём"}.</p>`;
  const lines = replyLines(person).map((line) => `<li>${esc(line)}</li>`).join("");
  let dock = "";
  let tail = "";
  if (meeting) {
    tail = nextButton;
  } else if (left) {
    tail = `<p class="hint">Вещи оставлены. Встречи не будет.</p>${nextButton}`;
  } else {
    dock = `<button type="button" class="primary" data-act="meet" data-id="${person.id}">Поставить встречу</button>`;
    tail = `${nextButton}<button type="button" class="textbtn" data-act="leave" data-id="${person.id}">Оставить вещи</button>`;
  }
  const appointment = meeting ? `
    <div class="appointment">
      <p class="kicker">встреча</p>
      <p class="when">${esc(meeting.label)}</p>
      <p class="where">${esc(person.place)}</p>
    </div>` : "";
  return chrome({
    head: `<p class="kicker">открыто</p>`,
    stage: `
      <div class="reveal-card">
        <div class="polaroid">
          <div class="polaroid-inner">
            <div class="front">
              <div class="photo">${portrait(person.face)}</div>
              <p class="pname">${esc(person.name)}</p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="who">${esc(person.name)} <span>${person.age}</span></h2>
      <p class="from">${esc(person.from)}</p>
      ${appointment}
      <section class="block">
        <p class="kicker">если спросить</p>
        ${stories}
      </section>
      <section class="block">
        <p class="kicker">${esc(person.name)} про твой стол</p>
        <ul class="lines">${lines}</ul>
      </section>
      ${tail}`,
    dock,
  });
}

function tableTab() {
  const viewers = mutualPeople();
  const marks = viewers.length ? incomingMarks() : {};
  return chrome({
    head: `
      <p class="kicker">твой стол</p>
      <div class="headrow">
        <div>
          <h1>${esc(displayName())}</h1>
          <p class="subhead">${viewers.length ? "На вещи уже ответили." : "Пока на вещи никто не ответил."}</p>
        </div>
        <button type="button" class="peek-hit" data-act="peek" aria-label="${state.faceUp ? "Скрыть лицо" : "Показать лицо"}">
          <span class="polaroid peek ${state.faceUp ? "" : "is-down"}">
            <span class="polaroid-inner">
              <span class="front">
                <span class="photo">${portrait("sasha")}</span>
              </span>
              <span class="backface">
                <span class="cardback"></span>
              </span>
            </span>
          </span>
        </button>
      </div>`,
    stage: `
      ${viewers.length ? `
        <div class="legend">
          <span><i class="dot know"></i>узнала</span>
          <span><i class="dot ask"></i>спросила</span>
          <span><i class="dot pass"></i>мимо</span>
        </div>` : ""}
      ${tableOf(state.slots, {
        kind: (id) => marks[id] || "",
        act: "own",
        attrs: () => "",
      })}`,
    dock: `<button type="button" class="textbtn" data-act="ask-reset">Разобрать стол</button>`,
  });
}

function statusLine(person) {
  if (!person.answered) return "ждёт, пока посмотрит твой стол";
  if (state.meeting[person.id]) return `${state.meeting[person.id].label}. ${person.place}`;
  if (state.left[person.id]) return "без встречи";
  return "лицо открыто";
}

function openTab() {
  const rows = PEOPLE.filter((person) => state.sent[person.id]);
  const body = rows.length ? `<div class="list">${rows.map((person) => `
    <button type="button" class="row" data-act="goto" data-id="${person.id}">
      <span class="mini">
        ${person.answered
          ? `<span class="photo">${portrait(person.face)}</span>`
          : `<span class="cardback"></span>`}
      </span>
      <span>
        <strong>${esc(person.name)}</strong>
        <em>${esc(statusLine(person))}</em>
      </span>
    </button>`).join("")}</div>` : `
    <div class="empty">
      <div class="mini"><div class="cardback"></div></div>
      <p>Лицо появляется здесь, когда вы оба ответили на все пять.</p>
    </div>`;
  return chrome({
    head: `
      <p class="kicker">после пяти</p>
      <h1>Открыто</h1>`,
    stage: body,
  });
}

function sheetHtml() {
  const sheet = state.sheet;
  if (!sheet) return "";
  if (sheet.type === "react") return reactSheet(sheet);
  if (sheet.type === "edit") return editSheet(sheet);
  if (sheet.type === "meet") return meetSheet(sheet);
  if (sheet.type === "reset") return resetSheet();
  return "";
}

function reactSheet(sheet) {
  const current = reactionMap(sheet.personId)[sheet.thingId];
  const options = [
    ["know", "Узнаю", "у меня так же"],
    ["ask", "Спросить", "хочу, как это вышло"],
    ["pass", "Мимо", "не моё"],
  ];
  return `
    <button type="button" class="backdrop" data-act="close" aria-label="Закрыть"></button>
    <div class="sheet" role="dialog" aria-modal="true">
      <p class="kicker">вещь</p>
      <h2>${esc(thingName(sheet.thingId))}</h2>
      ${options.map(([kind, title, gloss]) => `
        <button type="button" class="choice ${current === kind ? "on" : ""}" data-act="react" data-kind="${kind}" data-who="${sheet.personId}" data-id="${sheet.thingId}">
          <b>${title}</b>
          <small>${gloss}</small>
        </button>`).join("")}
    </div>`;
}

function editSheet(sheet) {
  const id = state.slots[sheet.index];
  return `
    <button type="button" class="backdrop" data-act="close" aria-label="Закрыть"></button>
    <div class="sheet" role="dialog" aria-modal="true">
      <p class="kicker">название</p>
      <label class="field">
        <span>как ты зовёшь эту вещь</span>
        <input data-field="rename" data-id="${id}" maxlength="40" value="${esc(thingName(id))}" autocomplete="off">
      </label>
      <p class="kicker" style="margin-top:16px">заменить</p>
      <div class="picker">
        ${LIBRARY.map((item) => `
          <button type="button" data-act="swap" data-i="${sheet.index}" data-id="${item}" class="${item === id ? "on" : ""}">
            <span class="art"><span class="tilt" style="--r:0deg">${DRAW[item]}</span></span>
            <span class="cap">${esc(thingShort(item))}</span>
          </button>`).join("")}
      </div>
    </div>`;
}

function meetSheet(sheet) {
  const person = personById(sheet.personId);
  return `
    <button type="button" class="backdrop" data-act="close" aria-label="Закрыть"></button>
    <div class="sheet" role="dialog" aria-modal="true">
      <p class="kicker">время</p>
      <h2>${esc(person.place)}</h2>
      ${TIMES.map((time) => `
        <button type="button" class="time ${state.draftWhen === time.id ? "on" : ""}" data-act="draft-when" data-when="${time.id}">${esc(time.label)}</button>
      `).join("")}
      <button type="button" class="primary" data-act="confirm-meet" data-id="${person.id}" style="margin-top:16px">Поставить</button>
    </div>`;
}

function resetSheet() {
  return `
    <button type="button" class="backdrop" data-act="close" aria-label="Закрыть"></button>
    <div class="sheet" role="dialog" aria-modal="true">
      <p class="kicker">стол</p>
      <h2>Разобрать?</h2>
      <p class="hint">Вещи, ответы и встречи сотрутся.</p>
      <button type="button" class="primary" data-act="reset">Разобрать стол</button>
    </div>`;
}

function toastHtml() {
  if (!state.toast) return "";
  return `<div class="toast" role="status">${esc(state.toast)}</div>`;
}

function showToast(text) {
  state.toast = text;
  render({ keep: true });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = "";
    render({ keep: true });
  }, 1700);
}

function render({ keep = false } = {}) {
  const root = document.getElementById("root");
  const previous = document.querySelector(".stage");
  const scroll = keep && previous ? previous.scrollTop : 0;
  const active = document.activeElement;
  const field = active && active.dataset ? active.dataset.field : "";
  const caret = field && typeof active.selectionStart === "number" ? active.selectionStart : null;
  root.innerHTML = `<div class="app" data-screen="${state.screen}">${screenHtml()}</div>`;
  const next = document.querySelector(".stage");
  if (keep && next) next.scrollTop = scroll;
  if (field) {
    const again = document.querySelector(`[data-field="${field}"]`);
    if (again) {
      again.focus();
      if (caret !== null && again.setSelectionRange) {
        const point = Math.min(caret, again.value.length);
        again.setSelectionRange(point, point);
      }
    }
  }
}

function screenHtml() {
  if (state.screen === "intro") return intro();
  if (state.screen === "compose") return compose();
  if (state.screen === "seal") return seal();
  if (state.tab === "table") return tableTab();
  if (state.tab === "open") return openTab();
  return lookTab();
}

function sendReactions(personId) {
  const person = personById(personId);
  const map = reactionMap(personId);
  if (person.things.some((id) => !map[id])) return;
  state.sent[personId] = true;
  state.sheet = null;
  render();
}

function onClick(event) {
  const target = event.target.closest("[data-act]");
  if (!target) return;
  const act = target.dataset.act;
  if (act === "start") {
    state.screen = "compose";
    render();
  } else if (act === "to-seal") {
    state.screen = "seal";
    state.seal = "up";
    render();
  } else if (act === "back-compose") {
    state.screen = "compose";
    state.sheet = null;
    render();
  } else if (act === "flip") {
    state.seal = "down";
    render();
  } else if (act === "enter") {
    state.screen = "app";
    state.tab = "look";
    state.lookingAt = "lera";
    render();
  } else if (act === "tab") {
    state.tab = target.dataset.tab;
    state.sheet = null;
    render();
  } else if (act === "edit") {
    state.sheet = { type: "edit", index: Number(target.dataset.i) };
    render({ keep: true });
  } else if (act === "swap") {
    const index = Number(target.dataset.i);
    const id = target.dataset.id;
    const other = state.slots.indexOf(id);
    if (other === index) return;
    if (other >= 0) {
      const current = state.slots[index];
      state.slots[index] = id;
      state.slots[other] = current;
    } else {
      state.slots[index] = id;
    }
    state.sheet = { type: "edit", index };
    render({ keep: true });
  } else if (act === "open-thing") {
    const personId = target.dataset.who;
    if (state.sent[personId]) {
      showToast("Реакции уже отданы");
      return;
    }
    state.sheet = { type: "react", personId, thingId: target.dataset.id };
    render({ keep: true });
  } else if (act === "react") {
    const personId = target.dataset.who;
    state.reactions[personId] = reactionMap(personId);
    state.reactions[personId][target.dataset.id] = target.dataset.kind;
    state.sheet = null;
    render({ keep: true });
  } else if (act === "send") {
    sendReactions(target.dataset.id);
  } else if (act === "sealed" || act === "own") {
    showToast(act === "own" ? "Это твой стол" : "Реакции уже отданы");
  } else if (act === "next") {
    const next = PEOPLE.find((person) => !state.sent[person.id]);
    if (!next) return;
    state.lookingAt = next.id;
    state.tab = "look";
    state.sheet = null;
    render();
  } else if (act === "meet") {
    state.sheet = { type: "meet", personId: target.dataset.id };
    state.draftWhen = state.draftWhen || "sat";
    render({ keep: true });
  } else if (act === "draft-when") {
    state.draftWhen = target.dataset.when;
    render({ keep: true });
  } else if (act === "confirm-meet") {
    const time = TIMES.find((item) => item.id === state.draftWhen) || TIMES[2];
    state.meeting[target.dataset.id] = time;
    state.sheet = null;
    render();
  } else if (act === "leave") {
    state.left[target.dataset.id] = true;
    render();
  } else if (act === "goto") {
    state.lookingAt = target.dataset.id;
    state.tab = "look";
    state.sheet = null;
    render();
  } else if (act === "peek") {
    state.faceUp = !state.faceUp;
    render({ keep: true });
  } else if (act === "ask-reset") {
    state.sheet = { type: "reset" };
    render({ keep: true });
  } else if (act === "reset") {
    state = fresh();
    render();
  } else if (act === "close") {
    state.sheet = null;
    render({ keep: true });
  }
}

function onInput(event) {
  const field = event.target.dataset.field;
  if (field === "name") {
    state.name = event.target.value;
    const live = document.querySelector(".pname.live");
    if (live) live.textContent = displayName();
  } else if (field === "rename") {
    state.renames[event.target.dataset.id] = event.target.value;
  }
}

document.getElementById("root").addEventListener("click", onClick);
document.getElementById("root").addEventListener("input", onInput);
render();

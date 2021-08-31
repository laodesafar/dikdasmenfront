const tentangList = [
  {
    text: "Sejarah",
    href: "/tentang/sejarah",
    dropdown: [
      {
        text: "coba 1",
      },
      { text: "coba 2" },
    ],
  },
  { text: "Visi dan Misi", href: "/tentang/visimisi" },
  { text: "Struktur Organisasi", href: "/tentang/struktur" },
  {
    text: "Staf Dikdasmen",
    href: "/tentang/staf",
    dropdown: [
      {
        text: "coba 1",
      },
      { text: "coba 2" },
    ],
  },
];

tentangList.map((list) => {
  console.log(`${list.text}, ${list.href}`);
  list.dropdown?.map((drop) => {
    console.log(`${drop.text}`);
  });
});

import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Česko",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/04/23/19/52/castle-3345329_960_720.jpg",
    },
    {
      id: 2,
      title: "Rakousko",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/08/17/53/seebensee-2384369_960_720.jpg",
    },
    {
      id: 3,
      title: "Itálie",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/03/19/18/bardolino-4101177_960_720.jpg",
    },
    {
      id: 4,
      title: "Slovensko",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/03/25/22/15/old-2174503_960_720.jpg",
    },
    {
      id: 5,
      title: "Ostatní",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;

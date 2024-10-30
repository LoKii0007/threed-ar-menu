import "./App.css";
import Card from "./components/card";

function App() {
  const menu = [
    {
      name: "Krabby patty burger",
      price: 400,
      location: "krabby_patty_burger",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa laborum earum iste, labore libero!",
    },
    {
      name: "Cat burger",
      price: 400,
      location: "cat_burger",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa laborum earum iste, labore libero!",
    },
    {
      name: "Burger",
      price: 400,
      location: "burger",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa laborum earum iste, labore libero!",
    },
    {
      name: "Allo tikki burger",
      price: 400,
      location: "burger_realistic_free",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa laborum earum iste, labore libero!",
    },
  ];

  return (
    <>
      <div className="home mx-4 my-6 lg:mx-[5%] xl:mx-[10%] md:my-12">
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {menu.map((item, index)=>(
            <>
              <Card item={item} key={index} />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;

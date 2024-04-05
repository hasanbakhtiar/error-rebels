import { useState } from "react";
import List from "./components/List";

type dataType = {
  title: string;
  price: number;
};

const data: dataType[] = [
  {
    title: "Asus",
    price: 5000,
  },
];

const App = () => {
  const [count, setCount] = useState<dataType[]>([
    { title: "Asus", price: 5000 },
  ]);

  return (
    <ul>
        
      {count[0].title}
      
      <List title="Samsung" price={300} alldata={data} />
    </ul>
  );
};

export default App;

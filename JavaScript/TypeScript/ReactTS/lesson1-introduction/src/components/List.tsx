interface PropType{
    title:string;
    price:number;
    alldata:any[]
}

const List = ({title,price,alldata}:PropType) => {
  return (
    <li>
      <ul>
        <li>{title}</li>
        <li>{price}</li>
        {alldata.map((item:any)=>(
            <p>{item.title}</p>
        ))}
      </ul>
    </li>
  );
};

export default List;

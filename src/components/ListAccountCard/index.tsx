import React from "react";
import "./styles.scss";
import AccountCard from "../AccountCard";
import NewAccountCard from "../NewAccountCard";

const createRandomArray = (length: number) => {
  const data = [];

  for(let i = 0; i < length; i++) {
    data.push(undefined);
  }

  return data;
}

const ListAccountCard = ({ data }: any) => {
  const gridSize = data.length;
  const missing = createRandomArray(4 - gridSize);

  return (
    <div className="_list-account">
      {data.map((card: any, index: number) => (
        <AccountCard key={index} data={card} index={index} />
      ))}
      {
        gridSize >= 4 ? null : (
          <>
          {
            missing.map((miss, index: number) => <NewAccountCard key={index}/>)
          }
          </>
        )
      }
    </div>
  );
};

export default ListAccountCard;

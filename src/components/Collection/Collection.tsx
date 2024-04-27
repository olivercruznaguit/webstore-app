import { useEffect, useState } from "react";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { iCollection } from "../../model";
import jsonData from "./data.json"; // Import data.json
import Item from "../Item/Item";

const Collection = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [collections, setCollections] = useState<iCollection[]>([]);

  const handleFetchItems = () => {

    setTimeout(()=>{
      setCollections(jsonData as iCollection[]);
      setIsFetching(false)
    },2000)
  };

  useEffect(() => {
    console.log(collections);
  }, [collections]);

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <div>
      {collections.map((collection) => (
        <>
          <CollectionTitle text={collection.collectionName}/>
          <div className='flex gap-5 mx-80'>
          {collection.items.map((item) => (
            <Item img={item.img} price={item.price} name={item.itemName}/>
          ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Collection;

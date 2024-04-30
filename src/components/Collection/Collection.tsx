import { useEffect, useState } from "react";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { iCollection } from "../../model";
import jsonData from "./data.json"; // Import data.json
import Item from "../Item/Item";
import { Element } from "react-scroll";

const Collection = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [collections, setCollections] = useState<iCollection[]>([]);

  const handleFetchItems = () => {
    setTimeout(() => {
      setCollections(jsonData as iCollection[]);
      setIsFetching(false);
    }, 2000);
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Element name="shop">
      <div className="md:px-16 lg:px-20 xl:px-80">
        {collections.map((collection) => (
          <>
            <CollectionTitle text={collection.collectionName} />
            <div className="flex flex-col md:flex-row gap-5 flex-wrap">
              {collection.items.map((item) => (
                <Item img={item.img} price={item.price} name={item.itemName} />
              ))}
            </div>
          </>
        ))}
      </div>
    </Element>
  );
};

export default Collection;

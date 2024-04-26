import CollectionTitle from '../CollectionTitle/CollectionTitle'

import dogtag from '../../assets/dogtag.jpg'
import bread from '../../assets/bread.jpg'
import knuckle from '../../assets/knuckle.jpg'
import cold from '../../assets/cold.jpg'
import Item from '../Item/Item'

const Collection = () => {
  return (
    <div>
      <CollectionTitle/>
      <div className='flex gap-2 mx-80'>
      <Item img={dogtag} price={'₱ 750.00'} name={'Refuge Co. "DOGTAG" Tee'}/>
      <Item img={bread} price={'₱ 750.00'} name={'Refuge Co. "BREAD" Tee'}/>
      <Item img={knuckle} price={'₱ 750.00'} name={'Refuge Co. "BRASS KNUCKLE" Tee'}/>
      <Item img={cold} price={'₱ 750.00'} name={'Refuge Co. "2COLD4YOU" Tee'}/>
      </div>
    </div>
  )
}

export default Collection

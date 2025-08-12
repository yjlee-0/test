import User from './UserInfo'
import Product from './ProductInfo'
const MypageComponent = () => {
  return (
    <div className='max-w-[630px]'>
      <User />
      <Product />
    </div>
  )
}

export default MypageComponent
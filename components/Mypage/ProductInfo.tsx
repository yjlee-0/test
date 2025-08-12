import Detail from './Product/Detail'
import Reservation from './Product/Info'
const MypageProductInfoComponent = () => {
  return (
    <div className="flex gap-x-6 pt-5">
      <Detail />
      <Reservation />
    </div>)
}

export default MypageProductInfoComponent
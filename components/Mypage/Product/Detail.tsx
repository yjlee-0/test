import Image from '../../../components/Atoms/HeroImage'
const MypageProductDetailComponent = () => {

  return (
    <>
      <div className="w-[120px] h-[120px] relative">
        <Image width={120} height={120} src="https://img.modetour.com//eagle/photoimg/67513/Bfile/637574783319709264.jpg" alt="바다"></Image>
      </div>
      <div>
        <div className='text-[16px] flex-1 font-semibold h-[41px] leading-[22px] line-clamp-2 break-words'>
          오사카/나라/고베 3일 자유 트윈
        </div>
        <div className='mt-3 text-[#009C75] text-[14px] font-semibold h-4 leading-[19px]'>
          3박 5일
        </div>
        <div className='mt-[6px] flex items-center gap-x-[14px]'>
          출발일 2026-06-01 / 도착 2026-06-05
        </div>
      </div>
    </>
  )
}

export default MypageProductDetailComponent
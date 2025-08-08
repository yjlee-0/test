interface CardPriceComponentProps {
    price?: string
}
const Price = ({ price }: CardPriceComponentProps) => {
    return <p className='text-[26px] font-bold text-right'>{price}원~</p>
}

export default Price;
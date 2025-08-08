interface CardTitleComponentProps {
    label?: string
}
const Title = ({ label }: CardTitleComponentProps) => {
    return <span className='mb-4 text-[24px] line-clamp-2 break-words font-semibold leading-[30px] h-[59px]'>{label}</span>;
}

export default Title;
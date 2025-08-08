interface CardBadgeComponentProps {
    label?: string
}
const Badge = ({ label }: CardBadgeComponentProps) => {
    return <span className='text-[18px] font-medium leading-[20px] text-[#009C75] mb-4'>{label}</span>;
}

export default Badge;
interface CardHashTagComponentProps {
    label?: string
}
const HashTag = ({ label }: CardHashTagComponentProps) => {
    return <>
        <div className='h-[43px] overflow-hidden line-clamp-2 mb-5'>
            <span>{label}</span>
        </div>
    </>;
}

export default HashTag;
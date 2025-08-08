import HeroImage from "../Atoms/HeroImage.tsx"
import Badge from "../Atoms/Badge.tsx"
import HashTag from "../Atoms/HashTag.tsx"
import Title from "../Atoms/Title.tsx"
import Price from "../Atoms/Price.tsx"

interface CardComponentProps {
    imagesrc: string;
    imagetitle: string;
    imagewidth: number;
    imageheight: number;
    badge: string;
    hashtag: string;
    title: string;
    price: string;
}

const CardComponent = ({ imagesrc, imagetitle, imagewidth, imageheight, badge, hashtag, title, price }: CardComponentProps) => {

    return (
        <>
            <div className='w-[430px] rounded-[10px] h-[550px] shadow-[0px_0px_6px_#11111126]'>
                <div className='w-[430px] rounded-[10px] h-[524px] overflow-hidden'>
                    <HeroImage src={imagesrc} alt={imagetitle} width={imagewidth} height={imageheight} />
                    <div className='p-[30px] flex flex-col justify-end w-full'>
                        <Badge label={badge} />
                        <HashTag label={hashtag} />
                        <Title label={title} />
                        <Price price={price} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent;
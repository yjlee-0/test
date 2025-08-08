import HeroImage from "../Atoms/HeroImage.tsx"
import Badge from "../Atoms/Badge.tsx"
import HashTag from "../Atoms/HashTag.tsx"
import Title from "../Atoms/Title.tsx"
import Price from "../Atoms/Price.tsx"

interface WildCardComponentProps {
	imagesrc: string;
	imagetitle: string;
	imagewidth: number;
	imageheight: number;
	badge: string;
	hashtag: string;
	title: string;
	price: string;
}

const WildCardComponent = ({ imagesrc, imagetitle, imagewidth, imageheight, badge, hashtag, title, price }: WildCardComponentProps) => {

	return (
		<div className='flex justify-between w-[900px] h-[256px] shadow-[0px_0px_6px_#11111126]'>
			<div className='w-[430px] rounded-[10px] h-[256px] overflow-hidden'>
				<HeroImage src={imagesrc} alt={imagetitle} width={imagewidth} height={imageheight} />
			</div>
			<div className='justify-start p-[30px]'>
				<Badge label={badge} />
				<Title label={title} />
				<HashTag label={hashtag} />
				<Price price={price} />
			</div>
		</div>
	)
}

export default WildCardComponent;
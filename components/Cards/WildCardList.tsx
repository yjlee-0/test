import WildCardComponent from "./WildCard";

interface Card {
	badge: string;
	title: string;
	hashtag: string;
	price: string;
	imagesrc: string;
}

const WildCardListComponent = () => {
	let cards: Card[] = [
		{ badge: "해외여행", title: "나고야", hashtag: "#토롯코열차탑승 #시라카와고합장촌 #특식포함 #시원한피서지 #단풍의정수", price: "1,149,000", imagesrc: "https://img.modetour.com/eagle/photoimg/24275/rfile/638114625057422828.jpg" },
		{ badge: "해외여행", title: "다낭/호이안", hashtag: "#새로운일정 #재방문객 #임프래션테마파크 #센타이투스파 #남선사찰", price: "369,900", imagesrc: "http://img.modetour.com/eagle/photoimg/33766/bfile/638041254595556627.jpg" },
		{ badge: "해외여행", title: "튀르키예", hashtag: "#여행의최적기9-10월 #베스트셀러 #힐튼3박", price: "999,000", imagesrc: "https://img.modetour.com/eagle/photoimg/1805/rfile/637860726450474710.jpg" }
	];
	return cards.map(item => <WildCardComponent badge={item.badge} title={item.title} hashtag={item.hashtag} price={item.price} imagesrc={item.imagesrc} imagetitle={item.title} imagewidth={430} imageheight={524} />);
}

export default WildCardListComponent;
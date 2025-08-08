import React, { useState } from "react";
import CardListComponent from "../../components/Cards/CardList";
import WildCardListComponent from "../../components/Cards/WildCardList";
const Home = () => {
	return (
		<>
			<div className="flex">
				<div className="mr-5">
					<CardListComponent />
				</div>
				<div><WildCardListComponent /></div>
			</div>
		</>
	);
};

export default Home;
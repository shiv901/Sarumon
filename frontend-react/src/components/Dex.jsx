import Card from "./Card";

const Dex = ({ isDark, data }) => {


	return (
		<>
			<div className="cards-container">
				{data.map((mon, i) => <Card key={i} mon={mon} isDark={isDark} />)}
			</div>
		</>
	);
}

export default Dex;
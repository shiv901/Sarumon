import Card from "./Card";
import { data } from "./sampleData";

const Dex = ({ isDark }) => {

	return (
		<>
			<div className="cards-container d-flex gap-4 flex-wrap justify-content-between">
				{data.map((mon, i) => <Card key={i} mon={mon} isDark={isDark} />)}
			</div>
		</>
	);
}

export default Dex;
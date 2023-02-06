import { useState } from "react";
import Card from "./Card";
import DetailedPanel from "./DetailedPanel";

const Dex = ({ isDark, data, count, totalCount }) => {
	const [open, setOpen] = useState(false)
	const [selectedMon, setSelectedMon] = useState({});


	// function selectPrev(num) {
	// 	setSelectedMon(data[num])
	// }

	function navigate(num) {
		if (count === totalCount) {
			setSelectedMon(data[num])
		}
	}

	function handleClick(mon) {
		if (mon.nfts) {
			setOpen(true)
			setSelectedMon(mon)
		}
	}
	console.log(data)
	return (
		<div className="cards-container">
			{data.map((mon, i) => <Card key={i} mon={mon} isDark={isDark} handleClick={handleClick} />)}
			{open ? <DetailedPanel props={
				{ mon: selectedMon, totalCount, navigate, isDark, setOpen, }
			} /> : ''}

		</div>
	);
}

export default Dex;
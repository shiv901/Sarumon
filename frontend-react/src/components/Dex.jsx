import { useContext, useState } from "react";
import Card from "./Card";
import DetailedPanel from "./DetailedPanel";
import ThemeContext from "../context/ThemeContext";

const Dex = ({ data, count, totalCount }) => {
	const { isDark } = useContext(ThemeContext)
	const [open, setOpen] = useState(false)
	const [selectedMon, setSelectedMon] = useState({});

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

	return (
		<>
			<div className="cards-container">
				{data.map((mon, i) => <Card key={i} mon={mon} isDark={isDark} handleClick={handleClick} />)}
			</div>

			{open ? <DetailedPanel props={
				{ mon: selectedMon, totalCount, navigate, isDark, setOpen, }
			} /> : ''}
		</>
	);
}

export default Dex;
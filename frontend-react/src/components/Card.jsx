
export default function Card({ mon, isDark }) {
  console.log(mon?.number, mon?.owned)
  return (
    <>
      {mon && <div className={`card-num ${isDark ? 'dark' : ''} ${mon.owned ? 'owned' : ''}`}>
        <div className="fs-larger d-num">{mon.number}</div>
        <img src={mon?.nfts?.metadata?.image} alt="" className="img-fluid" />
      </div>}
    </>
  );
}

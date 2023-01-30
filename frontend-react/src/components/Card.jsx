
export default function Card({ mon, isDark }) {
  return (
    <>
      {mon && <div className={`card-num ${isDark ? 'dark' : ''} ${mon.owned ? 'owned' : ''}`}>
        <div className="fs-larger d-num">{mon.number}</div>
        {mon.nfts && <img src={mon?.nfts[0]?.metadata?.image} alt="" className="img-fluid" />}
      </div>}
    </>
  );
}

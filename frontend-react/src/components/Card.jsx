export default function Card({ mon, isDark, handleClick }) {

  return (
    <>
      {mon &&
        <div className={`mon-card ${isDark ? 'dark' : ''} ${mon.owned ? 'owned' : ''}`} onClick={() => handleClick(mon)}>
          <div className="fs-larger d-num">{mon.number}</div>
          {mon.owned && <div className="fs-larger o-num">x{mon['owned_nos']}</div>}
          {mon.nfts && <img src={mon?.nfts[0]?.metadata?.image} alt="" className="img-fluid" />}
        </div>

      }
    </>
  );
}

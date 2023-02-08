import { FaAngleLeft, FaAngleRight, FaArrowLeft } from "react-icons/fa"
import ProgressBar from "./ProgressBar"

export default function DetailedPanel({ props }) {
  const { mon, isDark, setOpen, navigate, totalCount } = props

  const monster = mon.nfts ? mon.nfts[0].metadata : mon
  const stats = [
    { name: 'HP', value: 100 },
    { name: 'ATK', value: 100 },
    { name: 'DEF', value: 100 },
  ]

  function closeModal() {
    setOpen(false)
  }

  return (
    <div id="detailedModal" onClick={closeModal}>
      <div className={`modal ${isDark ? '' : 'light'}`} onClick={e => e.stopPropagation()}>
        {mon.nfts ? (
          <div className='modal-container'>
            <span className="saru-img">
              <img src={monster.image} alt="sarumon" className="img-fluid" />
              <div className="btns">
                <div className="closeBtn" onClick={closeModal}>
                  <FaArrowLeft />
                  <span className="num">#{mon.number}</span>
                </div>
                <div className="navs">
                  <div className={`btn btn-dark ${+mon.number === 1 && 'disabled'}`} onClick={() => navigate(mon.number - 2)}>
                    <FaAngleLeft />#{('00' + (mon.number - 1)).slice(-3)}
                  </div>
                  <div className={`btn btn-dark ${+mon.number === totalCount && 'disabled'}`} onClick={() => navigate(+mon.number)}>
                    #{('00' + (+mon.number + 1)).slice(-3)}<FaAngleRight />
                  </div>
                </div>
              </div>
            </span>
            <div className="mon-details">
              <div className="details-wrapper">
                <h2 className="text-center m-3">{monster.name}</h2>
                <div className="desc">{monster.description}</div>

                <h5 className="mt-5">Sarumon Details</h5>
                <div className="detail-box-container">
                  <div className="detail-box">
                    <sub>{monster.attributes[2].trait_type}</sub>
                    <p>{monster.attributes[2].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[3].trait_type}</sub>
                    <p>{monster.attributes[3].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[13].trait_type}</sub>
                    <p>{monster.attributes[13].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[4].trait_type}</sub>
                    <p>{monster.attributes[4].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[14].trait_type}</sub>
                    <p>{monster.attributes[14].value}</p>
                  </div>
                </div>

                <h5 className="mt-5">Characteristic</h5>
                <div className="detail-box-container">
                  <div className="detail-box">
                    <sub>{monster.attributes[1].trait_type}</sub>
                    <p>{monster.attributes[1].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[5].trait_type}</sub>
                    <p>Gen {monster.attributes[5].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[7].trait_type}</sub>
                    <p>{monster.attributes[7].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>{monster.attributes[8].trait_type}</sub>
                    <p>{monster.attributes[8].value}</p>
                  </div>
                  <div className="detail-box">
                    <sub>Geneder Ratio</sub>
                    <p>Female: {monster.attributes[9].value}% / Male: {monster.attributes[10].value}%</p>
                  </div>
                </div>

                <h5 className="mt-5">Abilities</h5>
                <div className="detail-box-container">
                  <div className="detail-box">
                    <p>{monster.attributes[11].value}</p>
                  </div>
                  <div className="detail-box">
                    <p>Gen {monster.attributes[12].value}</p>
                  </div>
                </div>

                <h5 className="mt-5">Stats</h5>
                {stats && stats.map(stat => (
                  <div key={stat.name} className="stats d-flex align-items-center gap-3">
                    <div className="attr">
                      {stat.name}: <span>{stat.value}</span>
                    </div>
                    {<ProgressBar progress={stat.value} />}
                  </div>
                ))}
                <div className="stats d-flex align-items-center gap-3">
                  <div className="attr">
                    Total: <span>{stats.map(x => x.value).reduce((a, b) => a + b)}</span>
                  </div>
                  {<ProgressBar progress={stats.map(x => x.value).reduce((a, b) => a + b) / 300 * 100} />}
                </div>

                <h5 className="mt-5 d-none">Raw Metadata</h5>
                <div className="detail-box-container d-none">
                  <textarea className="raw-detail" disabled value={JSON.stringify(mon)}></textarea>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className='modal-container'>
            <div className="blank">
              <div className="btns">
                <div className="closeBtn" onClick={closeModal}>
                  <FaArrowLeft />
                  <span className="num">#{mon.number}</span>
                </div>
                <div className="navs">
                  <div className={`btn btn-dark ${+mon.number === 1 && 'disabled'}`} onClick={() => navigate(mon.number - 2)}>
                    <FaAngleLeft />#{('00' + (mon.number - 1)).slice(-3)}
                  </div>
                  <div className={`btn btn-dark ${+mon.number === totalCount && 'disabled'}`} onClick={() => navigate(+mon.number)}>
                    #{('00' + (+mon.number + 1)).slice(-3)}<FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="no-details">Coming Soon!</div>
          </div>
        )}
      </div>
    </div >
  )
}

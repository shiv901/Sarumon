import React from 'react'

const ProgressBar = ({ bgcolor = '#03C988', progress = 100, height = 10 }) => {

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 40,
    margin: 16
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>{`${progress}%`}</span> */}
      </div>
    </div>
  )
}

export default ProgressBar;

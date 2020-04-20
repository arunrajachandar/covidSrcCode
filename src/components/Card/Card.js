import React from 'react';

import CountUp from 'react-countup';

function Card({tableData, totCalc}){
    return(
        <div className="card-group p-2 fadeIn ">
        <div className="card bg-danger">
      <div className="card-body text-center text-white font-weight-bold fadeIn1">
      Deaths
        <p className="card-text text-white fadeIn2">
          <CountUp delay={2} end={totCalc(tableData,'deaths')} /></p>
      </div>
    </div>
  
    <div className="card bg-warning">
      <div className="card-body text-center text-white font-weight-bold fadeIn1">
        Confirmed
        

        <p className="card-text text-white fadeIn2">
        <CountUp delay={2} end={totCalc(tableData,'confirmed')}/></p>
      </div>
    </div>
    <div className="card bg-success">
      <div className="card-body text-center text-white font-weight-bold fadeIn1">
      Recovered
  
        <p className="card-text text-white fadeIn2">
        <CountUp delay={2} end={totCalc(tableData,'recovered')}/></p>
      </div>
    </div>
  </div>
  
    )

}

export default Card;
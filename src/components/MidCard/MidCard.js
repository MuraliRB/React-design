import React from 'react'
import './MidCard.css'
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi'; 
const MidCard = () => {
  return (
    <div className='mid-card'>

<div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Total Active Users</h6>
        <h6 className="card-text"><BiIcons.BiTrendingUp className='trend-1'/>+10%</h6>
        <h1>100M<RiIcons.RiBarChartGroupedFill className='first-bar'/></h1>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Total Streaming</h6>
        <h6 className="card-text"><BiIcons.BiTrendingUp className='trend-2'/>+15%</h6>
        <h1>35M<RiIcons.RiBarChartGroupedFill className='second-bar'/></h1>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Total Downloads</h6>
        <h6 className="card-text"><BiIcons.BiTrendingDown className='trend-3'/>-5%</h6>
        <h1>50M<RiIcons.RiBarChartGroupedFill className='third-bar'/></h1>
      </div>
    </div>
  </div>

  
  
</div>

    </div>
  )
}

export default MidCard
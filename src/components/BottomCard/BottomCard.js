import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './BottomCard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './custom.css';
import MultiLineChart from '../MultiChart/MultiChart';
const percentage = 85;

const BottomCard = () => {
  return (
    <div>
    
    <div className="row">
  <div className="col-sm-3">
    <div className="card bottom-card">
      <div className="card-body">
        <h6>Current Downloads</h6>
        <div style={{width:180, height:180, position:'relative', left:'20px'}}>
        <CircularProgressbar  value={percentage} text={`${percentage}%`} />;
        </div> 
        
      </div>
    </div>
  </div>
    </div>

    <div className='chart-div'>
    <MultiLineChart/>
    </div>
        
     
    </div>
  )
}

export default BottomCard;
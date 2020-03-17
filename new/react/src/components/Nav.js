import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class About extends Component {

  render() {
    
    return (
      <>
        <div className="nav">
          <div className="navFlex1" ><Link to="/"><span className="logo">Bank</span></Link></div>
          <div className="navFlex2" >
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/accounts">Accounts</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
            </ul>
          </div>
        </div>
      </>
    )

  }

}


export default About
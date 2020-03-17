import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import { connect } from 'react-redux';
import {debitCredit} from '../actions/menus-actions'

class Footer extends Component {
  componentWillMount(){
    this.props.dispatch(debitCredit())
  }
  render() {
    return (
      <div className="card">
        <div className="cardHeader" >
          <div className="flex1">
            <SubtitlesIcon />
            <h3 style={{ margin: "4px 0 0 0" }}>Transactions</h3>
          </div>
          <div className="flex2">
          <Link to="/transactions"><Button size="small" variant="contained" color="primary">
            View All
          </Button></Link>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgb(238, 204, 238)', margin: '20px 15px' }}></div>
        <div className="cardCenter" >
    <Link to="/transactions" className="links"><h1>{this.props.length}</h1></Link>
          <Link to="/transactions" className="links" ><h3>Transactions</h3></Link>
        </div>
        <div className="DC">
          <div className="credits"><span>Credits Rs: {this.props.state.credit}</span></div>
          <div className="debits" ><span>Debits Rs: {this.props.state.debit}</span></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps =(store)=>{
return {state:store.debitCredit}
}
export default connect(mapStateToProps) (Footer)
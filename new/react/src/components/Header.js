import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardHeader" >
          <div className="flex1">
            <PersonIcon />
            <h3 style={{ margin: "4px 0 0 0" }} className="accoutsTitle">Accounts</h3>
          </div>
          <div className="flex2">
            <Link to="/addAccount">
              <Button size="small"
                variant="contained"
                color="primary"
                startIcon={<PersonAddIcon />}
              >Add Account</Button>
            </Link>
            <Link to="/accounts">
              <Button size="small" variant="contained" color="primary">
                View All
            </Button>
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgb(238, 204, 238)', margin: '20px 15px' }}></div>
        <div className="cardCenter" >
          <Link to="/accounts" className="links"><h1>{this.props.length}</h1></Link>
          <Link to="/accounts" className="links" ><h3>Accounts</h3></Link>
        </div>
      </div>
    )
  }
}
export default Header
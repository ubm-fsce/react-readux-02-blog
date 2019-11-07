import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/';

class UserHeader extends React.Component {
  /*  no need post combined action 
  componentDidMount() {
    this.props.fetchUser(this.props.showUserId);
  } */

  render() {
    /* bad approach when not using ownProps
     const user = this.props.usrs.find(
      (usr) => usr.id === this.props.showUserId
    ); */
    const { usr } = this.props;
    if (!usr) {
      return null;
    };
    return <div className=' ui red basic label' >{usr.name} </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    usr: state.users.find(
      (user) => user.id === ownProps.showUserId
    )
  };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.showUserId);
  }

  render() {
    const user = this.props.usrs.find(
      (usr) => usr.id === this.props.showUserId
    );
    if (!user) {
      return null;
    };
    return <div className=' ui red basic label' >{user.name} </div>;
  }
}

const mapStateToProps = (state) => {
  return { usrs: state.user };
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);
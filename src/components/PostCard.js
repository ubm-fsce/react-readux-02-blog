import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader';

class PostCard extends React.Component {
  componentDidMount() {
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2> {post.title}</h2>
              <p> {post.body}</p>
            </div>
            <UserHeader showUserId={post.userId} />
          </div >
        </div >
      )
    }
    );
  }

  render() {
    return <div className='ui relaxed divided list'>
      {this.renderList()} </div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostCard);
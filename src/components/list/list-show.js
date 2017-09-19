import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { fetchPost, deletePost } from '../../actions/index';
import axios from 'axios';

const ROOT_URL = 'https://dailyexamen.herokuapp.com/api';

const config = {
  headers: { authorization: localStorage.getItem('token') }
}

class ListShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post : {}
    }
  }

  componentWillMount(){
    axios.get(ROOT_URL + '/items/' + this.props.params.id, config)
      .then( (response) => {
        console.log("Response", response)
        this.setState({
          post: response.data
        })
      });
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    const post = this.state.post;
      if (!post) {
        return  (
          <div> 
            Post new examen
            <Link to="/newitem" className="btn btn-primary">New Entry</Link>
          </div>
        );
      }

    return (
      <div>
        <div className="lister">
            <p>{post.url}</p>
        </div>
        <div id="space"></div>
        <div className="lister2">
        <p>{post.title}</p>
        </div>
        <div id="space"></div>
        <div className="lister3">
        <p>{post.topic}</p>
        </div>
        <div id="space"></div>
        <div className="lister4">
        <p>{post.content}</p>
        </div>
        <div id="space"></div>
              

        <Link to="/items" className="btn btn-success">Back to Post List</Link>
        <button className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>

      </div>  
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ListShow);

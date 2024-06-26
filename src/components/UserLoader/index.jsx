import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1
    };
  }
  componentDidMount() {
    this.setState({isPending: true});
    fetch('https://randomuser.me/api/?results=5&page=1&seed=fpm2024-1')
      .then((response) => response.json())
      .then((data)=>{
        this.setState({users: data.results})
      })
      .catch((error)=>{
        this.setState({error: error})
      })
      .finally(() => {
        this.setState({isPending: false });
      });
  }

  showUsers = (user) => <li key={user.login.uuid}>{user.name.first}</li>;
  prevPage = () => {
    this.setState((state) => {
        const { currentPage } = state;
        if (currentPage > 1 )
        return { currentPage: currentPage - 1 }
      })
    };
  nextPage = () => { 
    this.setState((state) => {
    const { currentPage } = state;
    return { currentPage: currentPage + 1 }
  })
    };

  render() {
    const { users, isPending, error , currentPage} = this.state;
    if (isPending) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <h2>Users:</h2>

        <div>
        <button onClick={this.prevPage}>&lt;</button>
        <span> {currentPage} </span>
        <button onClick={this.nextPage}>&gt;</button>
        </div>

        {users.length ? (
          <ul>{users.map(this.showUsers)}</ul>
        ) : (
          <p>empty list of users</p>
        )}
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;




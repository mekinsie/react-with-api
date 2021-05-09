import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';


class Books extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   books: []
    // };
  }

  // makeApiCall = () => {
  //   fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`).then(response => {
  //     if(!response.ok){
  //       throw Error(response.statusText);
  //     } else { return response.json()}
  //   }).then((jsonifiedResponse) => {
  //     this.setState({
  //       isLoaded: true,
  //       books: jsonifiedResponse.results.books
  //     });console.log(this.state.books)
  //   })
  //   .catch((error) => {
  //     this.setState({
  //       isLoaded: true,
  //       error
  //     });
  //   });
  //   console.log(this.state.books)
  // }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, books } = this.props;
    if (error) {
      return <React.Fragment>
        Error: {error.message}
      </React.Fragment>
    } else if (isLoading) {
      return <React.Fragment>
        Loading...
      </React.Fragment>
    } else {
      return ( <React.Fragment>
        <h1>Books</h1>
        <ul>
          {books.map((book, index) =>
          <li key={index}>
            {console.log(book)}
            <h3>{book.title}</h3>
            <p>Author:{book.author}</p>
            <img src={book.book_image} alt="image of book"/>
          </li>
          )}
        </ul>
      </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Books);
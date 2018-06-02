import ArticleDetail from '../src/articleDetail';
import * as moment from 'moment';

import React, { Component } from 'react';

//Basic Article Component
class Article extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      showSummary: false
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  //Component Lifecycle
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  /* DEPRECATED LIFECYCLE METHODS BELOW
  UNSAFE_componentWillMount() {
    console.log('component will mount');
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('component will receive props');
  }
  UNSAFE_componentWillUpdate() {
    console.log('component will update');
  }
  */

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    return null;
  }

  componentDidMount() {
  }
  
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('get snapshot before update');
    return { foo: 'bar' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }
  
  
  //click handler for button
  toggleDetails() {
    this.setState((prevState, props) => (
      {showSummary: !prevState.showSummary}
    ))
  }

  //this fires every time a prop or state changes
  //to use any prop, use this.props.NAME_OF_PROP
  //use {} to add JS expressions
  //use className to add CSS classes
  //remember that this is not HTML!!
  //https://reactjs.org/docs/introducing-jsx.html
  render() {
    const { headline, summary, image, link, byLine, publishedDate, subHeadline } = this.props;
    const formattedDate = moment(publishedDate).format('MMMM DD')
    return (
    <React.Fragment>
      <div className='home-article-date-published'>{formattedDate}</div>
      <div
        className='home-article'
        onMouseEnter={this.toggleDetails}
        onMouseLeave={this.toggleDetails}
      >
        <a href={link}>
          <div className='home-article-headline'><span>{headline}</span></div>
        </a>
        <img className='home-article-image' src={image} alt='image' />
      </div>
      <ArticleDetail
        summary={summary}
        showSummary={this.state.showSummary}
        byLine={byLine}
        subHeadline={subHeadline}
      />
    </React.Fragment>
  );}
};

//set default props here, if any
Article.defaultProps = {};

//export so others can use
export default Article;

import React, { Component } from 'react';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { summary, showSummary, subHeadline, byLine } = this.props;
    const displaySummary = showSummary ? 
      <div className='home-article-summary'>{summary}</div> : 
      <div className='home-article-subheadline'>{`${subHeadline} `}<span>{byLine}</span></div>;
    return (
      <React.Fragment>
        {displaySummary}
      </React.Fragment>
    );
  }
}

ArticleDetail.defaultProps = {};

export default ArticleDetail;
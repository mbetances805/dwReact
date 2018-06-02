import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import any other components here
import HelloWorld from '../src/helloworld';
import Article from '../src/article';

//import CSS here, so webpack knows to include in bundle
import style from '../client/style/main.css';

//this is the component that generates the body of the page
class App extends Component {
  constructor(props) {
    super(props);
    this.updateCategory = this.updateCategory.bind(this);

    //default state
    //this keeps track of "live" data on the browser
    this.state = {
      articles: null,
      error: null,
      loaded: false,
      selectedCategory: ''
    };
  }

  componentDidMount() {
    //fetching data clientside
    fetch('/api/articles').then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);

      //send data to our state
      //which will trigger render()
      this.setState({
        articles: data.items,
        loaded: true
      });
    }).catch((error) => {
      console.log(error);

      this.setState({
        error: error,
        loaded: true
      });
    });
  }

  // UPDATE
  updateCategory(evt) {
    this.setState({selectedCategory: evt.target.innerText})
    let category = document.getElementById('active')
    if (category) {
      category.removeAttribute('id');
    }
    evt.target.setAttribute('id', 'active');
  }
  
  
  render() {
    const {loaded, error, articles, selectedCategory} = this.state;
    //  code above is equal to this:
    //  const loaded = this.state.loaded;
    //  const error = this.state.error;
    //  const articles = this.state.articles;
    let categoriesSet = new Set();
    articles && articles.map(article => {
      categoriesSet.add(article.category)
    })
  
    let key = 1;

    if (error) {
      //render this when there's error getting data
      return <div>Sorry! Something went wrong</div>
    } else if (!loaded) {
      //render while content is loading
      return <div>Loading...</div>
    } else {
      //render articles
      let articleJSX = [];
      let filteredArticleJSX = [];

      articles.map((article, idx) => {
        articleJSX.push(
          <Article
            key={idx}
            headline={article.headline}
            summary={article.summary}
            image={article.image}
            category={article.category}
            subHeadline={article.subheadline}
            byLine={article.byline}
            publishedDate={article.date_published}
            selectedCategory={selectedCategory}
            link={article.share_link}
          />
        );
      });
      // code above is equal to this:
      // for (let i = 0; i < articles.length; i++) {
      //   articleJSX.push(
      //     <Article key={i} headline={articles[i].headline}></Article>
      //   );
      // }
      
      if (this.state.selectedCategory) {
        filteredArticleJSX = articleJSX.filter(article => {
          return article.props.category === this.state.selectedCategory
        })
      }

      return (
        <React.Fragment>
          <HelloWorld />
          <nav className='home-dropdown-category'>
            <ul>
              {
                [...categoriesSet].sort().map(category => {return <li
                  className='home-dropdown-content'
                  key={category}
                  onClick={this.updateCategory}
                  >
                    <Link to='/'>
                    {category}
                    </Link>
                  </li>
                })
              }
            </ul>
          </nav>
          <div className='app-container'>
            {this.state.selectedCategory ? filteredArticleJSX : articleJSX}
          </div>
        </React.Fragment>
      );

    }
  }
}

export default App;

import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
 /* const News =()=>{}    and remove render() // this is used for function based components
  in function based components we write defaultprops , proptypes at the end of fucntion
  function_name.defaultProps={}  
  here , use useEffect,useState hook

const [articles,setArticles]=useState([])
const [loading,setloading]=useState(true)
const [page,setpage]=useState(1)
const [totalResult,settotalResult]=useState(0)
use asyn function like this   const upate=asyn ()=>{}  and change this.props to only props
setAticles(parseData.articles)
settotalresult(parseData.totalresults)
setloading(false)

then use 
and remove this from where it need 

useEffect(()=>{
    this.update    // in this code there is no update function or class it just for refernece 
})
 */
    ar = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China's capital swings from anger over zero-COVID to coping with infections - Reuters",
            "description": "Beijing's COVID-19 gloom deepened on Sunday with many shops and other businesses closed, and an expert warned of many thousands of new coronavirus cases as anger over China's previous COVID policies gave way to worry about coping with infection.",
            "url": "https://www.reuters.com/world/china/chinas-capital-swings-anger-over-zero-covid-coping-with-infections-2022-12-11/",
            "urlToImage": "https://www.reuters.com/resizer/pepUklGUspOijz-inmpWxcpzzJU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YVAPVMJ2AVMMJFLLMUFARDSHKU.jpg",
            "publishedAt": "2022-12-11T03:38:00Z",
            "content": "BEIJING, Dec 11 (Reuters) - Beijing's COVID-19 gloom deepened on Sunday with many shops and other businesses closed, and an expert warned of many thousands of new coronavirus cases as anger over Chin… [+3515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "COVID and flu cases on the rise | WNT - ABC News",
            "description": "Major cities like Los Angeles and New York have put indoor mask recommendations back in place with COVID-19 and flu cases on the rise.WATCH FULL EPISODES OF ...",
            "url": "https://www.youtube.com/watch?v=ygYs7xtI6fY",
            "urlToImage": "https://i.ytimg.com/vi/ygYs7xtI6fY/maxresdefault.jpg",
            "publishedAt": "2022-12-11T02:43:14Z",
            "content": null
        },
        {
            "source": {
                "id": "the-globe-and-mail",
                "name": "The Globe And Mail"
            },
            "author": "Nathan VanderKlippe",
            "title": "Flu overtakes COVID-19 in U.S. as primary respiratory illness - The Globe and Mail",
            "description": "Figures collected by the CDC show that the weekly rate of hospitalizations for the flu has reached a level not seen at this time of year in more than a decade",
            "url": "https://www.theglobeandmail.com/world/article-flu-overtakes-covid-19-in-us-as-primary-respiratory-illness/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/GX9I-pcLODiYZZI0fdtP-HfJy-M=/1200x890/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/D5FMONPM65IXXAD2RPSYGTSCXU.jpg",
            "publishedAt": "2022-12-10T02:07:00Z",
            "content": "More people are falling seriously ill with the flu in the United States than with COVID-19, a demonstration of this years severe influenza season but also of the waning seriousness of a pandemic that… [+4677 chars]"
        }
    ]

    static defaultProps={
        country:"in",
        pageSize : 9,
        category : "general",
    }
    static propTypes={
        country : PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(props) {
        super(props);
        console.log("hello i am constructor from news")
        this.state = {

            article: [],
            loading: false,
            page: 1
        }
        document.title =`${this.props.category}-News App`;

    }

    async componentDidMount() {
        this.props.setProgress(10);
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        
        this.setState({ article: parsedData.articles, 
            totalArticles: parsedData.totalResults ,
            loading :false})
            this.props.setProgress(100);
    }

    handle = async () => {

        console.log("next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            this.props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true});
            let data = await fetch(url);
            this.props.setProgress(30);
            let parsedData = await data.json()
            this.props.setProgress(50);
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                article: parsedData.articles,
                loading:false
            })
            this.props.setProgress(100);
        }
    }
    handlep = async () => {

        console.log("previous")
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(50);
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            article: parsedData.articles,
            loading:false
        })
        this.props.setProgress(100);
    }
    render() {
        return (
            <div className="container my-3 ">
                <h1 className='text-center' style={{margin:"20px"}}>Top {this.props.category} News</h1>
              { this.state.loading && <Spinner/>}
                <div className="row" >
                     {!this.state.loading && this.state.article.map((ele) => {
                        return <div className="col-md-4"  key={ele.url}>
                            <NewsItems title={ele.title ? ele.title.slice(0, 40) : ""} description={ele.description ? ele.description.slice(0, 80) : ""} imgUrl={ele.urlToImage} newUrl={ele.url} author={ele.author} date={ele.publishedAt}/>
                        </div>
                    })}


                </div>
                <div className="contanier d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlep}>&larr; previous</button>
                    <button disabled={ (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-dark" onClick={this.handle}>next &rarr;</button>
                </div>
            </div>

        )
    }
}


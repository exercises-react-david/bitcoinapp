import MasterPage from "../components/Master";
import fetch from 'isomorphic-unfetch';
import Price from "../components/Price";
import News from '../components/News';
import Events from '../components/Events';

const Index = (props) => (

    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Price</h2>
                <Price
                    bitcoinPrice={props.bitcoinPrice}
                />
            </div>
            <div className="col-md-8">
                <h2>News about Bitcoin</h2>
                <News
                    news={props.news}
                />
            </div>
            <div className="col-md-4">
                <h2>Next events Bitcoin</h2>
                <Events
                    events={props.events}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () =>{
    let newsUrl = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-06&sortBy=publishedAt&apiKey=85e3926fcb1b43b38d8182a6937c4179`;
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const news = await fetch(newsUrl);
    const events = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&location.address=Mexico&token=OQPEU6CWC7KGNNZX4SQS');

    const answerPrice = await price.json(); 
    const answerNews = await news.json();
    const answerEvents = await events.json();
    
    return{
        bitcoinPrice: answerPrice.data.quotes.USD,
        news: answerNews.articles,
        events: answerEvents.events
    }
}

export default Index;
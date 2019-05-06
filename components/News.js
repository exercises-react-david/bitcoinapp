import NewsCard from "./NewsCard";

const News = (props) => {
    return (
        <div className="row">
            {props.news.map((n,key) => (
                <NewsCard
                    key={key} 
                    news={n}
                />
            ))}
        </div>
    );
};

export default News;
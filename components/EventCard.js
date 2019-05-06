
const EventCard = (props) => {

    const {name,url,description} = props.info;

    let title = name.text;
    if(title.length > 150){
        title = title.substr(0,100) + '...';
    }

    let desc = description.text;
    if(desc){
        desc = desc.substr(0,250) + '...';
    }
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{name.text}</h3>
            <p className="mb-1">{desc}</p>
        </a>
    );
};

export default EventCard;
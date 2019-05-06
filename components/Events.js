import Event from '../components/EventCard';

const Events = (props) => {
    const eventsId = Object.keys(props.events);
    
    return (
        <div className="list-group">
            {eventsId.map(key => (
                <Event
                    key={key}
                    info={props.events[key]}
                />
            ))}
        </div>
    );
};

export default Events;
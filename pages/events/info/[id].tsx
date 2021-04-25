import React from 'react';
import Container from '../../../components/Util/Container';
import Ticket from '../../../components/Events/Ticket';
import JoinButton from '../../../components/Events/JoinButton';
import EventsDetails from '../../../components/Events/EventsDetails';

const Event = () => {
    return (
        <Container>
            <svg viewBox="0 0 1440 473" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 w-full" style={{zIndex: -5}}>
            <path d="M353.34 421.432C175.615 480.646 43.7277 396.76 0 347.415V0H1440V421.432C1197.74 537.46 984.126 421.432 944.419 421.432C904.712 421.432 575.497 347.415 353.34 421.432Z" fill="#3F81FF" />
            </svg>
            <div className="pt-16 pb-5 text-center">
                <Ticket />
                <JoinButton />
            </div>
            {/* Details */}
            <EventsDetails />
        </Container>
    )
}

export default Event;

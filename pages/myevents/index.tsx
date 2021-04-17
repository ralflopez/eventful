import React from 'react';
import Ticket from '../../components/Events/Ticket';
import MyEventsProfile from '../../components/Profile/MyEventsProfile';
import Container from '../../components/Util/Container';

const index = () => {
    return (
        <Container className="pt-16 mb-10">
            <div className="pt-5 md:flex">
                <MyEventsProfile />
                <div className="flex-grow">
                    <h4 className="text-xl font-bold text-center">Events</h4>
                    <Ticket />
                    <Ticket />
                </div>
            </div>
        </Container>
    )
}

export default index;

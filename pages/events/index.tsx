import React from 'react';
import Search from '../../components/Elements/Search';
import Card from '../../components/Elements/Card';
import Container from '../../components/Util/Container';
import Pagination from '../../components/Events/Pagination';

const Events = () => {
    return (
        <Container className="p-5 pt-16">
            <div className="flex">
                {/* <div className="h-10 md:w-1/5"></div> */}
                <div className="w-full md:w-4/">
                    <Search light={true} className="mt-3 mb-7 md:mb-8"/>
                    <div className="flex flex-wrap">
                        <Card>
                            <Card.Title>Hello World</Card.Title>
                        </Card>
                        <Card>
                            <Card.Title>Hello World</Card.Title>
                        </Card>
                        <Card>
                            <Card.Title>Hello World</Card.Title>
                        </Card>
                        <Card>
                            <Card.Title>Hello World</Card.Title>
                        </Card>
                        <Card>
                            <Card.Title>Hello World</Card.Title>
                        </Card>
                    </div>
                    <Pagination
                    count={20}
                    active={1}
                    />
                </div>
            </div>
        </Container>
    )
}

export default Events;

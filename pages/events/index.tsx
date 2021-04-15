import React from 'react';
import Search from '../../components/Elements/Search';
import Card from '../../components/Events/Card';
import Container from '../../components/Util/Container';

const Events = () => {
    return (
        <Container className="pt-16">
            <div className="flex">
                <div className="h-10 md:w-1/5"></div>
                <div className="w-full md:w-4/5">
                    <Search className="mt-3 mb-7 md:mb-8"/>
                    <div className="flex-wrap md:flex">
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
                </div>
            </div>
        </Container>
    )
}

export default Events;

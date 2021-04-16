import React from 'react';
import Image from 'next/image';

const Card = ({children}) => {
    const title = React.Children.map(children, child => child.type.displayName === 'Title' ? child : null);
    const button = React.Children.map(children, child => child.type.displayName === 'Button' ? child : null);
    
    return (
        <div className="flex-grow flex-shrink-0 w-full m-3 mb-10 transition-shadow duration-200 ease-out border border-gray-300 cursor-pointer rounded-xl h-72 md:w-1/3 sm:w-1/2 hover:shadow-lg hover:bg-gray-50">
            <div className="h-40 bg-blue-500 w-100 rounded-t-xl"></div>
            <div className="px-4 py-3">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mb-3">This is the description</p>
            </div>
        </div>
    )
}

const Title = ({ children }: any) => children;
Title.displayName = 'Title';
Card.Title = Title;

const Description = ({ children }: any) => children;
Description.displayName = 'Description';
Card.Description = Description;

const Button = ({ children }: any) => children;
Button.displayName = 'Button';
Card.Button = Button;

export default Card;

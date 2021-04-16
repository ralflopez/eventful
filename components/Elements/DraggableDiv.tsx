import React, { useState } from 'react';

const DraggableDiv = () => {
    const [isDragging, setDragging] = useState<boolean>(false);
    const [diff, setDiff] = useState<number[]>([0,0]);
    const [pos, setPos] = useState<number[]>([0,0]);

    const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setDragging(true);
        setDiff([
            e.screenX - e.currentTarget.getBoundingClientRect().left, e.screenY - e.currentTarget.getBoundingClientRect().top
        ]);
    }

    const dragEnd = () => setDragging(false);

    const dragOnGoing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!isDragging) return;
        setPos([
            e.screenX - diff[0],
            e.screenY - diff[1]
        ]);
    }
    
    return (
        <div 
            className="absolute bg-yellow-400 h-7 w-36"
            style={{
                left: `${pos[0]}px`,
                top: `${pos[1]}px`,
            }}
            onMouseDown={dragStart}
            onMouseUp={dragEnd}
            onMouseMove={dragOnGoing}
        >
            
        </div>
    )
}

export default DraggableDiv;

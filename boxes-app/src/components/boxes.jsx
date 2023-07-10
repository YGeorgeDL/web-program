import React from 'react';
import Box from './box';

const Boxes = ({ onReset, boxes, onClickLeft, onClickRight, onDelete }) => {
    return (
        <React.Fragment>
            <button
                onClick={onReset}
                style={{ marginBottom: "15px" }}
                className='btn btn-info'>
                 Reset</button>
            {boxes.map(box => (
                <Box
                    key={box.id}
                    box={box}
                    onClickLeft={() => onClickLeft(box)}
                    onClickRight={() => onClickRight(box)}
                    onDelete={onDelete}
                />
            ))};
        </React.Fragment>
    );
}
 
export default Boxes;

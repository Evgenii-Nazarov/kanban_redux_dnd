import React from 'react';
import Column from "./Column";
import {Row} from "reactstrap";

function Board(props) {

    const {cards, columns} = props;

    return (
        <Row>
            {columns.map(el => <Column column={el} cards={cards}/>)}
        </Row>
    );
}

export default Board;

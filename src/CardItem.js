import React from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter} from 'reactstrap';
import {deleteCard, moveLeftCard, moveRightCard} from "./redux/action";

function CardItem(props) {

    const {card} = props;
    const {name, status, priority, _id} = card;

    const deleteButtonHandler = () => {
        props.deleteCard(_id);
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button onClick={() => props.moveLeftCard(card, props.columns)}>left</Button>
                {' '}
                <Button onClick={deleteButtonHandler}>Delete</Button>
                {' '}
                <Button onClick={() => props.moveRight(card, props.columns)}>right</Button>
            </CardFooter>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    moveRight: (card, columns) => dispatch(moveRightCard(card, columns)),
    moveLeftCard: (card, columns) => dispatch(moveLeftCard(card, columns)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

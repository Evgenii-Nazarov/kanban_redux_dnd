import React from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardBody, CardFooter, CardSubtitle, CardTitle} from 'reactstrap';

function CardItem(props) {

    const {card} = props;
    const {name, status, priority, _id} = card;

    const deleteButtonHandler = () => {

    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button>left</Button>
                {' '}
                <Button onClick={deleteButtonHandler}>Delete</Button>
                {' '}
                <Button>right</Button>
            </CardFooter>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    // deleteCard: (cardId) => dispatch(deleteCard(cardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

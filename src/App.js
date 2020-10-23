import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from "reactstrap";
import {addCard, getCards} from "./redux/action";

function App(props) {

    useEffect(() => {
        props.getCards()
    })

    const addCardButtonHandler = () => {
        const newCard = {
            name: 'Petr',
            status: 'review',
            priority: 3
        }

        props.addCard(newCard)
    }

    return (
        <Container>
            <Button onClick={addCardButtonHandler}>Add new card</Button>
            <Board cards={props.cards} columns={props.columns}/>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: (card) => dispatch(addCard(card)),
    getCards: () => dispatch(getCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

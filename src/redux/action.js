import axios from 'axios';



export function getCards() {
    return (dispatch) => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card/')
            .then(res => {
                dispatch({
                    type:'GET_CARDS',
                    payload: res.data
                })
            })
            .catch()
    }
}

export function addCard(card) {
    return (dispatch) => {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card/', card)
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}

export function deleteCard (cardId) {
    return (dispatch) => {
        axios.delete('https://nazarov-kanban-server.herokuapp.com/card/'+ cardId)
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}

export function moveRightCard (card, columns) {
    const colStatuses = columns.map(el => el.status);
    const status = colStatuses[colStatuses.indexOf(card.status) + 1];

    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/'+ card._id, {status})
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}

export function moveLeftCard (card, columns) {
    const colStatuses = columns.map(el => el.status);
    const status = colStatuses[colStatuses.indexOf(card.status) - 1];

    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/'+ card._id, { status })
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}


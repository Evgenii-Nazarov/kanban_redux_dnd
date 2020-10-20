const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Zhenia',
            status: 'todo',
            priority: 1
        },{
            _id: 2,
            name: 'Zhenia',
            status: 'review',
            priority: 1
        },{
            _id: 3,
            name: 'Zhenia',
            status: 'progress',
            priority: 1
        },
        {
            _id: 4,
            name: 'Petr',
            status: 'done',
            priority: 2
        }
    ],
    columns: [
        {
            status: 'todo',
            _id: 1
        },
        {
            status: 'review',
            _id: 2
        },
        {
            status: 'progress',
            _id: 2
        },
        {
            status: 'done',
            _id: 2
        },
    ]
}

const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD' :
            return {
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name: '1111',
                    status: 'done',
                    priority: 1
                }]
            }

        case 'DELETE_CARD' :
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        default:
            return state
    }
}

export default kanban;
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
            _id: 3
        },
        {
            status: 'done',
            _id: 4
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

        case 'GET_CARDS' :
            return {
                ...state,
                cards: action.payload
            }

        case 'DELETE_CARD' :
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        case 'MOVE_RIGHT' :
            const newList = state.cards.map(el => {
                if (el._id === action.payload){
                    const colStatuses = state.columns.map(el => el.status);
                    return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
                } else {
                    return el
                }
            })
            return {
                ...state,
                cards: newList
            }


        default:
            return state
    }
}

export default kanban;
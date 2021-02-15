const initialState = {
  cards: [],
  columns: [
    {
      status: "todo",
      name: "To do",
      _id: 1,
    },
    {
      status: "progress",
      name: "In progress",
      _id: 3,
    },
    {
      status: "review",
      name: "In review",
      _id: 2,
    },
    {
      status: "done",
      name: "Done",
      _id: 4,
    },
  ],
  modal: { visible: false },
};

const kanban = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };

    case "CHANGE_COLUMN":
      const movingCard = action.payload.card;
      const newStatus = action.payload.newStatus;
      const newList = state.cards.filter((el) => el._id !== movingCard._id);
      return {
        ...state,
        cards: [...newList, { ...movingCard, status: newStatus }],
      };

    case "UPDATE_STATE":
      const data = action.payload;
      return {
        ...state,
        ...data,
      };

    default:
      return state;
  }
};

export default kanban;

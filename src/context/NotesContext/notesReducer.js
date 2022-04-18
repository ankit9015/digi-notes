const defaultNotesState = {
  title: "",
  description: "",
  isPinned: false,
  tags: [],
  priority: "Low",
  cardColor: "defaultColor",
  createdAt: new Date().getTime(), //Date().toLocaleDateString()
  isInTrash: false,
};

const notesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE-TITLE":
      return { ...state, title: payload };
    case "UPDATE-DESCRIPTION":
      return { ...state, description: payload };
    case "UPDATE-COLOR":
      return { ...state, cardColor: payload };
    case "UPDATE-TAGS":
      return { ...state, tags: [...state.tags, payload] };
    case "REMOVE-TAG":
      return { ...state, tags: state.tags.filter((item) => item !== payload) };
    case "UPDATE-NOTE":
      return { ...payload };
    case "RESET-NOTE": {
      return { ...defaultNotesState };
    }
    case "UPDATE-PRIORITY":
      return { ...state, priority: payload };
    case "UPDATE-PIN":
      return { ...state, isPinned: !state.isPinned };
    default:
      return state;
  }
};

export { notesReducer, defaultNotesState };

const defaultFilterState = {
  sort: "",
  labels: [],
  priorities: [],
  searchQuery: "",
};

const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH":
      return { ...state, searchQuery: payload.trim() };
    case "FILTER-LABEL":
      return state.labels.includes(payload)
        ? {
            ...state,
            labels: state.labels.filter((item) => item !== payload),
          }
        : { ...state, labels: [...state.labels, payload] };
    case "FILTER-PRIORITY":
      return state.priorities.includes(payload)
        ? {
            ...state,
            priorities: state.priorities.filter((item) => item !== payload),
          }
        : { ...state, priorities: [...state.priorities, payload] };
    case "OLDEST-FIRST":
      return { ...state, sort: "oldest-first" };
    case "NEWEST-FIRST":
      return { ...state, sort: "newest-first" };
    case "CLEAR-ALL":
      return defaultFilterState;
    default:
      return state;
  }
};

export { defaultFilterState, filterReducer };

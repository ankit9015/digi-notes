import { defaultFilterState } from "./filterReducer";

const dateSort = (givenList, filterState) => {
  const { sort } = filterState;
  if (sort) {
    if (sort === "newest-first") {
      return givenList.sort(
        (note1, note2) => note1.createdAt - note2.createdAt
      );
    } else {
      return givenList.sort(
        (note1, note2) => note2.createdAt - note1.createdAt
      );
    }
  } else {
    return givenList;
  }
};

const filterLabels = (givenList, filterState) => {
  const { labels } = filterState;
  if (labels.length !== 0) {
    const newList = givenList.filter((givenNote) => {
      const { tags } = givenNote;
      const generatedResult = tags.map((tag) =>
        labels.includes(tag) ? true : false
      );
      return generatedResult.includes(true);
    });
    return newList;
  } else {
    return givenList;
  }
};

const filterPriorities = (givenList, filterState) => {
  const { priorities } = filterState;
  if (priorities.length !== 0) {
    const newList = givenList.filter((givenNote) => {
      const { priority } = givenNote;
      return priorities.includes(priority);
    });
    return newList;
  } else {
    return givenList;
  }
};

const searchFilter = (givenList, filterState) => {
  const { searchQuery } = filterState;
  return givenList.filter((givenNote) => {
    const results = [givenNote.title, givenNote.description].map((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return results.includes(true);
  });
};

const isDefault = (givenList, filterState) => {
  if (filterState.sort !== "") return givenList;
  if (filterState.searchQuery !== "") return givenList;
  if (filterState.labels.length !== 0) return givenList;
  if (filterState.priorities.length !== 0) return givenList;
  else return [];
};

const cumulateiveFilter = (...filters) => {
  return (givenList, filterState) => {
    const generatedList = filters.reduce(
      (results, currentFilter) => currentFilter(results, filterState),
      [...givenList]
    );
    return generatedList;
  };
};

export {
  isDefault,
  searchFilter,
  cumulateiveFilter,
  filterLabels,
  filterPriorities,
  dateSort,
};

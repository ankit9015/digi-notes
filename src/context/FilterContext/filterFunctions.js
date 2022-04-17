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

const cumulateiveFilter = (...filters) => {
  return (givenList, filterState) => {
    const generatedList = filters.reduce(
      (results, currentFilter) => currentFilter(results, filterState),
      [...givenList]
    );
    return generatedList;
  };
};

export { cumulateiveFilter, filterLabels, filterPriorities, dateSort };

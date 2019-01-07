export const sortReportListByOwner = list => {
  return list.sort((a, b) => {
    return a.owner < b.owner ? -1 : 1;
  });
};

export const sortReportListByReportTitle = list => {
  return list.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
};
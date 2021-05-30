export function checkDefaultDisplayLimit(limit) {
  return limit < 1 
    ? 1 
    : limit 
}


export function calculatePerPageLimit(breakpointDisplayLimits, defaultDisplayLimit) { 
  const takeGreatestLimit = [];
  
  if(typeof breakpointDisplayLimits === "object" && Object.entries(breakpointDisplayLimits).length > 0) {
    for (const [key, value] of Object.entries(breakpointDisplayLimits)) {
      let mql = window.matchMedia(`(min-width: ${key})`);
      if(mql.matches && typeof value === 'number') {
        value < 1
        ? takeGreatestLimit.push(1)
        : takeGreatestLimit.push(value);
      }
    }
  };

  return takeGreatestLimit.length > 0 //if any breakpoints in the provided map apply
    ? Math.max.apply(null, takeGreatestLimit)  //find the greatest corresponding limit
    : checkDefaultDisplayLimit(defaultDisplayLimit) //if none of them do, use the default.
};

export function mergeNavControlConfigObj(navControlsObj) {
  const defaultObj =  {arrows: {display: true, arrowA: {icon: '', iconColor: ''}, arrowB: {icon: '', iconColor: ''}}, dots: {display: true}, keyboard: {decrementalKeys: [], incrementalKeys: []}};
  return Object.assign({}, defaultObj, navControlsObj);
}

export function configureGridVars(children, currentPage, defaultLimit, displayLeftoversInline, gridRows, itemsPerPage, navControls, strictRowsEnabled) {
  const lastToRender = currentPage * itemsPerPage;
  const firstToRender = lastToRender - itemsPerPage;
  const screenWidth = window.innerWidth;
  const totalChildren = [...children].slice(firstToRender, lastToRender).length;
/*the following variable controls item spillage behavior. If strictRowsEnabled is true, columns are forced to tack on extra entries 
  to the quotient of totalChildren/rows in order to maintain the specified value of rows. If it's false, 
  the quotient assigned to columns will be kept and content may spill over into extra rows if needed
*/
  const round = strictRowsEnabled ? Math.ceil : Math.floor;
  const gridColumns = round(totalChildren / gridRows) < 1
    ? defaultLimit  //can safely assume the set default limit instead of just setting to 1. Worst case scenario, shouldTruncateRow takes over and does its job. This'll avoid some ugly single column leftovers. 
    : round(totalChildren / gridRows);
  const leftoverItemCount = totalChildren % gridColumns;
  const totalPages = Math.ceil([...children].length / itemsPerPage);
  const numRowsEmpty = gridRows - (gridRows - Math.floor((gridColumns * gridRows - totalChildren) / gridColumns));
  const hasEmptyRows = numRowsEmpty > 0 ? true : false;
  const shouldDisplayLeftoversInline = displayLeftoversInline && (currentPage === totalPages) ? true : false;

  /*NavControls config*/
  const {arrows, dots, keyboard} = navControls;
  const navControlTypeChecks = () => {
    if(typeof arrows.display !== 'boolean') {
      arrows.display = true;
    }
    if(typeof dots.display !== 'boolean') {
      dots.display = true;
    }
  };
  navControlTypeChecks();

  const varConfig = {
    arrowA: arrows.arrowA,
    arrowB: arrows.arrowB,
    arrows: arrows,
    dots: dots,
    firstToRender: firstToRender,
    gridColumns: gridColumns,
    hasEmptyRows: hasEmptyRows,
    keyboard: keyboard,
    lastToRender: lastToRender,
    leftoverItemCount: leftoverItemCount,
    numRowsEmpty: numRowsEmpty,
    screenWidth: screenWidth,
    shouldDisplayLeftoversInline: shouldDisplayLeftoversInline,
    totalChildren: totalChildren,
    totalPages: totalPages
  };
  return varConfig;
};

export const getSlideDirection = (currPage, lastPage, pageTotal) => {
  switch(currPage > lastPage) {  //set animation direction respective to current slide being lesser or greater than previous slide
    case true: 
      return (lastPage === 1) && (currPage === pageTotal)
        ? false
        : true;

    case false:
      return (currPage === 1) && (lastPage === pageTotal)
        ? true
        : false;

    default:
     return true;
  }
};
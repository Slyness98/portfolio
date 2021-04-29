export function calculatePerPageLimit(breakpointDisplayLimits, defaultDisplayLimit) { 
  const takeGreatestLimit = [];
  
  if(typeof breakpointDisplayLimits === "object" && Object.entries(breakpointDisplayLimits).length > 0) {
  
    for (const [key, value] of Object.entries(breakpointDisplayLimits)) {
      let mql = window.matchMedia(`(min-width: ${key})`);
      if(mql.matches) {
        takeGreatestLimit.push(value);
      }
    }
  };

  return takeGreatestLimit.length > 0
    ? Math.max.apply(null, takeGreatestLimit)
    : (defaultDisplayLimit || 5);
};


export function hasLessChildrenThanLimit(numChildren, pageLimit) {
  return numChildren < pageLimit
    ? true
    : false
}
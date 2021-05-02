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


export function hasLessChildrenThanLimit(numChildren, pageLimit) {
  return numChildren < pageLimit
    ? true
    : false
}
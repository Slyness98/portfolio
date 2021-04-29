import styled, {css} from 'styled-components';

export const Carousel = styled.div.attrs((props) => ({
  findCenter: () => {
    const {gridColumns, leftoverItemCount, totalChildren, gridLimit} = props;
   
    const hasLeftoverItems = (leftoverItemCount > 0) ? true : false;
    
    const missingRowEntries = hasLeftoverItems ? gridColumns - leftoverItemCount : 0;
    const timesLeftoversGoIntoColumns = hasLeftoverItems ? Math.floor(gridColumns / leftoverItemCount) : 0;
    const isLeftoverCountEven = (leftoverItemCount % 2 === 0) ? true : false; 
    const isColumnCountEven = (gridColumns % 2 === 0) ? true : false; 
    
    console.log(`find center variables {
      missingRowEntries: ${missingRowEntries}, 
      leftoverItemCount: ${leftoverItemCount},
      timesLeftoversGoIntoColumns: ${timesLeftoversGoIntoColumns}, 
      isLeftOverCountEven: ${isLeftoverCountEven},
      isColumnCountEven: ${isColumnCountEven},
      hasLeftoverItems: ${hasLeftoverItems},
      actualGridColums: ${gridColumns},
      gridLimit: ${gridLimit},
      totalChildren: ${totalChildren}
    }`);

    function determineParity(num) {
      return num % 2 === 0
        ? 'even'
        : 'odd'
    };

    const columnParity= determineParity(gridColumns);
    const leftoverParity = determineParity(leftoverItemCount);

    const pairLeftoverAndColumnParity = (columnPar, leftoverPar) => {
      console.log(`${columnPar}_${leftoverPar}`);
      return `${columnPar}_${leftoverPar}`;
    };

    const alignment = pairLeftoverAndColumnParity(columnParity, leftoverParity);

    switch(alignment) {
      case 'even_odd':
      case 'odd_even': 
       { 
         let styles = '';
         for(let i = 1; i < leftoverItemCount + 1; i += 1) {
           styles += `
             & div:nth-of-type(${totalChildren - leftoverItemCount + i}) {
               justify-self: end;
               transform: translateX(50%);
               ${timesLeftoversGoIntoColumns > 1
                ? `grid-column-start: ${leftoverItemCount > 1 ? Math.ceil(timesLeftoversGoIntoColumns/2) + i : Math.ceil(timesLeftoversGoIntoColumns/2)};`
                : ``
               }
             }
           `
          };
        console.log(styles)
        return css`${styles}`;
      }
     
      case 'even_even':
      case 'odd_odd':
       {
        let styles = '';
        for(let i = 1; i < leftoverItemCount + 1; i++) {
          styles += `
            & div:nth-of-type(${totalChildren - leftoverItemCount + i}) {
              grid-column-start: ${leftoverItemCount > 1 ? Math.ceil(timesLeftoversGoIntoColumns/2) + i : Math.ceil(timesLeftoversGoIntoColumns/2)};
            }
          `
        };
        console.log(styles)
        return css`${styles}`;
      }
    }
  }
}))`
  width: ${props => props.gridWidth || "100%"};
  margin: 0 auto;
  overflow: ${props => props.overflowBehavior || "auto"};
  display: grid;
  grid-template-columns: repeat(${props => props.gridColumns}, 1fr);
  grid-template-rows: repeat(${props => props.gridRows}, 1fr);
  justify-items: center;
  text-align: center;
  ${props => 
    (props.leftoverItemCount > 0) && props.alignLeftovers === 'center'
      ? props.findCenter()
      : ''
  }
`;
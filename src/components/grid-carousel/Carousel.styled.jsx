import styled, {css} from 'styled-components';

export const Carousel = styled.div.attrs((props) => ({
  findCenter: () => {
    const {gridColumns, leftoverItemCount, totalChildren} = props;
   
    const hasLeftoverItems = (leftoverItemCount > 0) ? true : false;
    const timesLeftoversGoIntoColumns = hasLeftoverItems ? Math.floor(gridColumns / leftoverItemCount) : 0;

    function determineParity(num) {
      return num % 2 === 0
        ? 'even'
        : 'odd'
    };

    const columnParity= determineParity(gridColumns);
    const leftoverParity = determineParity(leftoverItemCount);

    const pairLeftoverAndColumnParity = (columnPar, leftoverPar) => {
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
             & :nth-child(${totalChildren - leftoverItemCount + i}) {
               justify-self: end;
               transform: translateX(50%);
               ${timesLeftoversGoIntoColumns > 1
                ? `grid-column-start: ${leftoverItemCount > 1 ? Math.ceil(timesLeftoversGoIntoColumns/2) + i : Math.ceil(timesLeftoversGoIntoColumns/2)};`
                : ``
               }
             }
           `
          };
        return css`${styles}`;
      }
     
      case 'even_even':
      case 'odd_odd':
       {
        let styles = '';
        for(let i = 1; i < leftoverItemCount + 1; i++) {
          styles += `
            & :nth-child(${totalChildren - leftoverItemCount + i}) {
              grid-column-start: ${leftoverItemCount > 1 ? Math.ceil(timesLeftoversGoIntoColumns/2) + i : Math.ceil(timesLeftoversGoIntoColumns/2)};
            }
          `
        };
        return css`${styles}`;
      }
      
      default: return '';
    }
  }
}))`
  width: ${props => props.gridWidth || "100%"};
  margin: 0 auto;
  overflow: ${props => props.overflowBehavior || "auto"};
  display: grid;
  /* grid-template-columns: repeat(${props => props.gridColumns}, 1fr); */
  grid-template-columns: ${props => props.displayLeftoversInline  // if this prop is true and we're on the last page, plop everything into one row
    ? css`repeat(${props => props.totalChildren}, 1fr)`
    : css`repeat(${props => props.gridColumns}, 1fr)`
  };
  grid-template-rows: ${props => props.displayLeftoversInline
    ? '1fr'
    : css`repeat(${props => props.shouldTruncateRow ? props.gridRows - props.rowsToTruncate : props.gridRows}, 1fr)`
  };
  /* grid-template-rows: repeat(${props => props.shouldTruncateRow ? props.gridRows - props.rowsToTruncate : props.gridRows}, 1fr); */
  justify-items: center;
  text-align: center;
  //if there are leftovers to center, the alignLeftovers prop is specified as 'center' (the default setting), 
  //and we aren't already setting the displayLeftoversInline prop to true in order to make the leftover layout a single row
  // then align all leftovers center; otherwise do nothing.
  ${props => 
    (props.leftoverItemCount > 0) && props.alignLeftovers === 'center' && props.displayLeftoversInline === false
      ? props.findCenter()
      : ''
  }
`;
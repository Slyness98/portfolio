import { useCallback, useEffect, useState } from "react";
import { useActiveSkillContext } from "../../../contexts/ActiveSkill.context";
import { usePlatformContext } from '../../../contexts/Platform.context';
import { TextWrapper, GridList, Excerpt } from "./GridTextAtoms.styled";

const GridText = () => {
  const platform  =usePlatformContext();
  const skillctx = useActiveSkillContext();
  const {details} = skillctx.currentSkill;
  const skillSummary = details[0];
  const skillDetails = details.slice(1);
  
  const [columnCount, setColumnCount] = useState(platform ? 1 : 2);
  
  const updateColumnCount = useCallback((val) => {
    setColumnCount(val)
  }, [setColumnCount]);

  const gridConfigProps = {
    $gridColumns: columnCount,
    $gridRows: Math.ceil(skillDetails.length / columnCount),
    $leftoverItemCount: skillDetails.length % columnCount,
    $totalChildren: skillDetails.length,
    $alignLeftovers: "center"
  }
  
  useEffect(() => {
    const colCount = platform ? 1 : 2;
    updateColumnCount(colCount);
  }, [platform, updateColumnCount])

  return (
    <TextWrapper tabIndex={0}>
      <p className="skillSummary">{skillSummary}</p>
      <GridList as="ul" {...gridConfigProps}>
      {skillDetails.map((item, idx) => {
        const shadowTintFormula = skillDetails.length < 4 
          ? .85 //if we have less than 4 entries, don't bother with box-shadow tint function and just make it a consistent 85% tint for all entries
          : (1 - ( (columnCount === 2) && (idx % 2 === 0) ? idx + 2 : idx + 1) / skillDetails.length ); 
          //Assuming we DO want to do this gradual tinting effect, we get the decimal value between 0 and 1 representing the 'A' value of the current element's box-shadow rgbA() color, take that result and subtract from 1 in order to make the effect go from dark to light instead of light to dark. 
          //Taking the overall operation described by the above, lets break down how the conditionals inside of the decimal calculation work 
          /*
            we have to determine if the columnCount is greater than 1 column because if it is we need to keep the shadowTint consistent across the whole row, instead of a unique value per entry as is done in a single column fashion. 
            If there's more than one column, we also have to alternate between offsetting the index by one or by two in order for row pairs to match. 
            The offset of idx + 2 is used instead of just simply idx because without it, the first entry will be a whole value of 1 (i.e pure black) and will offset the shade matching by 1, instead of keeping it inline as is intended. This has the added bonus of tinting the entries right away, instead of mathematically starting from pure black.
          */
        const minBoxShadowPercentage = .05;

        return (
          <Excerpt 
            key={`skillDetail--${idx}`}
            shadowTint={shadowTintFormula < minBoxShadowPercentage ? minBoxShadowPercentage : shadowTintFormula}
          >
            {item}
          </Excerpt>
        );  
       })  
      }
      </GridList>
    </TextWrapper>
  )
}
export default GridText;
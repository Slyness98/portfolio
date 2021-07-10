import {SkillDetailStyled, Icon} from './SkillDetailStyled.styled';
import {useActiveSkillContext} from '../../contexts/ActiveSkill.context';
import GridText from './atoms/GridText';
const SkillDetail = () => {
  const skillctx = useActiveSkillContext();
  const {toggleView} = skillctx;

  return (
    <SkillDetailStyled>
      <button className="unsetButton" onClick={() => toggleView()} autoFocus>
        <Icon className="far fa-times-circle"/>
      </button>
      <GridText />
    </SkillDetailStyled>
  )
};

export default SkillDetail;
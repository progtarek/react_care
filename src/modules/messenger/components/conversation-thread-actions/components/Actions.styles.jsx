import styled, { css } from 'styled-components';
import GroupIcon from '../../../../../assets/img/actions/ico_group.png';
import FilterIcon from '../../../../../assets/img/actions/ico_filter.png';
import SearchIcon from '../../../../../assets/img/actions/ico_search.png';

const ProfileActionIconStyle = css`
  background-image: url('${GroupIcon}');
  background-size: cover;
  width: 30px;
  height: 25px;
`;

const FilterActionIconStyle = css`
  background-image: url('${FilterIcon}');
  background-size: cover;
  width: 24px;
  height: 26px;
`;

const SearchActionIconStyle = css`
  background-image: url('${SearchIcon}');
  background-size: cover;
  width: 26px;
  height: 26px;
`;

const mapPropsToActionIcon = (icon) => {
  switch (icon) {
    case 'group':
      return ProfileActionIconStyle;
    case 'filter':
      return FilterActionIconStyle;
    default:
      return SearchActionIconStyle;
  }
};

export const ActionIcon = styled.div`
  ${({ icon }) => mapPropsToActionIcon(icon)}
`;

export const ActionIconContainer = styled.div`
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s all;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

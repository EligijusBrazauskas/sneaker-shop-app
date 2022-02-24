import styled from 'styled-components';
import { lightGray } from '../variables';

type Props = {
  isSearchVisible?: boolean;
};

export const NavigationDesktopWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  gap: 12px;
  z-index: 101;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 12px 0px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 60px;
  }

  @media (min-width: 1200px) {
    padding: 20px 100px;
  }

  .search-input-wrapper {
    display: flex;
    gap: 8px;
    ${ (props) => !props.isSearchVisible && 'display: none' };

    .search {
      text-overflow: ellipsis;
      border: none;
      border-radius: 8px;
      padding: 0 20px;
      background-color: white;
      border: 2px ${ lightGray } solid;
      font-size: 16px;
      color: $light-gray-text;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 16px;
        color: $light-gray-text;
      }
    }
    .search::-webkit-search-cancel-button {
      appearance: none;
    }
  }

  .links {
    display: flex;
    gap: 32px;
  }
`;

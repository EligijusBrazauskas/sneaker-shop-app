import styled from 'styled-components';
import { lightGray } from '../variables';

export const NavigationMobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  gap: 12px;
  z-index: 101;

  .search {
    width: 100%;
    text-overflow: ellipsis;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    background-color: ${ lightGray };
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
`;


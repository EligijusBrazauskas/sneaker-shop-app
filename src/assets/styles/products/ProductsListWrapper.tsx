import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 20px 20px 20px;

  @media (min-width: 768px) {
    padding: 0 40px 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 60px 20px 60px;
    justify-content: start;
  }

  @media (min-width: 1200px) {
    padding: 0 100px 20px 100px;
  }
`;
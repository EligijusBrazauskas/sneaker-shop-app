import styled from 'styled-components';

export const BrandsListWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }

  .brands-list {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

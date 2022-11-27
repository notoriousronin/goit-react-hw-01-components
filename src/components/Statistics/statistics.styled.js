import styled from '@emotion/styled';

export const StatTitle = styled.h2`
  background: #fafad2;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  color: #000080;
`;

export const StatList = styled.ul`
  align-items: center;

  border: 5px dashed red;
  border-color: rgb(32, 27, 153);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  flex-direction: column;
  padding: 20px;
  width: 33.33333%;
  align-items: center;

  display: flex;
  justify-content: center;
`;

export const Label = styled.span`
  color: #000080;
  font-weight: bold;
  font-size: 17px;
`;

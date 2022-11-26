import styled from '@emotion/styled';

export const MainBox = styled.div`
  margin: auto;
  justify-content: center;
  padding: 10px 30px;
  width: 550px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #e6e6fa;
`;

export const Photo = styled.img`
  display: block;
  border: 15px solid #4b0082;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-top: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: #ffb6c1;
  padding: 5px;
  text-align: center;
`;

export const UserName = styled.p`
  color: #0000ff;
  font-weight: bolder;
  font-family: cursive;
  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #4b0082;
  font-size: 20px;
  font-weight: bold;
`;

export const Location = styled.p`
  color: #483d8b;
  font-size: 20px;
  font-weight: bold;
`;

export const StatList = styled.ul`
  display: flex;
  border: 5px solid #d8bfd8;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

import { MainBox } from 'components/Profile/profile.styled';
import { Table, Row, Data } from './transactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <MainBox>
      <Table>
        <thead>
          <Row>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Row>
        </thead>
        <tbody>
          {items.map(({ id, type, currency, amount }) => (
            <Row key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </Row>
          ))}
        </tbody>
      </Table>
    </MainBox>
  );
};

export default TransactionHistory;

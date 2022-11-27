import PropTypes from 'prop-types';
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;

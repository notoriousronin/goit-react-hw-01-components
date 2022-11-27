import { MainBox } from 'components/Profile/profile.styled';
import { StatTitle, StatList, StatItem, Label } from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <MainBox>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Label>{percentage}</Label>
          </StatItem>
        ))}
      </StatList>
    </MainBox>
  );
};

export default Statistics;

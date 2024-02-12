import { BodyProps } from './BodyContainer.type';
import BodyCard from './BodyCard';
import BodyCardWrapper from './BodyCardWrapper';

const BodyContainer = ({ ...bodyProps }: BodyProps) => (
  <BodyCardWrapper>
    <BodyCard {...bodyProps} />
  </BodyCardWrapper>
);

export default BodyContainer;

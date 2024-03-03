import styled from '@emotion/styled';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 24px 0px 24px;
  border-radius: 24px 24px 0px 0px;
  width: 100%;
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

export const GrayHandler = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 16px;
  background-color: ${colors.Secondary200};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
  padding: 16px 0px 20px 0px;
`;

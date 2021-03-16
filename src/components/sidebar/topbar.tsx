import { DoubleLeftOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Topbar = () => {
  return (
    <Container>
      <Inner className="toggle-icon-wrapper">
        <ExtractIconWrapper>
          <DoubleLeftOutlined style={{ color: '#37352F', opacity: 0.6 }} />
        </ExtractIconWrapper>
      </Inner>
    </Container>
  );
};

const ExtractIconWrapper = styled.i`
  cursor: pointer;
  display: inline-block;
  padding: 6px;
  height: 28px;
  line-height: 16px;
  border-radius: 3px;
  background-color: transparent;
  transition: background-color ease-in-out 0.3s;
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;

export const Inner = styled.div`
  width: 100%;
  padding: 0 10px;
  text-align: right;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
`;

const Container = styled.div`
  height: 37px;
  line-height: 37px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  -webkit-app-region: drag;
`;

import { SwapOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const ChangeRepo = () => {
  return (
    <Container>
      <Inner>
        <IconContainer>
          <SwapOutlined style={{ color: '#37352F', opacity: 0.6 }} />
        </IconContainer>
        <TextContent>切换仓库</TextContent>
      </Inner>
    </Container>
  );
};

const TextContent = styled.div`
  flex: 1;
`;

const IconContainer = styled.div`
  padding-right: 8px;
`;

const Inner = styled.div`
  padding: 0 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.div`
  height: 27px;
  line-height: 27px;
  width: 100%;
`;

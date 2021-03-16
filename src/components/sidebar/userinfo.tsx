import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Userinfo = () => {
  const avatarProps = {
    icon: <UserOutlined style={{ color: '#37352F', opacity: 0.6 }} />,
    src: null,
  };
  return (
    <Container>
      <Inner>
        <UserinfoIconWrapper>
          <Avatar {...avatarProps} />
        </UserinfoIconWrapper>
        <UserinfoTextContent>
          username username username username
        </UserinfoTextContent>
      </Inner>
    </Container>
  );
};

export const UserinfoTextContent = styled.div`
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserinfoIconWrapper = styled.i`
  padding-right: 8px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 14px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Container = styled.div`
  height: 37px;
  line-height: 37px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

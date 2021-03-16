import styled from '@emotion/styled';
import { AddItem } from './add-item';
import { ChangeRepo } from './change-repo';
import { Menus } from './menus';
import { Settings } from './settings';
import { Topbar } from './topbar';
import { Userinfo } from './userinfo';

export const Sidebar = () => {
  return (
    <Container>
      <Topbar />
      <Userinfo />
      <ChangeRepo />
      <Settings />
      <Menus />
      <AddItem />
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
  height: 100vh;
  background: #f7f6f3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  user-select: none;
  &:hover .toggle-icon-wrapper {
    opacity: 1;
  }
`;

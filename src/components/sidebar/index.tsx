import styled from '@emotion/styled';
import { AddItem } from './add-item';
import { ChangeRepo } from './change-repo';
import { Menus } from './menus';
import { Settings } from './settings';
import { Topbar } from './topbar';
import { Userinfo } from './userinfo';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Topbar />
      <Userinfo />
      <ChangeRepo />
      <Settings />
      <Menus />
      <AddItem />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

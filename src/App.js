import * as React from 'react';

import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//import simpleRestProvider from 'ra-data-simple-rest';
import { createMuiTheme } from '@material-ui/core/styles';

import { List as UsersList } from './user/List';
import { List as PostsList } from './post/List';
import { Edit as PostEdit } from './post/Edit';
import { Create as PostCreate } from './post/Create';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Album';
import Dashboard from './doshboard/Dashboard';
import authProvider from './authentication/authProvider';
import dataProvider from './API/dataProvider';
import Page404 from './page404';

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    catchAll={Page404}
    theme={theme}
    disableTelemetry >
    <Resource name="users" list={UsersList} icon={UserIcon} />
    <Resource name="albums" list={ListGuesser} icon={AlbumIcon} />
    <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;

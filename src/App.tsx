import React from 'react';
import Dashboard from './pages/Dashboard';
import { Admin, Resource } from 'react-admin';
import { UsersList } from './pages/users';
import authProvider from './providers/authProvider';
import simpleRestProvider from './providers/ra-strapi-rest';
import {API_BASE_URL} from "./constants/api";
import { Layout } from "./components/layout";
import { Login } from "./components/layout";
import {lightTheme, darkTheme} from "./components/layout/themes";

import events from './pages/events';

const dataProvider = simpleRestProvider(API_BASE_URL);

const App = () => (
        <Admin
            title=""
            dashboard={Dashboard}
            dataProvider={dataProvider}
            loginPage={Login}
            layout={Layout}
            theme={lightTheme}
            // authProvider={authProvider}
        >
            <Resource name="users" list={UsersList} />
            <Resource name="events" {...events}/>
        </Admin>
);

export default App;

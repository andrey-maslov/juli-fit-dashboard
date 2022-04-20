import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UsersList = (props: any) => {
    return (
        <div>
            <div>some test</div>

            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="id"  />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" label="Email" />
                </Datagrid>
            </List>
        </div>
    )
};
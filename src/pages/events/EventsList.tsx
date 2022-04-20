import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    ReferenceInput,
    SelectInput,
    TextInput,
    SimpleList, DateField, BooleanField, NumberField
} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="userId" label="Website" reference="users" allowEmpty>
        <SelectInput optionText="website" />
    </ReferenceInput>,
];

const EventsList = (props: any) => {

    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    return (
        <List filters={eventFilters} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.id} views`}
                    tertiaryText={record => new Date().toLocaleDateString()}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="name" />
                    <DateField source="date" />
                    <NumberField source="totalCapacity" />
                    <TextField source="startsAt" />
                    <TextField source="endsAt" />
                    <BooleanField source="isFree" />
                    <TextField source="trainer" />

                    {/*<ReferenceField source="userId" reference="users">*/}
                    {/*    <TextField source="name" />*/}
                    {/*</ReferenceField>*/}
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};

export default EventsList;
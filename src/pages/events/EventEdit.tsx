import * as React from "react";
import {BooleanInput,NumberInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput} from "react-admin";
import {Event} from "../../types";

interface EventProps {
    record: Event
}

const EventTitle = ({ record }: any) => {
    return <span>Event {record ? `"${record.name}"` : ''}</span>;
};

const EventEdit = (props: any) => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="startsAt" />
            <TextInput source="endsAt" />
            <BooleanInput source="isFree" />
            <BooleanInput source="isCancelled" />
            <NumberInput source="totalCapacity" />
            <TextInput source="trainer" />
            <ReferenceInput source="username" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default EventEdit;
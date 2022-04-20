import * as React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    BooleanInput,
    NumberInput,
    DateInput,
    required,

} from 'react-admin';
import {BasicTimePicker} from "../../components/BasicTimePicker/BasicTimePicker";

export const EventCreate = () => {
    const [startTime, setStartTime] = React.useState<Date | null>(null);
    const [endTime, setEndTime] = React.useState<Date | null>(null);

    return (
        <Create>
            <TabbedForm defaultValues={{sales: 0}}>
                <FormTab
                    label="Common"
                    sx={{maxWidth: '40em'}}
                >
                    <TextInput
                        name="name"
                        autoFocus
                        source="name"
                        fullWidth
                        validate={required()}
                    />
                    <TextInput
                        name="trainer"
                        autoFocus
                        source="trainer"
                        fullWidth
                        validate={required()}
                    />
                    <BooleanInput
                        name="isFree"
                        source="isFree"
                        fullWidth
                    />
                    <NumberInput
                        name="totalCapacity"
                        source="totalCapacity"
                        fullWidth
                    />
                </FormTab>
                <FormTab
                    label="Date and Time"
                    path="details"
                    sx={{maxWidth: '40em'}}
                >
                    <DateInput
                        name="date"
                        source="date"
                    />
                    <TextInput
                        placeholder="HH:mm:ss.SSS"
                        name="startsAt"
                        source="startsAt"
                    />
                    <TextInput
                        placeholder="HH:mm:ss.SSS"
                        name="endsAt"
                        source="endsAt"
                    />

                    {/*<BasicTimePicker value={startTime} setValue={setStartTime} label="Start time" />*/}
                    {/*<BasicTimePicker value={endTime} setValue={setEndTime} label="End time" />*/}
                </FormTab>

            </TabbedForm>
        </Create>
    );
};

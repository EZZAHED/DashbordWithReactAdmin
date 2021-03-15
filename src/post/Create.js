import * as React from "react";
import {
    Create as RaCreate,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const Create = props => (
    <RaCreate {...props}>
        <SimpleForm >
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </RaCreate>
);
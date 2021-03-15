import * as React from "react";
import {
    Edit as RaEdit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const Edit = props => (
    <RaEdit {...props} title={<PostTitle />}>
        <SimpleForm >
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </RaEdit>
);
import * as React from "react";
import { List as RaList, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import Filter from "./Filter";

const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <h6 >Post details</h6>
        <p >
            Posts will only be published once an editor approves them
        </p>
    </div>
);


export const List = props => (
    <RaList {...props} filters={<Filter />} aside={Aside} >
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </RaList>
);
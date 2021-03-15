import * as React from "react";
import { Filter as RaFilter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

const Filter = (props) => (
    <RaFilter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </RaFilter>
);

export default Filter;
import * as React from "react";
import get from 'lodash/get';
import { List as RaList, Datagrid, TextField, EmailField, NumberField, UrlField } from 'react-admin';
import { ChipField, SingleFieldList, ReferenceManyField, FunctionField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const PurpleTextField = ({ record, source }) => (
    <span style={{ color: 'green' }}>{get(record, source)}</span>
);
const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});

const MyUrlField = ({ record = {}, source }) => {
    const classes = useStyles();
    return (
        <a href={'https://'+record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    );
}

//-----------------------------------------------------------
export const List = props => {

    console.log("User List props", props);
    return (
        <RaList {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="id" options={{ style: 'percent' }} />
                <PurpleTextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.city" />
                <TextField source="phone" />
                <TextField source="company.name" />
                <MyUrlField source="website" />
                <ReferenceManyField reference="albums" label="Albums" target="userId" >
                    <SingleFieldList>
                        <ChipField source="title"  disabled  />
                    </SingleFieldList>
                </ReferenceManyField>

                <FunctionField label="Geo" render={record => `${record.address.geo.lat}:${record.address.geo.lng}`} />

            </Datagrid>
        </RaList>
    )
};
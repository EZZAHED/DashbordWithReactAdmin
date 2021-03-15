import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Page404 = () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <h1>Error 404 </h1>
            <h2>Page not found</h2>
        </CardContent>
    </Card>
);

export default Page404;
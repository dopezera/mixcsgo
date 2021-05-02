import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { listUsers } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../components/PageHeader';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  {
    field: 'impact',
    headerName: 'LVL',
    type: 'number',
    width: 90,
  },
  {
    field: 'winPercentage',
    headerName: 'Win Percentage',
    type: 'number',
    width: 90,
  },
  {
    field: 'kdr',
    headerName: 'KDR',
    type: 'number',
    width: 90,
  },
];

export default function DataTable() {

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: '100%',
        backgroundColor: '#fff',
    },
    });

const classes = useStyles();

const dispatch = useDispatch();
const userList = useSelector((state) => state.userList); //definindo reducer
const { loading, error, users } = userList; 

users.map( (user) => { //fazendo transformacoes pra exibicao fazer sentido pro usuario
  user.impact = Math.trunc(user.impact*10);
  user.winPercentage = user.winPercentage*100;
});

React.useEffect(() => {
    dispatch(listUsers()); 
}, []);

  return (
    <>
    <PageHeader 
        title="Jogadores" 
        subtitle="Encontre jogadores por Level, Percentual de vitórias ou KDR." 
        />

    {loading ? (
        <LoadingBox></LoadingBox>
    ) : error? (
        <MessageBox>{error}</MessageBox>
    ) : (
    <div style={{ height: 700, width: '100%', paddingLeft: '100px', paddingRight: '100px' }}>
      <DataGrid 
        sortModel=
        {[
                {
                field: 'impact',
                sort: 'desc',
                },
        ]} 
        className={classes.table} 
        rows={users} 
        columns={columns} 
        pageSize={10}
        />
    </div>
    )}
    </>
  );
}

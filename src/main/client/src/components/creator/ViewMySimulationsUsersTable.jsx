import React, { Component } from 'react';
import MaterialTable from 'material-table';

export default class ViewMySimulationsUsersTable extends Component {
  render() {
    let columns = [
      { title: 'User Name', field: 'email' },
      { title: 'Score', field: 'score' },
      { title: 'Date', field: 'date' }
    ];
    return (
      <div className="ml-4 mr-4 mt-3 mb-0">
        <MaterialTable
          title="Results"
          columns={columns}
          data={this.props.simulationResults}
          options={{
            headerStyle: {
              fontWeight: 'bold',
              padding: '1rem',
              fontSize: '1rem',
              backgroundColor: "#f0f0f0",
            },
            rowStyle: {
              padding: '1rem',
            },
            actionsCellStyle: {
              color: '#d93636',
            },
            actionsColumnIndex: 2,
            draggable: 0,
            paging: 5,
            pageSizeOptions: 0,
            pageSize: 10,
          }}
        />
      </div>
    );
  }
}
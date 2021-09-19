import React,{useState,useEffect} from 'react'

import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import API from "../api";
import { id } from 'date-fns/locale';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export const RoomReport = () => {

    const [rows, setRows] = useState();

   const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        API.get(`/room/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
          },
          {
            field: 'phone',
            headerName: 'Phone No',
            width: 150,
          },
          {
            field: 'email',
            headerName: 'E-mail',
            width: 150,
          },
          {
            field: 'roomName',
            headerName: 'Room Type',
            width: 150,
            editable: true,
          },
          {
            field: 'roomNo',
            headerName: 'No of Rooms',
            width: 180,
          },
        
        {
          field: 'checkIn',
          headerName: 'Check-In Date',
          width: 150,
        },
        {
          field: 'checkOut',
          headerName: 'Check-out Date',
          width: 150,
          editable: true,
        },{
          field: 'adultNo',
          headerName: 'No Of Adults',
          width: 150,
        },
        {
            field: 'childNo',
            headerName: 'No of Children',
            width: 150,
          },
        
          {
            field: 'loyalty',
            headerName: 'Loyalty Type',
            width: 150,
          },
        
          {
            field: 'remarks',
            headerName: 'Remarks',
            width: 150,
          },
        
       
          {
            field: 'status',
            headerName: 'Status',
            width: 150,
          },
        
      ];
      

    return (
        <div>

            <>
                <Button className="reportBtn" onClick={() => setModalShow(true)}>Generate Report</Button>

            </>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Room Booking History Report
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ height: 450, width: '100%' }}>
                     {rows &&   <DataGrid
                     components={{
                        Toolbar: CustomToolbar,
                      }}
                     getRowId={(row) => row._id}
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

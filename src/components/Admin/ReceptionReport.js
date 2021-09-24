import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import API from "../api";
import { id } from 'date-fns/locale';
import { Container, createStyles, makeStyles } from "@material-ui/core";

import CachedIcon from '@mui/icons-material/Cached';

const useStyles =  makeStyles({
  rotateIcon: {
    animation: "spin 1.5s linear infinite",
   
  }
})

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export const ReceptionReport = () => {
    const classes = useStyles();
    
    const [loadingGenBtn, setloadingGenBtn] = useState(false);
    const [rows, setRows] = useState();
    const [modalShow, setModalShow] = useState(false);


    const  ModelOpen = () => {
      
      setloadingGenBtn( true );
      
          //Faking API call here
          setTimeout(() => {
            setloadingGenBtn( false );
            setModalShow(true)
          }, 1000);
        };


    useEffect(() => {
        API.get(`/reception/`)
            .then(res => {
                console.log(res.data)
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    useEffect(() => {
        console.log("rows",rows)
    }, [rows])
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
            field: 'receptionName',
            headerName: 'Reception Hall Type',
            width: 230,
            editable: true,
          },
          {
            field: 'category',
            headerName: 'Category',
            width: 180,
          },
        
        {
          field: 'funcDate',
          headerName: 'Function Date',
          width: 180,
        },
        
        {
          field: 'capacity',
          headerName: 'Capacity',
          width: 150,
        },
        {
          field: 'entType',
          headerName: 'Entertainment',
          width: 190,
          editable: true,
        },{
          field: 'menu',
          headerName: 'Menu Type',
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
                {/* <Button className="reportBtn" onClick={() => setModalShow(true)}>Generate Report</Button> */}

                <Button variant="primary" className="reportBtn"  variant="primary" onClick={() => ModelOpen()} disabled={loadingGenBtn}>
                                 { loadingGenBtn ?  (
                                      <Container maxWidth="sm">
                                     <CachedIcon className={classes.rotateIcon} id="refreshIcon"/>
                                      <style>{`
                                            @keyframes spin {
                                                 0% { transform: rotate(0deg); }
                                                 100% { transform: rotate(360deg); }
                                            }
                                        `}</style>
                                         {loadingGenBtn && <span>Generating</span>}
                                         
                                    </Container>
                                     ):''}
                                     {!loadingGenBtn  && <span>Generate Report</span>}
                                    </Button>

            </>
            <Modal  className="ReportModel"
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reception Hall Booking History Report
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

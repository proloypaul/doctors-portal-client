import React, { useEffect, useState } from 'react';
import useAuth from '../../../Context/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const LogerAppointment = ({date}) => {
    const {user, token} = useAuth()
    const [logerOrder, setLogerOrder] = useState([])
    
    useEffect(() => {
        const url = `http://localhost:3800/appointmentorders?email=${user.email}&date=${date}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLogerOrder(data)
            })
    }, [date])

    // table style meterial ui code 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));
      

    return (
        <div>
            <h1>Appointment {logerOrder.length}</h1>
            <TableContainer component={Paper}>
            <Table  aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Time</StyledTableCell>
                    <StyledTableCell align="right">ServiceName</StyledTableCell>
                    <StyledTableCell align="right">Payment</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {logerOrder.map((row) => (
                    <StyledTableRow key={row._id}>
                    <StyledTableCell align="right">{row.patientName}</StyledTableCell>
                    <StyledTableCell align="right">{row.time}</StyledTableCell>
                    <StyledTableCell align="right">{row.serviceName}</StyledTableCell>
                    <StyledTableCell align="right">{row.payment ? 'paid' : <Link to={`dashboard/payment/${row._id}`}><button>Pay</button></Link>}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default LogerAppointment;
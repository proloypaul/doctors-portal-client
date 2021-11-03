import React from 'react';
import Header from '../Header/Header';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const YourAppointment = () => {
    return (
        <div>
            <Header></Header>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointment></AvailableAppointment>
        </div>
    );
};

export default YourAppointment;
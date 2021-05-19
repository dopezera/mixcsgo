import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { listCheckedIn } from '../actions/userActions'; //criar action
import SectionTabs from "../views/Components/Sections/SectionTabs";


export default function CheckinScreen() {

    

    return (

        <SectionTabs/>
    );
}
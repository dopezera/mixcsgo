import { useDispatch, useSelector } from "react-redux";

import { listCheckedIn } from '../actions/userActions'; //criar action
import {checkin} from '../actions/userActions';
import SectionTabs from "../views/Components/Sections/SectionTabs";


export default function CheckinScreen() {

    //checkedin list
    //teams list

    const dispatch = useDispatch();

    let checkedIn = [
        {
          "id": 2,
        },
        {
            "id": 4,
        },
        {
            "id": 6,
        },
        {
            "id": 8,
        },
    ]
    /*

    const checkedInList = useSelector((state) => state.checkedInList); //definir reducer
    const { loading, error, checkedInUsers } = checkedInList; 
    
    React.useEffect(() => {
        dispatch(listCheckedIn()); 
    }, []);

    const checkinHandler = () => {
        dispatch(checkin(userid));
    }
    */

    return (
        //checkin button onClick -> insertInDB (only shows if user isnt already checkedin)
        //<IconButton onClick={checkinHandler}></IconButton>
        <SectionTabs checkedIn={checkedIn}/>
    );
}
import { useContext } from "react";
import MeetupList from "../components/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouriteMeetups() {
    const favCtx = useContext(FavouritesContext)


    return (
        <MeetupList meetups={favCtx.favourites}></MeetupList>
    )
}

export default FavouriteMeetups;
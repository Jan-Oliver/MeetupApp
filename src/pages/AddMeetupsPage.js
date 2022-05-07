import AddMeetupForm from "../forms/AddMeetupForm"

function AddMeetup(props) {
    return (
        <AddMeetupForm user={props.user} setLoading={props.setLoading}></AddMeetupForm>
    )
}

export default AddMeetup
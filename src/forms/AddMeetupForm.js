import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddMeetupForm(props) {
  const [meetupName, setMeetupName] = useState("");
  const [meetupTime, setMeetupTime] = useState("");
  const [meetupCountry, setMeetupCountry] = useState("Germany");
  const [meetupStreet, setMeetupStreet] = useState("");
  const [meetupCity, setMeetupCity] = useState("");
  const [meetupZip, setMeetupZip] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    var formData = {
      name: meetupName,
      href: "#",
      imageSrc: "https://picsum.photos/" + String(Math.floor(Math.random() * 100) + 500),
      imageAlt: "Random image generated for Meetup.",
      place:
        meetupCountry +
        ", " +
        meetupZip +
        " " +
        meetupCity +
        ", " +
        meetupStreet,
      time: meetupTime,
    };
    const user = props.user
    console.log(user.id)
    try {
      const newItem = await user.functions.insertMeetup(formData)
      console.log(newItem)
    } catch (err) {
      console.error('error occured: ', err.message)
    }
    resetForm();
    props.setLoading(true)
    navigate("/", { replace: true })
  }

  function resetForm() {
    setMeetupName("");
    setMeetupCountry("Germany");
    setMeetupCity("");
    setMeetupStreet("");
    setMeetupTime("");
    setMeetupZip("");
  }
  return (
    <>
      <div className="mt-10 sm:p-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add Meetup
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Here you can share your Meetups with the world!
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="meetup-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Meetup Name
                      </label>
                      <input
                        type="text"
                        name="meetup-name"
                        id="meetup-name"
                        value={meetupName}
                        onChange={(e) => setMeetupName(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="meetup-time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Meetup Time
                      </label>
                      <input
                        type="text"
                        name="meetup-time"
                        id="meetup-time"
                        value={meetupTime}
                        onChange={(e) => setMeetupTime(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={meetupCountry}
                        onChange={(e) => setMeetupCountry(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Germany</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        value={meetupStreet}
                        onChange={(e) => setMeetupStreet(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        value={meetupCity}
                        onChange={(e) => setMeetupCity(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        value={meetupZip}
                        onChange={(e) => setMeetupZip(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

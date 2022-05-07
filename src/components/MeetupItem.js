import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
export default function MeetupItem(props) {
  const favouritesCxt = useContext(FavouritesContext);

  const isFavourite = favouritesCxt.isItemFavourite(props.meetup._id.toString());

  function handleToggleFavourite() {
    if (isFavourite) {
      favouritesCxt.removeFavourite(props.meetup._id.toString());
    } else {
      favouritesCxt.addFavourite(props.meetup);
    }
  }

  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <div className="relative z-10">
          <div className="absolute right-1 top-1">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
              onClick={handleToggleFavourite}
            >
              {isFavourite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <img
          src={props.meetup.imageSrc}
          alt={props.meetup.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <div>
              <span aria-hidden="true" className="absolute" />
              {props.meetup.name}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.meetup.place}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{props.meetup.time}</p>
      </div>
    </div>
  );
}

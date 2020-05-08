import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
import Moment from "react-moment";

let startDate = '2020-03-01';
let endDate   = '2020-03-01';

// API_KEY = "api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN";

function Asteroids() {
    const res = useFetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY&api_key=DEMO_KEY`, {});

    console.log("Asteroids fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    const asteroidData = res.response.near_earth_objects;
    console.log(asteroidData);

    const test = asteroidData[0].close_approach_data[0].miss_distance;

    console.log('TEST-->', test);

    return (
        // Asteroids
        <div className="container mx-auto text-left mb-12 md:pt-12">
            <h2 className="md:w-74 bg-teal-300 mb-8 md:mb-0">
                Passing close to Earth
            </h2>
            <div className="mx-auto pr-30 pb-10 md:mt-10">
                <div className="flex pt-4 md:pl-4">
                    <span className="w-1/4 font-bold text-xxs md:text-sm">
                        Name
                    </span>
                    <span className="w-1/4 font-bold text-xxs md:text-sm">
                        Approach Date
                    </span>
                    <span className="w-1/4 font-bold text-xxs md:text-sm">
                        Diameter (Km)
                    </span>
                    <span className="w-1/4 font-bold text-xxs md:text-sm">
                        Speed (Km/second)
                    </span>
                    <span className="w-1/4 font-bold text-xxs md:text-sm">
                        Distance from Earth (km)
                    </span>
                </div>

                <div className="mx-auto pt-5 text-1xl font-light ">
                    {asteroidData.map(asteroid => {
                        return (
                            <ul className="flex mb-3">
                                <li
                                    className="w-1/5 bg-gray-100 h-10 md:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                    key={asteroid.id}
                                >
                                    {asteroid.name}
                                </li>
                                <li
                                    className="w-1/5 h-10 sm:h-12 pl-3 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                    key={asteroid.id}
                                >
                                    {" "}
                                    <Moment format="DD/MM/YYYY">
                                        {asteroid.approach_date}
                                    </Moment>
                                </li>
                                <li
                                    className="w-1/5 bg-gray-100 h-10 sm:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                    key={asteroid.id}
                                >
                                    {(asteroid.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}
                                </li>
                                {/* <li
                                    className="w-1/5 h-10 md:h-12 pl-2 md:pl-4 pt-3 md:pt-4 text-xxs md:text-sm"
                                    key={asteroid.id}
                                >
                                    {asteroid.close_approach_data[0].relative_velocity.kilometers_per_second}
                                </li> */}
                                {/* <li
                                    className="w-1/5 bg-gray-100 h-10 md:h-12 pl-2 md:pl-4 pt-2 md:pt-4 text-xxs md:text-sm"
                                    key={asteroid.id}
                                >
                                    {asteroid.close_approach_data[0].miss_distance.kilometers}
                                </li> */}
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
        // !END of Asteroids
    );
}

export default Asteroids;

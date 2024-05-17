import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
const TableContainer = () => {


    const [flightsData, setFlightsData] = useState([])
    useEffect(() => {
        axios.get('data.json').then((res) => {
            setFlightsData(res.data.flightOffer)
            console.log("result is ", res)
        }).then((err) => {
            console.log("err is ", err)
        })
    }, [])
    return (
        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FLIGHT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        AIRCRAFT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CLASS
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FARE
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ROUTE
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DEPARTURE
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ARRIVAL
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DURATION
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PRICE
                    </th>

                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                {
                    flightsData.map((flight) => (
                        < tr key={flight._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.itineraries[0]?.segments?.map((flight, i) =>
                                (
                                    <div key={i} className="text-sm text-gray-900">
                                        {flight?.marketingCarrier}  {flight?.aircraft}
                                    </div>
                                ))
                                }
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.itineraries[0]?.segments?.map((flight, i) =>
                                (
                                    <div key={i} className="text-sm text-gray-900">
                                        {flight?.flightNumber}
                                    </div>

                                ))
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight.class[0].map((classArr, i) => (
                                    <div key={i} className="text-sm text-gray-900">
                                        {classArr}
                                    </div>
                                ))}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight.fareBasis[0].map((fareArr, i) => (
                                    <div key={i} className="text-sm text-gray-900">
                                        {fareArr}
                                    </div>
                                ))}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.itineraries[0]?.segments?.map((flight, i) =>
                                (
                                    <div key={i} className="text-sm text-gray-900">
                                        {flight?.departure?.iataCode} {flight?.arrival?.iataCode}
                                    </div>

                                ))
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.itineraries[0]?.segments?.map((flight, i) =>
                                (
                                    <div key={i} className="text-sm text-gray-900">
                                        {flight?.arrival?.at}
                                    </div>

                                ))
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.itineraries[0]?.segments?.map((flight, i) =>
                                (
                                    <div key={i} className="text-sm text-gray-900">
                                        {flight?.departure?.at}
                                    </div>

                                ))
                                }
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {flight?.itineraries[0]?.duration
                                    }
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {flight?.price}
                                </div>
                               <button className='bg-blue-900 px-3 py-1 rounded-md text-white'>SELECT</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default TableContainer;
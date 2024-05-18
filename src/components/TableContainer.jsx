import React from 'react';
const TableContainer = ({ flightsData }) => {

    return (
        <table class="min-w-[80%] divide-y divide-gray-200 mx-auto">
            <thead class="bg-[#E5E7EB]">
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
                    flightsData?.map((flight, i) => (
                        < tr key={flight?._id} class={i % 2 == 1 ? `bg-[#E5E7EB]` : `bg-white`} >
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
                                {flight?.class[0]?.map((classArr, i) => (
                                    <div key={i} className="text-sm text-gray-900">
                                        {classArr}
                                    </div>
                                ))}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {flight?.fareBasis[0]?.map((fareArr, i) => (
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
                                <button className='bg-[#312E81] text-sm px-3 py-1 rounded-md text-white'>SELECT</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default TableContainer;
import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
const TableContainer = () => {

    
const [flightsData,setFlightsData]=useState([])
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
                     flightsData.map((flight)=>(
                    < tr key={flight._id}>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{flight?.class[0]}</div>
                            {/* <div class="text-sm text-gray-500">{flight?.class[1]}</div> */}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{flight?.fareBasis[0]}</div>
                            <div class="text-sm text-gray-500">{flight?.fareBasis[1]}</div>
                        </td>
                    </tr>
                     ))
                  }    
            </tbody>
        </table>
    );
};

export default TableContainer;
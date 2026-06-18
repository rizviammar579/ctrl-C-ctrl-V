import React, { useContext } from 'react'
import Row from './Row'
import { useEffect, useState } from 'react'

const Table = ({ displayData, get, myFunc }) => {




  return (
    <div>

      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="px-5 py-10  pb-60 flex flex-col justify-center items-center">

          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="min-w-[560px] table-auto items-center w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Website URL</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Username</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Password</th>
                  <th className="w-5 title-font font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>

                {displayData.map(res => {
                  return <Row res={res} key={res._id} get={get} myFunc={myFunc} />
                })}


              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Table

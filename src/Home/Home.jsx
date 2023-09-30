import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LeftSearch, } from '../Redux/DataSlice'
import { rightSearch } from '../Redux/rightDataSlice'


export default function Home() {


  let dispatch = useDispatch();

  let { data, massage } = useSelector((state) => state.dataSearch);

  let { rightData, rightMassage } = useSelector((state) => state.rightDataSearch)


  return <>


    <div className='container'>
      <div className="row text-center">
        <div className='col-md-3 left-search-bar'>

          <div className=' border-3 border my-3'>
            <input className='form-control w-75 mx-auto my-2' onChange={(e) => dispatch(LeftSearch(e.target.value))} type='number' placeholder='search... ' />
          </div>

          <div className='my-2 border border-2 '>
            <h4 className='p-2'>Overview Fields</h4>

            <ul className='list-unstyled '>
              {data.overviewFields == undefined ? <span className='text-warning ' >{massage} </span> : <>
                {Object.keys(data.overviewFields).map(key => {
                  return (
                    <div key={key}>
                      <li className='p-2 m-2' >
                        {key}: {data.overviewFields[key]}
                      </li>
                    </div>
                  );
                })}
              </>}
            </ul>



          </div>
        </div>

        <div className=' col-md-6 my-2'>

          <div className='border border-2 my-3'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 my-1 '>
                  <h4 className='my-3  border border-2'> Detailed Fields</h4>
                  <ul className='list-unstyled '>
                    {data.detailedFields == undefined ? <span className='text-warning ' >{massage} </span> : <>
                      {Object.keys(data.detailedFields).map(key => {
                        return (
                          <div key={key}>
                            <li className='p-2 m-2' >
                              {key}: {data.detailedFields[key]}
                            </li>
                          </div>
                        );
                      })}
                    </>}
                  </ul>

                </div>
                <div className='col-md-5 offset-2'>
                  <h4 className='my-3  border border-2'> Detailed Fields</h4>
                  <ul className='list-unstyled '>
                    {rightData.detailedFields == undefined ? <span className='text-warning ' >{rightMassage} </span> : <>
                      {Object.keys(rightData.detailedFields).map(key => {
                        return (
                          <div key={key}>
                            <li className='p-2 m-2' >
                              {key}: {rightData.detailedFields[key]}
                            </li>
                          </div>
                        );
                      })}
                    </>}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className='col-md-3 right-search-bar'>
          <div className=' border-3 border my-3'>
            <input className='form-control w-75 mx-auto my-2' onChange={(e) => dispatch(rightSearch(e.target.value))} type='number' placeholder='search... ' />
          </div>
          <div className='my-2 border border-2 '>
            <h4 className='p-2'>Overview Fields</h4>

            <ul className='list-unstyled '>
              {rightData.overviewFields == undefined ? <span className='text-warning ' >{rightMassage} </span> : <>
                {Object.keys(rightData.overviewFields).map(key => {
                  return (
                    <div key={key}>
                      <li className='p-2 m-2' >
                        {key}: {rightData.overviewFields[key]}
                      </li>
                    </div>
                  );
                })}
              </>}
            </ul>

          </div>



        </div>



      </div>


    </div>




  </>
}

import React from 'react'

function DonorsPage() {
  return (
    <>
      <form style={{display: 'flex', flexDirection: 'column', marginTop: '12%', marginLeft: '15%', backgroundColor: '#f0f0f8', width: '70%', borderRadius: '8px', padding: '3%'}} >
        <p style={{fontSize: '32px', fontWeight: 'bold'}}>Please fill out the form to make a donation</p>
        <label>Shelter Name</label>
        <input style={{border: 'solid 1px'}}/>
        <label>Shelter ID</label>
        <input style={{border: 'solid 1px'}} />
        <label>Available Units</label>
        <input style={{border: 'solid 1px'}}/>
        <label>Price per Unit</label>
        <input style={{border: 'solid 1px'}}/>
        <label>Is Available?</label>
        <div style={{display: 'flex', gap: '20px'}}>
        <button style={{border: 'solid 1px gray', color: 'white',padding: '8px', backgroundColor: 'green', borderRadius: '8px'}} >Yes</button> <br />
        <button style={{border: 'solid 1px gray', color: 'white', padding: '8px', backgroundColor: 'maroon', borderRadius: '8px'}} >No</button>
        </div> <br />
        <button type='submit' style={{border:'solid 1px gray', color: 'white', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}>Donate</button>
      </form>
    </>
  )
}

export default DonorsPage
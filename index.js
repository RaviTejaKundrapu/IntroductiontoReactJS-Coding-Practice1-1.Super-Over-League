const element = (
  //   Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Super Over League</h1>

    <div className='image-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='team-logos'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='team-logos'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btntext, setBtnText] = useState("enable light mode")
    const toggleStyle = ()=>{
        if(myStyle.color == 'white'){
            setMyStyle({
                    color: 'black',
                    backgroundColor: 'white'
            })
            setBtnText("enable dark mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
        })
        setBtnText("enable light mode")
        }
    }
  return (
    <div classNameName='container' style={myStyle}>
    <h1>about Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header"  id="flush-headingThree">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree"  style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div classNameName="container my-3">
<button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
</div>
    </div>
  )
}

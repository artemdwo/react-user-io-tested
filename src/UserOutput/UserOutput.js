// React base
import React from 'react'

// styling
import './UserOutput.css'

// userOutput component main render
const userOutput = (prpt) => {
  return (
    <div className="UserOutput">
      <p>{prpt.userName} says: Lorem Ipsum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper metus elit, vel vestibulum arcu laoreet sit amet. Vestibulum iaculis erat et lacus ornare, non sagittis libero placerat. Quisque eleifend eros lacus, in fermentum ligula laoreet ac. Nullam augue est, mollis non erat a, mattis scelerisque turpis. Sed semper nibh arcu, et consectetur odio elementum eget. Nunc augue lectus, tincidunt nec est ac, venenatis sodales tellus. Etiam odio leo, placerat a arcu at, auctor suscipit nisi. Aliquam imperdiet lacinia orci, vitae ornare lectus lacinia ac. Quisque lacinia fringilla lectus, id aliquet justo ullamcorper sed. Aenean facilisis erat ut quam rhoncus, sit amet luctus erat congue. Phasellus vestibulum bibendum leo, ac pulvinar sem. Donec ac varius quam, eget efficitur ex.</p>
    </div>
  )
}

export default userOutput

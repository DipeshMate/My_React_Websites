import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
        <TestimonialCard name={"Dipesh"} feedback={"you are good coder!"}/>
        <TestimonialCard
          name={"Ramzi"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
        </section>
    </div>
  )
}

const TestimonialCard =({name,feedback})=>(
    <article>
        <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
        <h2>{name}</h2>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
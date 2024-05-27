import React from 'react'
import vg from "../assets/2.webp";
import { useEffect } from 'react';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {

  useEffect(() => {
    console.log("working");
});

  return (
    <>
            {/*home*/}
    <div className="home">Home
  <main>
    <h1>Dipesh Dev</h1>
    <p>Your Mate To Solve Your Problem</p>
  </main>
  </div>
  {/*home end*/}
  {/*home 2 starts*/}
  <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
        </p>
    </div>
</div>
{/*home 2 end*/}

{/*home 3 starts*/}
<div className="home3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
        </p>
        </div>
    </div>

    {/*home 3 ends*/}

        {/*home 4 starts*/}

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p><a target={'black'} href="https://google.in/">Google</a></p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p><a target={'black'} href="https://amazon.in/">Amazon</a></p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
             <p><a href="https://youtube.com/@dipesh8136" target={"blank"}> Youtube</a></p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p><a target={'black'} href="https://instagram.com/dipesh_mate1610">Instagram</a></p>
            </div>
          </article>
        </div>
      </div>
        {/*home 4 ends*/}

</>
    )
}

export default Home
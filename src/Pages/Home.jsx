import React, { useState } from 'react'
import "./style.css"
import "./script"
const Home = () => {
  const [hover1, setHover1] = useState(false)
  const hoverEfect1 = () => {
    setHover1(!hover1)
    console.log(hover1)
  }
  const [hover2, setHover2] = useState(false)
  const hoverEfect2 = () => {
    setHover2(!hover2)
  }
  const [hover3, setHover3] = useState(false)
  const hoverEfect3 = () => {
    setHover3(!hover3)
  }
  const [hover4, setHover4] = useState(false)
  const hoverEfect4 = () => {
    setHover4(!hover4)
  }

  return (
    <>
      <nav></nav>
		<div className="container">
			<div className="slider">

				<div className="box1 box">
					<div className="bg"></div>
					<div className="details">
						<h1>I'm the first Box</h1>
						<p >
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer lacinia dui lectus. Donec scelerisque ipsum
							diam, ac mattis orci pellentesque eget.
						</p>
						<h1 className="button">Check Now</h1>
					</div>

					<div className="illustration">
						
					</div>
				</div>


				<div className="box2 box">
					<div className="bg"></div>
					<div className="details">
						<h1>I'm the second Box</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer lacinia dui lectus. Donec scelerisque ipsum
							diam, ac mattis orci pellentesque eget.
						</p>
						<h1 className="button">Check Now</h1>
					</div>

					<div className="illustration">
						
					</div>
				</div>

				<div className="box3 box">
					<div className="bg"></div>
					<div className="details">
						<h1>I'm the third Box</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer lacinia dui lectus. Donec scelerisque ipsum
							diam, ac mattis orci pellentesque eget.
						</p>
						<h1 className="button">Check Now</h1>
					</div>

					<div className="illustration">
						
					</div>
				</div>

				<div className="box4 box">
					<div className="bg"></div>
					<div className="details">
						<h1>I'm the fourth Box</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer lacinia dui lectus. Donec scelerisque ipsum
							diam, ac mattis orci pellentesque eget.
						</p>
						<h1 className="button">Check Now</h1>
					</div>

					<div className="illustration">
						
					</div>
				</div>

				<div className="box5 box">
					<div className="bg"></div>
					<div className="details">
						<h1>I'm the fifth Box</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer lacinia dui lectus. Donec scelerisque ipsum
							diam, ac mattis orci pellentesque eget.
						</p>
						<h1 className="button">Check Now</h1>
					</div>

					<div className="illustration">
						
					</div>
				</div>

			</div>

			{/* <!-- <svg xmlns="http://www.w3.org/2000/svg" className="prev" width="56.898" height="91" viewBox="0 0 56.898 91">
				<path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" />
				</svg> --> */}
			{/* <!-- <svg xmlns="http://www.w3.org/2000/svg" className="next" width="56.898" height="91" viewBox="0 0 56.898 91">
				<path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" />
				</svg> --> */}
			<div className="trail">
				<div className="box1 active">1</div>
				<div className="box2">2</div>
				<div className="box3">3</div>
				<div className="box4">4</div>
				<div className="box5">5</div>
			</div>
		</div>
        <div className="section1">
            <div className="section1-text">
                <div className="h1">Featured Collections</div>
                <div className="p">Our Solutions tailor made for with each<br />individual to understand specific needs</div>
            </div>
            <div className="section1-pics">
                <div className="pics">
                    <div className="img imgone"></div>
                    <div className="description">
                        <div className="num ">1</div>
                        <div className="desc-head">
                            Wigs
                        </div>
                        <div className="desc-text">
                            Looking for the best 100% natural wigs? Shop for them at our store now.
                        </div>
                        <div className="desc-btn">Shop Now</div>
                    </div>
                </div>
                <div className="pics">
                    <div className="img imgtwo"></div>
                    <div className="description">
                        <div className="num ">1</div>
                        <div className="desc-head">
                            Wigs
                        </div>
                        <div className="desc-text">
                            Looking for the best 100% natural wigs? Shop for them at our store now.
                        </div>
                        <div className="desc-btn">Shop Now</div>
                    </div>
                </div>
                <div className="pics">
                    <div className="img imgthree"></div>
                    <div className="description">
                        <div className="num ">1</div>
                        <div className="desc-head">
                            Wigs
                        </div>
                        <div className="desc-text">
                            Looking for the best 100% natural wigs? Shop for them at our store now.
                        </div>
                        <div className="desc-btn">Shop Now</div>
                    </div>
                </div>
                <div className="pics">
                    <div className="img imgfour"></div>
                    <div className="description">
                        <div className="num ">1</div>
                        <div className="desc-head">
                            Wigs
                        </div>
                        <div className="desc-text">
                            Looking for the best 100% natural wigs? Shop for them at our store now.
                        </div>
                        <div className="desc-btn">Shop Now</div>
                    </div>
                </div>
            </div>

        </div>
        <div className="section2">
            <div className="section1-text">
                <div className="h1">Featured Collections</div>
                <div className="p">Our Solutions tailor made for with each<br/> individual to understand specific needs</div>
            </div>
            <div className="section1-pics">
                <div className="pics" onMouseEnter={hoverEfect1}  onMouseLeave={hoverEfect1}>
                    <div className="hovers" >
                        <div className="hover1 hover1pic">

                        </div>
                        <div  className={hover1 ? 'hover2 hover2img2' : 'hoverslide'}
                        //  className="hover2"
                         >
                            
                        </div>
                    </div>
                    <div className="price">

                    </div>
                </div>
                <div className="pics" onMouseEnter={hoverEfect2}  onMouseLeave={hoverEfect2}>
                  <div className="hovers" >
                        <div className="hover1 hover2pic">

                        </div>
                        <div  className={hover2 ? 'hover2 hover2img1' : 'hoverslide'}
                        //  className="hover2"
                         >
                            
                        </div>
                    </div>
                    <div className="price">

                    </div>
                    
                </div>
                <div className="pics" onMouseEnter={hoverEfect3}  onMouseLeave={hoverEfect3}>
                  <div className="hovers" >
                        <div className="hover1 hover3pic">

                        </div>
                        <div  className={hover3 ? 'hover2 hover2img3' : 'hoverslide'}
                        //  className="hover2"
                         >
                            
                        </div>
                    </div>
                    <div className="price">

                    </div>
                    
                </div>
                <div className="pics" onMouseEnter={hoverEfect4}  onMouseLeave={hoverEfect4}>
                  <div className="hovers" >
                        <div className="hover1 hover4pic">

                        </div>
                        <div  className={hover4 ? 'hover2 hover2img4' : 'hoverslide'}
                        //  className="hover2"
                         >
                            
                        </div>
                    </div>
                    <div className="price">

                    </div>
                    
                </div>
                
            </div>

        </div>





















		<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
		<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CSSRulePlugin3.min.js"></script>


		<script src="./script.js"></script>



	<script src="./script.js"></script>


    </>
  )
}

export default Home
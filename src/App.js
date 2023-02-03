// import './App.css';
// import Home from './Pages/Home';
import 'tw-elements';
import React, { useState } from 'react'
import "./Pages/style.css"

function App() {
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
  const [skew1, setSkew1] = useState(false)
  const skewEfect1 = () => {
    setSkew1(!skew1)
  }
  const [skew2, setSkew2] = useState(false)
  const skewEfect2 = () => {
    setSkew2(!skew2)
  }
  const [skew3, setSkew3] = useState(false)
  const skewEfect3 = () => {
    setSkew3(!skew3)
  }
  const [skew4, setSkew4] = useState(false)
  const skewEfect4 = () => {
    setSkew4(!skew4)
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
                      <div className='price-first'>
                           Loose Wave 4*4 Lace Wigs
                       </div>
                       <div className='price-cart'>
                            <div>$219.99 – $605.99</div>
                            <div className='cart'></div>
                       </div>
                        
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
                      <div className='price-first'>
                           Loose Wave 4*4 Lace Wigs
                       </div>
                       <div className='price-cart'>
                            <div>$219.99 – $605.99</div>
                            <div className='cart'></div>
                       </div>

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
                      <div className='price-first'>
                           Loose Wave 4*4 Lace Wigs
                       </div>
                       <div className='price-cart'>
                            <div>$219.99 – $605.99</div>
                            <div className='cart'></div>
                       </div>

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
                      <div className='price-first'>
                           Loose Wave 4*4 Lace Wigs
                       </div>
                       <div className='price-cart'>
                            <div>$219.99 – $605.99</div>
                            <div className='cart'></div>
                       </div>

                    </div>
                    
                </div>
                
            </div>

        </div>
        <div className='section3'>
          <div className='circle'> 
          <div className='circle-info'>
                <div className="circle-info-h1">Make a Move</div>
                <div className="circle-info-small">Order your Item</div>
                <div className="circle-info-p">At Ronbeautyamazement, we offer 100% quality human hair that gives you great value for your money</div>
                <div className="desc-btn">Shop Now</div>
          </div>
          </div>
           </div>
           <div className='section4'>
                <div className='section4-part1' style={{padding:'0em 5em 0em 5em'}}>
                <div className="circle-info-h1" style={{fontWeight:'100',fontSize:'60px'}}>About Us</div>
                    <div style={{width:'90%', color:'#E08B67',fontSize:'35px',lineHeight:'45px',fontWeight:'200'}}>Ronbeautyamazement is an online provider of professional beauty cosmetic products. </div>
                    <p style={{width:'90%', color:'#fff',fontSize:'16px',lineHeight:'25px',fontWeight:'100'}}>
                    We are 100% Canadian-owned and operated and are currently based out of beautiful Saskatoon Saskatchewan(The land of living skies) We have deep roots within the beauty industry operating successfully within Canada and beyond. <br/><br/>
We launched in 2019 with a vision of providing Canadians with a trusted and reliable source of beauty products while contributing the same customer service.
                    </p>
                    <div className="desc-btn">More about us</div>
                 </div>
                <div className='section4-part2'> 
                <div className='part2'>
                    <div className='part2-1' onMouseEnter={skewEfect1}  onMouseLeave={skewEfect1}>
                      <div className={skew1 ? 'part2-1a transform-close' : 'part2-1a transform-open'}>
                        <span className='span-1'>
                          Hair Wigs
                        </span>
                        <span className='span-2'>
                          Price from $3,366
                        </span>
                      </div>
                      <div className={skew1 ? 'part2-1b skew1  transform-open' : 'part2-1b skew1  transform-close'}>
                      
                      </div>
                    </div>
                    <div className='part2-2' onMouseEnter={skewEfect2}  onMouseLeave={skewEfect2}>
                      <div className={skew2 ? 'part2-1a transform-close' : 'part2-1a transform-open'}>
                        <span className='span-1'>
                          Hair Wigs
                        </span>
                        <span className='span-2'>
                          Price from $3,366
                        </span>
                      </div>
                      <div className={skew2 ? 'part2-1b skew2  transform-open' : 'part2-1b skew2  transform-close'}>
                      
                      </div>
                    </div>
                </div>
                <div className='part2'>
                <div className='part2-3' onMouseEnter={skewEfect3}  onMouseLeave={skewEfect3}>
                      <div className={skew3 ? 'part2-1a transform-close' : 'part2-1a transform-open'}>
                        <span className='span-1'>
                          Hair Wigs
                        </span>
                        <span className='span-2'>
                          Price from $3,366
                        </span>
                      </div>
                      <div className={skew3 ? 'part2-1b skew3  transform-open' : 'part2-1b skew3  transform-close'}>
                      
                      </div>
                    </div>
                    <div className='part2-4' onMouseEnter={skewEfect4}  onMouseLeave={skewEfect4}>
                      <div className={skew4 ? 'part2-1a transform-close' : 'part2-1a transform-open'}>
                        <span className='span-1'>
                          Hair Wigs
                        </span>
                        <span className='span-2'>
                          Price from $3,366
                        </span>
                      </div>
                      <div className={skew4 ? 'part2-1b skew4  transform-open' : 'part2-1b skew4  transform-close'}>
                      
                      </div>
                    </div>
                </div>
                </div>
          </div>
          <div className='section5'>
          <div className="section1-text">
                <div className="h1" style={{color:'black'}} >Stay tuned for Updates</div>
                <div className="p">News & Updates</div>
            </div>
            <div className='section5-2'>
              <div className='sec5-div'>
                <div className='sec5-pt1 pt1'></div>
                <div className='sec5-pt2'>
                  <div className='sec5-pt2-div'>
                   <span className='span-1'>
                          What is<br/> Balayage?
                    </span>
                    <p style={{width:'90%',fontSize:'16px',lineHeight:'25px',fontWeight:'100'}}>
                    Pronounced BAH-LEE-AHGE, balayage is actually a French word meaning ‘sweeping’, as in to sweep on a hair lightener to create highlights. As a technique of free-hand painting highlights onto the hair, balayage creates a...
                    </p>
                    <div className="desc-btn" style={{background: 'black'}}>Read More</div>
                  </div>
                </div>
              </div>
              <div className='sec5-div'>
                <div className='sec5-pt1 pt2'></div>
                <div className='sec5-pt2'>
                  <div className='sec5-pt2-div'>
                  <span className='span-1'>
                          FACIAL<br/> SHAPES
                    </span>
                    <p style={{width:'90%',fontSize:'16px',lineHeight:'25px',fontWeight:'100'}}>
                    Pronounced BAH-LEE-AHGE, balayage is actually a French word meaning ‘sweeping’, as in to sweep on a hair lightener to create highlights. As a technique of free-hand painting highlights onto the hair, balayage creates a...
                    </p>
                    <div className="desc-btn" style={{background: 'black'}}>Read More</div>
                  </div>
                </div>
              </div>
              <div className='sec5-div'>
                <div className='sec5-pt1 pt3'></div>
                <div className='sec5-pt2'>
                <div className='sec5-pt2-div'>
                  <span className='span-1'>
                          FACIAL<br/> SHAPES
                    </span>
                    <p style={{width:'90%',fontSize:'16px',lineHeight:'25px',fontWeight:'100'}}>
                    Pronounced BAH-LEE-AHGE, balayage is actually a French word meaning ‘sweeping’, as in to sweep on a hair lightener to create highlights. As a technique of free-hand painting highlights onto the hair, balayage creates a...
                    </p>
                    <div className="desc-btn" style={{background: 'black'}}>Read More</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='section-6'>
              <div className='sec-6'>
                <div style={{display:"flex"}}>
                <div className="circle-info-p" style={{color:"#e08b67", fontSize:'30px'}}>Newsletter</div>
                <div className="circle-info-p" style={{color:"white", fontSize:'30px'}}>Stay tuned for Updates</div>
                </div>
                <div style={{display:"flex",background:"white", width:'30%',padding:"5px"}}>
               <input type='text' placeholder='Your Email Address' style={{width:"85%",border:"none",paddingLeft:'15px'}} />
                <div className="circle-info-p" style={{color:"white", fontSize:'30px',background:"black", width:"15%"}}> x </div>
                </div>

             </div>
          </div>
          <div className='section-7'>
          <div className='sec7-1'>
            <div className="h1" style={{color:'black',fontSize:"45px",fontWeight:"100",marginBottom:"40px"}} >Contact Info</div>
            <div style={{display:"flex",alignItems:"center", borderBottom:"1px dashed rgb(191, 191, 191)"}}>
            <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
            <div style={{display:"flex",flexDirection:'column-reverse',width:"80%",padding:"10px",gap:"10px"}}>
            <div className="circle-info-p" style={{textAlign:'left'}}>Call Us: +1 639 471 1291</div>
              <div style={{width:'90%', color:'black',fontSize:'25px',lineHeight:'45px',fontWeight:'200'}}>Talk to us</div>
            </div>
            </div>
            <div style={{display:"flex",alignItems:"center", borderBottom:"1px dashed rgb(191, 191, 191)"}}>
            <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
            <div style={{display:"flex",flexDirection:'column-reverse',width:"80%",padding:"10px",gap:"10px"}}>
            <div className="circle-info-p" style={{textAlign:'left'}}>support@ronbeautyamazement.com</div>
              <div style={{width:'90%', color:'black',fontSize:'25px',lineHeight:'45px',fontWeight:'200'}}>TContact Us</div>
            </div>
            </div>
            <div style={{display:"flex",alignItems:"center", borderBottom:"1px dashed rgb(191, 191, 191)"}}>
            <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
            <div style={{display:"flex",flexDirection:'column-reverse',width:"80%",padding:"10px",gap:"10px"}}>
            <div className="circle-info-p" style={{textAlign:'left'}}>Store C4, 3510 8th Street East, Saskatoon, SK S7H0W6</div>
              <div style={{width:'90%', color:'black',fontSize:'25px',lineHeight:'45px',fontWeight:'200'}}>Location</div>
            </div>
            </div>
            <div style={{display:"flex",alignItems:"center", borderBottom:"1px dashed rgb(191, 191, 191)"}}>
            <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
            <div style={{display:"flex",flexDirection:'column-reverse',width:"80%",padding:"10px",gap:"10px"}}>
            <div className="circle-info-p" style={{textAlign:'left'}}>Mon – Sat 9 am to 8 pm  </div>
              <div style={{width:'90%', color:'black',fontSize:'25px',lineHeight:'45px',fontWeight:'200'}}>
Opening Hours</div>
            </div>
            </div>


          </div>
          <div className='sec7-2'>
            <div className="h1" style={{color:'black',fontSize:"45px",fontWeight:"100",marginBottom:"40px"}} >Enquiry Form</div>
            <div style={{display:"flex",borderBottom:"0.5px solid #e08b67",width:"80%",alignItems:"center",padding:"10px",gap:"10px"}}>
              <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
              <input type='text' placeholder='Name' style={{width:"100%", height:"35px"}} />
            </div>
            <div style={{display:"flex",borderBottom:"0.5px solid #e08b67",width:"80%",alignItems:"center",padding:"10px",gap:"10px"}}>
              <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
              <input type='text' placeholder='Email' style={{width:"100%", height:"35px"}} />
            </div>
            <div style={{display:"flex",borderBottom:"0.5px solid #e08b67",width:"80%",alignItems:"center",padding:"10px",gap:"10px"}}>
              <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
              <input type='text' placeholder='Phone' style={{width:"100%", height:"35px"}} />
            </div>
            <div style={{display:"flex",borderBottom:"0.5px solid #e08b67",width:"80%",alignItems:"center",padding:"10px",gap:"10px"}}>
              <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
              <input type='text' placeholder='Subject' style={{width:"100%", height:"35px"}} />
            </div>
            <div style={{display:"flex",borderBottom:"0.5px solid #e08b67",width:"80%",padding:"10px",gap:"10px"}}>
              <div className='icon' style={{width:"20px",height:"20px",borderRadius:"50%",background:"#e08b67"}}></div>
              <input type='text-area' placeholder='Message' style={{width:"100%",height:"100px"}} />
            </div>
            <div className="desc-btn" style={{background: '#e08b67',width:"80%",marginTop:'20px'}}>Read More</div>
          </div>
          </div>
          <div className='section-8'>
            <div className='foot-logo'></div>
            <div style={{display:"flex",width:"40%",height:"50px"}}>
            <input type='text' placeholder='Your Email Address' style={{width:"65%",border:"none",paddingLeft:'15px'}} />
            <div className="desc-btn" style={{background: '#e08b67',width:"35%",display:"flex",justifyContent:"center",alignItems:"center"}}>Subscribe Now</div>
            </div>
            <p style={{width:'90%', color:'#fff',fontSize:'16px',lineHeight:'25px',fontWeight:'100', textAlign:"center"}}>
            Sign-up to get the latest offers and news and stay updated.
            </p>
            <div className='icons'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div style={{fontSize:"16px",display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center",gap:"10px"}}>
              
<b >Privacy Policy | Terms of Services | Refund Policy</b>
<p>Copyright © 2022, Ronbeauty Amazement. Alrights Reserved.</p>
            </div>

          </div>





















      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CSSRulePlugin3.min.js"></script>


		<script src="./script.js"></script>



	<script src="./script.js"></script>


    </>
  )
}

export default App;

import React from 'react'

export default function About() {
  return <>
  <div className='bg'>
    <div className='bg-black bg-opacity-75 min-vh-100 content'>
    <div>
      <h3 className='neonText'>Let's talk about <span className='a neno'>TMDB</span></h3>
      <p>The Movie Database (<span className='a'>TMDB</span>) is a community built movie and TV databas
        e.  Every piece of data has <br /> been added by our
       amazing community dating back to <span className='a'>2008</span>.  TMDB's strong international focus
        and <br /> breadth of data is largely unmatched and something we're incredibly proud of. 
         Put simply, we live <br /> and breathe community and that's precisely what makes us different.</p>
    </div>
</div>
  </div>
  <section>
  <section class="mt-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-3">
                    <div class="total text-center">
                        <i class="fa-sharp fa-solid fa-users text-white py-2"></i>
                        <h3 class="py-1 a">756,533</h3>
                        <h5>Movies</h5>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="total text-center">
                        <i class="fa-sharp fa-solid fa-thumbs-up py-2 text-white"></i>
                        <h3 class="py-1 a">140,146</h3>
                        <h5>TV Shows</h5>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="total text-center">
                        <i class="fa-solid fa-bullhorn py-2 text-white"></i>
                        <h3 class="py-1 a">225,128</h3>
                        <h5>TV Seasons</h5>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="total text-center">
                        <i class="fa-solid fa-cloud-arrow-down py-2 text-white"></i>
                        <h3 class="py-1 a">3,467,573</h3>
                        <h5>TV Episodes</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </section>
  </>
  
}

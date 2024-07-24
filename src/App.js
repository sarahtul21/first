
import { useState } from 'react';
import './App.css';
// import { Link } from "react-router-dom";
import car from './9279523.png'

function App() {
  const [clicked , setClicked] = useState(false)



  return (
    <div className=" bg-white ">

      <div className="navbar container  m-auto   text-[#af997f]">
    
        {/* logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" to='/'>logo</a>
        </div>

        {/* //md menu list */}
        <div className="navbar-end">
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 min-w-52 p-2 shadow shadow-[#af997f61]">
                <li><a className='nav-item'>عن واساب</a></li>
                <li><a className='nav-item'>كلمة الرئيس</a></li>
                <li><a className='nav-item'>شركتنا</a></li>
                <li>
                <details>
                  <summary className='nav-item'>خدماتنا</summary>
                  <ul className="p-2 ">
                    <li><a className='nav-item-element'>خدمة 1</a></li>
                    <li><a className='nav-item-element'>خدمة 2</a></li>
                  </ul>
                </details>
              </li>
                <li><a className='nav-item'>تواصل معنا</a></li>
                
              </ul>
            </div>
        </div>
        {/* //lg menu list */}
        <div className="navbar-end hidden md:flex min-w-fit">
            <ul className="menu menu-horizontal px-1">
              <li><a className='nav-item'>عن واساب</a></li>
              <li><a className='nav-item'>كلمة الرئيس</a></li>
              <li><a className='nav-item'>شركتنا</a></li>
              <li>
                <details>
                  <summary className='nav-item'>خدماتنا</summary>
                  <ul className="p-2 min-w-52 bg-white z-10 shadow-[##af997f61]">
                    <li><a className='nav-item-element'>خدمة 1</a></li>
                    <li><a className='nav-item-element'>خدمة 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a className='nav-item'>تواصل معنا</a></li>
            </ul>
        </div>
        
      </div>

      <div className='bg-[#af997f]'>
        <div className='flex items-center container  m-auto px-2'>
        <div className='text-white'>الاخبار</div>
        
          <div class="ticker-container w-full  ms-2 my-1 px-2 bg-white shadow-inner shadow-[#717171] h-7 rounded">
            <div class="ticker-wrapper">
              <div class="ticker-transition">
                <div class="ticker-item text-black">شريط اخباري شريط اخباري شريط اخباري شريط اخباري شريط اخباري</div>
                <div class="ticker-item text-black">شريط اخباري شريط اخباري شريط اخباري شريط اخبارير </div>
              </div>
            </div>
        </div>
        </div>
      </div>

      

      <div className="header bg-[url('../public/slide01.jpg')]  bg-cover bg-center relative">

        <div className={clicked ? ' header-button absolute before:opacity-100' : ' header-button absolute before:opacity-0'}>
          <button 
            className='btn border-white text-[#af997f] hover:bg-[#af997f] hover:text-white hover:border-[#af997f] bg-white opacity-90 shadow-lg shadow-[#af997f61] '
            onClick={()=>setClicked(!clicked)}
            >الخدمات
          </button>

          <div>
          <ul>
            <li>
              <a 
              className={ 
                clicked ? 
                  'header-button-item1   absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-[#ffffffc2] hover:bg-white  shadow-lg shadow-[#af997f61]' : 
                  'header-button-item absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-white shadow-lg shadow-[#af997f61]'}>
                    خدمة1
                <img src={car}></img>
              </a>
            </li>
            <li>
              <a 
              className={ 
                clicked ? 
                  'header-button-item2   absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-[#ffffffc2] hover:bg-white  shadow-lg shadow-[#af997f61]' : 
                  'header-button-item absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-white shadow-lg shadow-[#af997f61]'}>
                    خدمة2
                <img src={car}></img>
              </a>
            </li>
            <li>
              <a 
              className={ 
                clicked ? 
                  'header-button-item3   absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-[#ffffffc2] hover:bg-white  shadow-lg shadow-[#af997f61]' : 
                  'header-button-item absolute w-[75px] h-[75px] grid place-items-center rounded-full text-[#af997f]   hover:border-[#af997f] transition-all bg-white shadow-lg shadow-[#af997f61]'}>
                    خدمة3
                <img src={car}></img>
              </a>
            </li>
          </ul>
        </div>
        </div>

        

        
      </div>

      <div class="hero min-h-screen ">
    <div class="hero-content flex-col lg:flex-row-reverse rounded shadow-2xl">
      <div class="text-center lg:text-left">
        {/* <!-- <img src=''>  --> */}
        <h1 class="text-5xl font-bold text-center text-[#030303]">احصل على اشتراك الآن!</h1>
        <p class="py-6 text-center text-[#af997f]">
            الرجاء ملء البيانات المطلوبة
        </p>
      </div>
      <div class="card shrink-0 w-full max-w-sm  bg-transparent rounded ">
        <form class="card-body rounded ">
          <div class="form-control">
            <label class="label">
              <span class="label-text text text-[#af997f]">الاسم الكامل</span>
            </label>
            <input type="text" placeholder="الاسم الكامل" class="input input-bordered border-[#af997f] bg-transparent  " required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text text-[#af997f]">رقم الهاتف</span>
            </label>
            <input type="text" placeholder="رقم الهاتف" class="input input-bordered border-[#af997f] bg-transparent " required />

          </div>
          <div class="form-control mt-6">
            <button class="btn text-white bg-[#030303]"><i class="fas fa-paper-plane"></i>إرسال</button>
          </div>
        </form>
      </div>
    </div>
</div>

    </div>
  );
}

export default App;

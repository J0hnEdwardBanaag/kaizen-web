import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../component/Header';

function MainPageSection1() {

  return (

    <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We believe in unlocking global possibilities.
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          We are very proud to showcase our productivity tools for your current manufacturing environment. With us, your vision of bringing state-of-the-art technology to optimize your productivity is now a reality.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Learn More
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

function MainPageSection2() {

  return (
    <div class="container mx-auto px-6 py-12">
      <p class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 text-center">About Us</p>
      <h1 class="text-3xl font-medium text-center mb-12">Our Global Team</h1>
      <div class="grid  md:grid-cols-2 gap-6">
        <div class="bg-white rounded shadow p-6">
          <h2 class="text-2xl font-medium mb-4">Who We Are</h2>
          <p class="text-gray-600">We are a team of dedicated professionals who are passionate about building great products. A organization composed of diverse talents in areas of engineering, programming, user interface design, and analytics.</p>
          <div class="mt-6"><a class="text-base font-semibold text-indigo-600 hover:text-indigo-700" href="/components">Learn More<span aria-hidden="true">→</span></a></div>
        </div>
        <div class="bg-white rounded shadow p-6">
          <h2 class="text-2xl font-medium mb-4">Our Mission</h2>
          <p class="text-gray-600">Our mission is to provide our customers with the best possible experience by creating high-quality, user-friendly products.</p>
        </div>
      </div>
    </div>
  );
};

function ProductAndServices() {
  return (
    <div class="bg-gray-100"> <div class="container mx-auto px-6 py-12"> <h1 class="text-3xl font-medium text-center mb-12">Our Products and Services</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white rounded shadow p-6"> <h2 class="text-2xl font-medium mb-4">Product 1</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p> </div> <div class="bg-white rounded shadow p-6"> <h2 class="text-2xl font-medium mb-4">Product 2</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p> </div> <div class="bg-white rounded shadow p-6"> <h2 class="text-2xl font-medium mb-4">Service 1</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p> </div> <div class="bg-white rounded shadow p-6"> <h2 class="text-2xl font-medium mb-4">Service 2</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p> </div> <div class="bg-white rounded shadow p-6"> <h2 class="text-2xl font-medium mb-4">Service 3</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p> </div> </div> </div> </div>
  );
}

function Contact() {
  return (
    <div class="bg-white">
      <div class="container mx-auto px-6 py-12">
        <h1 class="text-3xl font-medium text-center mb-12">Contact Us</h1>
        <form class="w-full max-w-xl mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="first-name"> First Name </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" />
            </div>
            <div class="w-full md:w-1/2 px-3" >
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="last-name"> Last Name </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="email"> Email </label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" />
              <p class="text-gray-600 text-xs italic">Please enter a valid email address.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="message"> Message </label>
              <textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message"></textarea>
              <p class="text-gray-600 text-xs italic">Please enter your message.</p>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline-blue focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"> Send Message
              </button>
            </div>
            <div class="md:w-2/3">
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h2 class="text-white text-lg mb-4 font-bold">Company</h2>
          <ul class="list-reset text-white text-sm leading-relaxed">
            <li class="mb-2">About Us</li>
            <li class="mb-2">Contact Us</li>
            <li class="mb-2">Privacy Policy</li>
            <li class="mb-2">Terms of Service</li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h2 class="text-white text-lg mb-4 font-bold">Products</h2>
          <ul class="list-reset text-white text-sm leading-relaxed">
            {/* <li class="mb-2">Product 1</li>
            <li class="mb-2">Product 2</li>
            <li class="mb-2">Product 3</li>
            <li class="mb-2">Product 4</li> */}
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h2 class="text-white text-lg mb-4 font-bold">
            Support</h2>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h2 class="text-white text-lg mb-4 font-bold">Follow Us</h2>
          <ul class="list-reset text-white text-sm leading-relaxed">
            <li class="mb-2"> <a class="underline text-gray-400 hover:text-gray-200" href="#">Facebook</a> </li>
            <li class="mb-2"> <a class="underline text-gray-400 hover:text-gray-200" href="#">Twitter</a> </li>
            <li class="mb-2"> <a class="underline text-gray-400 hover:text-gray-200" href="#">Instagram</a> </li>
            <li class="mb-2"> <a class="underline text-gray-400 hover:text-gray-200" href="#">LinkedIn</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>);
}

// function ProductAndServices(){
//   return(<div></div>);
// }

function App() {
  return (
    <>
      <Header />
      <br />
      {/* <MainPageSection1 />
      <br />
      <br />
      <br />
      <MainPageSection2 />
      <br />
      <ProductAndServices />
      <br />
      <Contact />
      <br />
      <Footer /> */}
      {/* <div className="text-9xl py-4 border-b border-slate-900/10 ">
        <a className="text-xl font-semibold text-gray-900 hover:text-sky-500 dark:hover:text-sky-400">
          Testing
        </a>

      </div> */}


    </>
  )
}

export default App;

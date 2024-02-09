
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

function App() {
  return (
    <>
      <Header />
      <br />
      <MainPageSection1 />
      {/* <br />
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

// import { Fragment, useState } from 'react'
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <Popover.Group className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Product
//               <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-4">
//                   {products.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                     >
//                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                         <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                       </div>
//                       <div className="flex-auto">
//                         <a href={item.href} className="block font-semibold text-gray-900">
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </a>
//                         <p className="mt-1 text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                   {callsToAction.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                     >
//                       <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>

//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Features
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Marketplace
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Company
//           </a>
//         </Popover.Group>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 className="h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 alt=""
//               />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                         Product
//                         <ChevronDownIcon
//                           className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
//                           aria-hidden="true"
//                         />
//                       </Disclosure.Button>
//                       <Disclosure.Panel className="mt-2 space-y-2">
//                         {[...products, ...callsToAction].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Marketplace
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Company
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   )
// }

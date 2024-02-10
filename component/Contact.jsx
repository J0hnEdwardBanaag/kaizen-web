function Contact() {
    return (
      <div id="contact" class=""  style={{"background-color":"transparent"}} >
        <div class="container mx-auto px-6 py-12">
        {/* class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" */}
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Need a support? Want to send feedback? Or any concern? Let us know.</p>
          <p className="text-rose-500 text-center">Not working right now</p>
          <br />
          <form class="w-full max-w-xl mx-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2" for="first-name"> First Name </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" />
              </div>
              <div class="w-full md:w-1/2 px-3" >
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2" for="last-name"> Last Name </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2" for="email"> Email </label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" />
                <p class="text-gray-600 text-xs italic">Please enter a valid email address.</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2" for="subject"> subject </label> 
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="subject" type="text" />
                <p class="text-gray-600 text-xs italic">Please enter a subject.</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2" for="message"> Message </label>
                <textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message"></textarea>
                <p class="text-gray-600 text-xs italic">Please enter your message.</p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button class="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline-blue focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"> Send Message
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





  export default Contact;
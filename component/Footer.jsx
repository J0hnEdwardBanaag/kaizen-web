function Footer() {
    return (
        <footer class="bg-gradient-to-tl from-indigo-300 via-transparent text-black p-4 mt-auto">
            <br />
            <br />
            <hr />
            <div class="container p-8 mx-auto  lg:flex lg:justify-between">
                {/* <!-- Company Information --> */}
                <div class="lg:w-2/3 lg:pr-4">
                    <h3 class="text-lg font-bold mb-2">4488 Kaizen LLC</h3>
                    <p><strong>Physical Address:</strong> 150 E. Palmetto Park Road, Suite 800, Boca Raton, FL 33432 </p>
                    <p><strong>Mailing Address:</strong> PO Box 54 Boca Raton, FL 33429 </p>
                    <p><strong>Phone:</strong> +1.561.465.7513 </p>
                    <p><strong>Fax:</strong> +1.925. 678-5188</p>
                    <p><strong>Email:</strong>
                        <a className="text-sky-500 hover:text-indigo-300" href="mailto:info@4488kaizen.com"> info@4488kaizen.com</a>
                    </p>
                </div>
                {/* <!-- Menu --> */}
                <br />
                <div class="pr-2">
                    <h3 class="text-lg font-bold mb-2">
                        <a className="text-slate-800 hover:text-sky-300" href="#about">About Us</a>
                    </h3>
                </div>
                <div class="pr-2">
                    <h3 class="text-lg font-bold mb-2">
                        <a className="text-slate-800 hover:text-sky-300" href="#">Blog</a>
                    </h3>
                </div>
                <div class="pr-2">
                    <h3 class="text-lg font-bold mb-2">
                        <a className="text-slate-800 hover:text-sky-300" href="#contact">Contact & Support</a>
                    </h3>
                </div>

                <br />
            </div>
            <p class="mt-4 text-center">&copy; <strong>2024 4488Kaizen LLC.</strong> All rights reserved.</p>
        </footer>
    );
}



export default Footer;
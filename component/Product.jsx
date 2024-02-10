
const products = [
    { name: 'Data Collection', description: 'We provide state-of-the art sensors to validate the data being collected', href: '#', img: "./src/assets/products/Product1_A.jpg" },
    { name: 'Data Analysis', description: 'We have real-time standard and customized reports that analyze the collected data and provide you with solid bases to support your actions and decisions.', href: '#', img: "./src/assets/products/Product1_B.jpg" },
    { name: 'Data Metrics', description: 'We also have standard metrics that you can access real-time, and if needed, we can configure additional operational data points specific to your business', href: '#', img: "./src/assets/products/Product1_C.jpg" },
    { name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ', href: '#', img: 'https://dkmetrics.com/wp-content/uploads/2017/06/bgwhydkm-150x150.jpg' },
    { name: 'Product 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ', href: '#', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80' },
]


function Products(props) {
    const { name, description, href, img } = props;
    return (
        <div class="bg-white rounded shadow p-6">
            <div class="w-full">
                <img
                    src={img}
                    class='w-full rounded' style={{ "max-height": "300px" }}
                    alt={name} />
            </div>
            <br />
            <div class="p-2">
                <div class="uppercase tracking-wide text-md text-indigo-500 font-semibold">{name}</div>
                <p class="mt-2 text-slate-500">{description}</p>
            </div>
        </div>

    );
};

function ProductAndServices() {


    return (

        <div class="">
            {/* mt-4 text-4xl font-extrabold tracking-tight text-slate-900 */}
            <div class="container mx-auto px-6 py-12">
                <div className='text-center'>
                    <h1 class="text-4xl font-bold ">Some of Our Products and Services</h1>
                    <br />
                    <p class="text-sm font-medium  mb-12 text-slate-500 "><strong>4488 Kaizen</strong> Specializes in the design and development of productivity tools for the manufacturing sector.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3  gap-6">

                    {products.map((item) => (
                        <Products
                            name={item.name}
                            description={item.description}
                            href={item.href}
                            img={item.img}
                        />
                    ))}


                    {/* <div class="bg-white rounded shadow p-6">
                        <h2 class="text-2xl font-medium mb-4">Product 2</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                    </div> */}
                </div>

            </div>
        </div>


    )
}



export default ProductAndServices;
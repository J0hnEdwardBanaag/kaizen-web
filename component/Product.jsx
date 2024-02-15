
const products = [
    { categoryName: "power-platform-solutions", name: 'Power Apps Development', description: 'Craft tailored applications that align precisely with your business processes and requirements. Create intuitive and user-friendly interfaces for seamless adoption across your organization.', href: '#', img: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/power-platform/Microsoft_Power_Platform_Icons_PowerApps.svg' },
    { categoryName: "power-platform-solutions", name: 'Power BI Analytics', description: 'Transform raw data into compelling visualizations that provide actionable insights. Design personalized dashboards that meet the specific needs of your business users.', href: '#', img: '' },
    { categoryName: "power-platform-solutions", name: 'Power Automate', description: 'Design personalized dashboards that meet the specific needs of your business users. Seamlessly connect various apps and services to create a cohesive and automated workflow.', href: '#', img: '' },
    { categoryName: "metrics-and-analytics", name: 'Data Collection', description: 'We provide state-of-the art sensors to validate the data being collected', href: '#', img: "/images/products/Product1_A.jpg" },
    { categoryName: "metrics-and-analytics", name: 'Data Analysis', description: 'We have real-time standard and customized reports that analyze the collected data and provide you with solid bases to support your actions and decisions.', href: '#', img: "/images/products/Product1_B.jpg" },
    { categoryName: "metrics-and-analytics", name: 'Data Metrics', description: 'We also have standard metrics that you can access real-time, and if needed, we can configure additional operational data points specific to your business', href: '#', img: "/images/products/Product1_C.jpg" },
    { categoryName: "web-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "web-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "web-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "custom-software-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "custom-software-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "custom-software-development", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "system-integration", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "system-integration", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
    { categoryName: "system-integration", name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin. ', href: '#', img: '' },
]



function Products(props) {
    const { name, description, href, img } = props;
    return (
        <div class="bg-white rounded shadow p-4">
            {img && (
                <div class="w-full">
                    <img
                        src={img}
                        class='w-full rounded'
                        style={{ maxHeight: "300px" }}  // Use "maxHeight" instead of "max-height"
                        alt={name}
                    />
                    <br />
                </div>
            )}
            <div class="p-2">
                <div class="uppercase tracking-wide text-md text-indigo-500 font-semibold">{name}</div>
                <p class="mt-2 text-slate-500">{description}</p>
            </div>
        </div>

    );
};
function ProductAndServicesByCategory(props) {

    const { id, name, description } = props;

    return (
        <div id={id}>
            <hr />
            <br />
            <div className='p-0'>
                <h4 class="text-2xl font-bold">{name}</h4>
                <p class="text-sm font-medium  mb-4 text-gray-500 ">{description}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
                {products
                    .filter(item => item.categoryName === id)
                    .map((item) => (
                        <Products
                            name={item.name}
                            description={item.description}
                            href={item.href}
                            img={item.img}
                        />
                    ))}
            </div>
        </div>
    )
}
function ProductAndServices() {


    return (

        <div class="" id="product-product">
            {/* mt-4 text-4xl font-extrabold tracking-tight text-slate-900 */}
            <div class="container mx-auto px-6 py-12">
                <div className='text-center'>
                    <h1 class="text-4xl font-bold ">Some of Our Products and Services</h1>
                    <br />
                    <p class="text-sm font-medium  mb-12 text-gray-500 "><strong>4488 Kaizen</strong> Specializes in the design and development of productivity tools for the manufacturing sector.</p>
                </div>
                <ProductAndServicesByCategory
                    id="power-platform-solutions"
                    name="Power Platform Solutions"
                    description="Harnessing the full potential of Microsoft's Power Platform"
                />
                <ProductAndServicesByCategory
                    id="metrics-and-analytics"
                    name="Metrics And Analytics"
                    description="Harnessing the full potential of Microsoft's Power Platform"
                />


            </div>
        </div>


    )
}



export default ProductAndServices;
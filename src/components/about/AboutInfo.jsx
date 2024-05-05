import Logo from '../../assets/NewsIcon.png'

const AboutInfo = () => {
    return (
        <div className="py-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-12 lg:gap-20">
                <div className="bg-gray-800 p-4 flex items-center justify-center rounded-lg">
                    <img src={Logo} alt='logo' className='w-[150px] md:w-[200px]' />
                </div>
                <div className='p-4 lg:p-8'>
                    <h1 className="font-extrabold py-2 uppercase tracking-wider text-gray-800">About Us</h1>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
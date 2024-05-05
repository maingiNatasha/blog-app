import { BiSolidQuoteRight } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const BlogContent = () => {
    return (
		<div className="py-8">
            <div>
                <p className='pb-4'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.</p>
                <p className='py-6'>Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p>
            </div>
            <div className='flex py-6'>
                <span className='py-2 mr-4'><BiSolidQuoteRight size={25} className='text-gray-400' /></span>
                <h1 className="font-bold uppercase tracking-wide">Knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.</h1>
            </div>
            <div>
                <p className='py-4'>Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
                <p className='py-6'>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
            </div>
            <div className='py-6'>
                <h1 className='font-bold uppercase tracking-wide'>Eu ridiculus fringilla aenean</h1>
            </div>
            <div className='pb-12'>
                <p className='py-4'>Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.</p>
                <ul className='list-disc mx-12'>
                    <li>Crisp fresh iconic elegant timeless clean perfume</li>
                    <li>Neck straight sharp silhouette and dart detail</li>
                    <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
                </ul>
                <p className='py-4'>See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
            </div>
            <div className='flex justify-center'>
                <span className='mr-1'><FaFacebook size={30} className='text-blue-900' /></span>
                <span className='font-bold text-blue-900 uppercase mr-6 md:mr-12 py-1'>share</span>
                <span className='mr-6 md:mr-12'><FaTwitter size={30} className='text-blue-400' /></span>
                <span><FaPinterest  size={30} className='text-red-800' /></span>
            </div>
        </div>
    )
}

export default BlogContent
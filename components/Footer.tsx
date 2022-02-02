import FooterColumn from "./FooterColumn";

const Footer = () => (
    <footer className="grid grid-cols-1 md:grid-cols-4  gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">

        {/* Column 1 */}
        <FooterColumn 
            key={0}
            title='ABOUT'
            links={['How Airbnb works', 'Newsroom', 'Investors', 'Airbnb Plus', 'Airbnb Luxe']}
        />

        {/* Column 2 */}
        <FooterColumn 
            key={1}
            title='COMMUNITY'
            links={['Accessibility', 'Forums', 'Careers', 'Referrals', 'Sponsorship']}
        />

        {/* Column 3 */}
        <FooterColumn
            key={2}
            title='HOST'
            links={['Pricing', 'Presents', 'Placeholer', 'Host FAQ', 'Join Now']}
        />

        {/* Column 4 */}
        <FooterColumn 
            key={3}
            title='SUPPORT'
            links={['Help Centre', 'Trust & Safety', 'Hi Mom', 'Easter Egg', 'Legal']}
        />

    </footer>
);

export default Footer;

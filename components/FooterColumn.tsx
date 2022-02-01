interface FooterColumnProps {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: FooterColumnProps) => (
    <div className="space-y-4 text-cs text-gray-800">
        <h5 className="font-bold">{title}</h5>
        {links?.map(link => (
            <p>{link}</p>
        ))}
    </div>
);

export default FooterColumn;

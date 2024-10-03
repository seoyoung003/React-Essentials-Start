export default function TabButton({ children, isSelected, ...props}) {
    console.log("tabbutton component excuting");
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}
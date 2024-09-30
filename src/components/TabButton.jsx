export default function TabButton({ children, onSelect }) {
    console.log("tabbutton component excuting");
    return (
        <li>
            <button onClick={ onSelect }>{children}</button>
        </li>
    );
}
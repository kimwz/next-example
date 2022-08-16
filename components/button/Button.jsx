export default function Button({name}) {
    return (
        <>
        <button>{name}</button>
        <style jsx>{`
            button {
                padding: 8px 16px;
                margin: 4px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
            }

            button:hover {
                background-color: skyblue;
                color: white;
            }
        `}</style>
        </>
    )
}
const Log = ({ children, title, date }: {children: React.ReactNode, date: String, title: String}): React.ReactNode => {
    return (
        <div className="log">
            <div className="log-header">
                <h2>{ title }</h2>
                <p>{ date }</p>
            </div>
            { children }
        </div>
    )
}
export default Log;
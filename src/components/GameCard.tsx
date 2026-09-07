const GameCard = ({children, gameLink, title, thumbnailSource}: {
        children: React.ReactNode,
        gameLink: string,
        title: string,
        thumbnailSource: string
    }): React.ReactNode => {

    return (
        <div className="game-card">
            <a href={ gameLink }>
                <img src={ thumbnailSource }/>
            </a>
            <div className="vertical-rule"/>
            <div>
                <h2>{ title }</h2>
                <p>{ children }</p>
            </div>
        </div>
    );
}
export default GameCard;
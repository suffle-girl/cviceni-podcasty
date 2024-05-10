export const Episode = ({num, title, guest}) => {
    return (
        <div className="episode">
        <div className="episode__num">{num}</div>
        <div className="episode__body">
          <div className="episode__title">{title}</div>
          <div className="episode__guest">host: {guest}</div>
        </div>
      </div>
    )
}
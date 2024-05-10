export const Episode = ({num, title, host}) => {
    return (
        <div className="episode">
        <div className="episode__num">{num}</div>
        <div className="episode__body">
          <div className="episode__title">{title}</div>
          <div className="episode__guest">host: {host}</div>
        </div>
      </div>
    )
}
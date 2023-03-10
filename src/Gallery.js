const Gallery = (props) => {
    return (
        <div style={{ 'width': '100%' }}>
            <img style={{ 'maxWidth': '100vw' }} src={props.objectImg} alt={props.title} />
            <p>{props.artistDisplayName}</p>
        </div>
    )
}

export default Gallery
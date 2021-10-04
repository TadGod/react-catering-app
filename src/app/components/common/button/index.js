function button( {title = 'Error: title not given', className, id, onClick} ) {
    return(
        <button onClick={onClick} className={className} id={id}>{title}</button>
    );
}

export default button;
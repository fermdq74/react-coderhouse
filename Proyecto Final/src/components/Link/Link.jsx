const Link = ( {label, url, cssClass} ) => {
    return (
        <a className={cssClass} href={url}>{label}</a>
    )
}

export default Link;
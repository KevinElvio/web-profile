export default function Logo({domain, alt}) {
    return (
        <img
            src={domain}
            alt={alt}
            className="h-16 w-16 object-contain"
            loading="lazy"
        />
    )
}
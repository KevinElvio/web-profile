export default function Logo({domain, alt}) {
    return (
        <img
            src={`https://logos-api.apistemic.com/domain:${domain}?fallback=404`}
            alt={alt}
            className="h-16 w-16 object-contain"
            loading="lazy"
        />
    )
}
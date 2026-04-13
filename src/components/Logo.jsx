import PropTypes from 'prop-types';

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

Logo.propTypes = {
    domain: PropTypes.string,
    alt: PropTypes.string
}
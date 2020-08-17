import React, {useState, useEffect} from 'react';

export const createMediaQuery = ({minWidth = 0, maxWidth}) => {
    let mediaQuery = `(min-width: ${minWidth}px)`;
    if (maxWidth) {
        mediaQuery += ` and (max-width: ${maxWidth - 1}px)`;
    }
    return mediaQuery;
};


export const Responsive = ({minWidth, maxWidth, children}) => {
    const [isVisible, setVisibility] = useState(() => {
        const mediaQuery = createMediaQuery({minWidth, maxWidth});
        return window.matchMedia(mediaQuery).matches;
    });

    useEffect(() => {
        const handler = (event) => {
            setVisibility(event.matches);
        };

        const mediaQuery = createMediaQuery({minWidth, maxWidth});
        const mediaQueryList = window.matchMedia(mediaQuery);
        mediaQueryList.addListener(handler);

        return () => {
            mediaQueryList.removeListener(handler);
        };
    }, [minWidth, maxWidth]);

    if (isVisible) {
        return <>{children}</>;
    }

    return null;
};
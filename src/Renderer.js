import React, {Fragment} from 'react';
import Image from './Image';

const defaultRenderer = imageProps => {
    return (
        <Fragment>
            <Image
                {...imageProps}
            />
            <div
                style={{
                    backgroundColor: 'rgb(187, 189, 191)',
                    paddingTop: `${imageProps.placeholderHeight}%`,
                }}
            />
        </Fragment>
    );
};

export {
    defaultRenderer,
};

import React from 'react';
import styled from 'styled-components';

export const Image = ({className, src, alt, onClick}) => (
    <img className={className} src={src} alt={alt} onClick={onClick} />
);

export const Div = ({className, children}) => (
    <div className={className}>
        {children}
    </div>
);

export const ImageWithSizes = styled(Image)`
    position: absolute;
    width: 100%;
    height: ${props => props.ratio > 1 ? 'auto' : `calc(100% - ${props.fixedBottom}px)`};
    left: 50%;
    bottom: ${props => `${props.fixedBottom}px`};
    transform: ${props => `translate(-50%, 0)`};
    background-color: ${props => props.fixedImagePlaceholderColor};
    cursor: pointer;
`;

export const ImageWithoutSizes = styled(Image)`
    position: absolute;
    display: ${props => props.visible ? null : 'none'};
    width: 100%;
    cursor: pointer;
`;

export const Container = styled(Div)`
    position: relative;
    display: block;
    font-size: 0;
    opacity: ${props => props.withLoader ? '0.5' : false};
`;

export const DetailsContainer = styled.div`
    height: ${props => props.visible ? `${props.height}px` : '0'};
    font-size: 14px;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    margin-bottom: ${props => props.visible ? `${props.gutterInPercent}%` : 0};
`;

export const DetailsImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const DetailsImage = styled(Image)`
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
`;


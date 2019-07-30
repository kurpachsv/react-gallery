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
    display: ${props => props.visible ? null : 'none'};
    width: ${props => props.ratio > 1 ? '100%' : 'auto'};
    height: ${props => props.radio > 1 ? 'auto' : `calc(100% - ${props.fixedBottom || 0}px)`};
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

export const Item = styled(Div)`
    vertical-align: top;
    position: relative;
    display: inline-block;
`;

export const ItemMasonry = styled(Item)`
    width: ${props => `${100 / props.columnsMaxCount - props.gutterInPercent}%`};
    margin: ${props => `0 ${props.gutterInPercent}% 0 0`};
`;

export const ItemDefault = styled(Item)`
    width: ${props => props.isIncomplete && !props.disableLastRowDetecting ? `${props.newWidth}px` : `${props.newWidthInPercent}%`};
    max-width: ${props => props.isIncomplete && !props.disableLastRowDetecting ? `${props.newWidthInPercent}%` : 'auto'};
    margin: ${props => props.rowLength === props.columnIndex + 1
        ? `0 0 ${props.gutterInPercent}% 0`
        : `0 ${props.gutterInPercent}% ${props.gutterInPercent}% 0`};
`;


export const ItemFixed = styled(Item)`
    background-color: ${props => props.placeholderColor};
    width: ${props => props.isIncomplete ? `${props.newWidth}px` : `${props.newWidthInPercent}%`};
    margin: ${props => props.rowLength === props.columnIndex + 1
        ? `0 0 ${props.gutterInPercent}% 0`
        : `0 ${props.gutterInPercent}% ${props.gutterInPercent}% 0`};
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


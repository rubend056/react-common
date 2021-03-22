import React, { FunctionComponent, ImgHTMLAttributes, useContext } from 'react';
import s from './Image.module.scss';
import { ThemeC } from '../../App';
import { classNameFind } from '../utils';

export interface ImageProps{
	
}

const Image: FunctionComponent<ImageProps & React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
	const theme = useContext(ThemeC);
	let {className, alt,...others} = props;
	className = classNameFind(s, theme, className, `image`)
	
	return (
		<img className={className} alt={alt?alt:""} {...others}>
			{props.children}
		</img>
	)
}

export default Image;
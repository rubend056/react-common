import React, { FunctionComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import usePortal from './Hooks/usePortal';

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal: FunctionComponent<{ id: string; children: ReactNode }> = ({ id, children }) => {
	const target = usePortal(id);
	return createPortal(children, target);
};

export default Portal;

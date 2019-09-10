import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import ReactSlider from '../../../index';

describe('<ReactSlider>', () => {
    it('can render', () => {
        const tree = renderer.create(<ReactSlider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call onAfterChange callback', () => {
        const onAfterChange = jest.fn();
        const { container } = render(
            <ReactSlider onAfterChange={onAfterChange} thumbClassName="thumb" />
        );
        const thumb = container.querySelector('.thumb');
        /**
         * Without mocking focus(), jsdom throws `TypeError: stack.split is not a function`.
         */
        thumb.focus = () => {};
        fireEvent.touchStart(thumb, { touches: [{ pageX: 0, pageY: 0 }] });
        fireEvent.touchMove(thumb, { touches: [{ pageX: 1, pageY: 0 }] });
        fireEvent.touchEnd(thumb, { touches: [{ pageX: 2, pageY: 0 }] });
        expect(onAfterChange).toHaveBeenCalledTimes(1);
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import ReactSlider from '../../../index';

describe('<ReactSlider>', () => {
    it('can render', () => {
        const tree = renderer.create(<ReactSlider />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call onAfterChange callback when onEnd is called', () => {
        const onAfterChange = jest.fn();
        const testRenderer = renderer.create(<ReactSlider onAfterChange={onAfterChange} />);
        const testInstance = testRenderer.root;
        testInstance.instance.onBlur();
        expect(onAfterChange).toHaveBeenCalledTimes(1);
    });
});

import { shallowMount } from '@vue/test-utils'
import NavBarItem from '../js/components/NavBar/NavBarItem.vue';

describe('NavBarItem component tests', () => {
    const wrapper = shallowMount(NavBarItem, {
        propsData: {
            activeStep: 1,
            icon: 'fa-user-circle',
            label: 'Your Details',
            step: 1
        }
    });

    it('mounts the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('checks props data', () => {
        expect(wrapper.props().activeStep).toBe(1);
        expect(wrapper.props().icon).toBe('fa-user-circle');
        expect(wrapper.props().label).toBe('Your Details');
        expect(wrapper.props().step).toBe(1);
    });

    it('checks computed properties', () => {
        expect(wrapper.vm.isActiveItem).toBe(true);
    });

    it('check against jest snapshot test', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
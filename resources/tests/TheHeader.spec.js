import { shallowMount } from '@vue/test-utils'
import TheHeader from '../js/components/NavBar/TheHeader.vue';

describe('TheHeader component tests', () => {
    const wrapper = shallowMount(TheHeader, {
        propsData: {
            activeStep: 1,
            store: {
                "currencySymbol":"$",
                "name":"Test Store",
                "logoUrl": null
            },
        }
    });

    it('mounts the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('checks props data', () => {
        expect(wrapper.props().activeStep).toBe(1);
        expect(wrapper.props().store).toEqual({
            "currencySymbol":"$",
            "name":"Test Store",
            "logoUrl": null
        });
    });

    it('check store name', () => {
        const title = wrapper.find('h3');
        expect(title.text()).toBe('Test Store');
    });

    it('check against jest snapshot test', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
})
import { shallowMount } from '@vue/test-utils'
import CheckoutStepOne from '../js/components/CheckoutSteps/CheckoutStepOne.vue';

describe('CheckoutStepOne component tests', () => {
    const wrapper = shallowMount(CheckoutStepOne, {
        propsData: {
            form: {"name":"","email":"","card":""}
        }
    });

    it('mounts the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('checks props data', () => {
        expect(wrapper.props().form).toEqual({"name":"","email":"","card":""});
    });

    it('checks emitted events', () => {
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('submitStepOne');
        expect(wrapper.emitted('submitStepOne')).toHaveLength(1);
    });

    it('sets and checks a value for the form', async () => {
        const nameInput = wrapper.find('input[type="text"]');
        await nameInput.setValue('John Smith');
        expect(nameInput.element.value).toBe('John Smith');
    })

    it('check against jest snapshot test', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
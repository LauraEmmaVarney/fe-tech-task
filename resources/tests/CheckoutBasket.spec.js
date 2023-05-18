import { shallowMount } from '@vue/test-utils'
import CheckoutBasket from '../js/components/CheckoutSteps/CheckoutBasket.vue';

describe('CheckoutBasket component tests', () => {
  const wrapper = shallowMount(CheckoutBasket, {
    propsData: {
      store: {
        "currencySymbol":"$",
        "name":"Test Store",
        "logoUrl": null
      },
      items: [{"id":1,"name":"Test Product","price":5,"qty":1,"rowprice":5},{"id":6,"name":"Test Product 2","price":1.45,"qty":2,"rowprice":2.9}]
    }
  });

  it('mounts the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('find child components by name', () => {
    const childComponent = wrapper.findComponent({ name: 'BaseCard' });
    expect(childComponent.exists()).toBe(true);
  });

  it('checks props data', () => {
    expect(wrapper.props().store).toEqual({
        "currencySymbol":"$",
        "name":"Test Store",
        "logoUrl": null
    });
    expect(wrapper.props().items).toEqual([{"id":1,"name":"Test Product","price":5,"qty":1,"rowprice":5},{"id":6,"name":"Test Product 2","price":1.45,"qty":2,"rowprice":2.9}]);
  });

  it('checks computed properties', () => {
    expect(wrapper.vm.basketTotal).toBe(7.9);
  });

  it('check title', () => {
    const title = wrapper.find('h5');
    expect(title.text()).toBe('Your Items');
  });

  it('check against jest snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
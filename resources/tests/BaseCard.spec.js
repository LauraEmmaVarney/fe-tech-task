import { shallowMount } from '@vue/test-utils'
import BaseCard from '../js/components/Utilities/BaseCard.vue';

describe('BaseCard component tests', () => {
  const wrapper = shallowMount(BaseCard, {
    slots: {
      header: 'Your Details'
    }
  });

  it('mounts the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks the componets slots', () => {
    expect(wrapper.html()).toContain('Your Details');
  });

  it('check against jest snapshot test', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
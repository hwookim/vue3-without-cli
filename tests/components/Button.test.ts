import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';
// TODO: import { ButtonProps } from '@/components/Button.vue'; 인식 못함

describe('Button', () => {
  describe('with content', () => {
    const content = 'hello world';

    test('render content', () => {
      const wrapper = shallowMount(Button, {
        props: {
          content,
        },
      });

      expect(wrapper.html()).toContain(content);
    });
  });

  describe('without content', () => {
    test('render default text', () => {
      const wrapper = shallowMount(Button);

      expect(wrapper.html()).toContain('content');
    });
  });
});

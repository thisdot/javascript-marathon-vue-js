import { shallowMount, mount } from "@vue/test-utils";
import Post from "@/components/Post.vue";

describe("Post.vue", () => {
  it("Will render a default description if none passed", () => {
    const mockDescription = "Default description";
    const wrapper = mount(Post);

    expect(wrapper.find("p").element.textContent).toMatch(mockDescription);
  });

  it("Will render a default description if none passed", () => {
    const mockTitle = "My Title";
    const mockDescription =
      "This is a very long message that I have to write, to make sure that our rendering works correctly. Maybe a few more line would do. Just some more.";

    const wrapper = mount(Post, {
      propsData: {
        title: mockTitle,
        description: mockDescription
      }
    });

    expect(wrapper.find("h2").element.textContent).toMatch(mockTitle);
    expect(wrapper.find("p").element.textContent.length).toBe(127);
  });

  it("Will change text displayed on button click", async () => {
    const mockTitle = "My Title";
    const mockDescription =
      "This is a very long message that I have to write, to make sure that our rendering works correctly. Maybe a few more line would do. Just some more.";
    const wrapper = mount(Post, {
      propsData: {
        title: mockTitle,
        description: mockDescription
      }
    });

    wrapper.find("button").trigger("click");

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fullText).toBe(true);
    expect(wrapper.find("h2").element.textContent).toMatch(mockTitle);
    expect(wrapper.find("p").element.textContent).toMatch(mockDescription);
  });
});

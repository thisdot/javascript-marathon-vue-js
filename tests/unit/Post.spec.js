import { mount } from "@vue/test-utils";
import Post from "@/components/Post.vue";

describe("Post.vue", () => {
  it("Will render a default description if none passed", () => {
    //arrange
    const component = mount(Post);
    const defaultDescription = "Default description...";

    //act
    const description = component.find("p").element.textContent;

    //assert
    expect(description).toMatch(defaultDescription);
  });

  it("Will render a default description if none passed", () => {
    const expectedTitle = "my title";
    const expectedDescription = "my title";
    const component = mount(Post, {
      propsData: {
        title: expectedTitle,
        description: expectedDescription
      }
    });

    const actualTitle = component.find("[data-testID='title']").element
      .textContent;
    const actualDescription = component.find("p").element.textContent;

    expect(actualTitle).toMatch(expectedTitle);
    expect(actualDescription).toMatch(expectedDescription);
  });

  it("Will change text displayed on button click", async () => {
    const expectedDescription =
      "This is a very long message that I have to write, to make sure that our rendering works correctly. Maybe a few more line would do. Just some more.";
    const component = mount(Post, {
      propsData: {
        description: expectedDescription
      }
    });

    component.find("button").trigger("click");
    const beforeClickDescription = component.find("p").element.textContent;

    await component.vm.$nextTick();
    const afterClickDescription = component.find("p").element.textContent;

    expect(expectedDescription).toMatch(afterClickDescription);
    expect(expectedDescription).not.toMatch(beforeClickDescription);
  });
});

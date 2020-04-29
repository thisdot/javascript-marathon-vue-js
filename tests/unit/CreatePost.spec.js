import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import CreatePost from "@/components/CreatePost.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CreatePost.vue", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store();
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    store = null;
  });

  it("Will trigger an action with default object when form is submitted", async () => {
    const expectedData = {
      title: "default title",
      description: "default description"
    };
    const component = mount(CreatePost, {
      store,
      localVue
    });

    component.find("button").trigger("click");

    await component.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith("addPost", expectedData);
  });

  it("Will trigger an action with user input obj when button is clicked", async () => {
    const expectedData = {
      title: "default title",
      description: "my new value"
    };
    const component = mount(CreatePost, {
      store,
      localVue
    });

    component
      .find("[data-testId='description']")
      .setValue(expectedData.description);
    component.find("button").trigger("click");

    await component.vm.$nextTick();
  });
});

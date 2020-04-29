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
    const defaultValue = {
      title: "ciao",
      description: ""
    };

    const wrapper = mount(CreatePost, {
      store,
      localVue
    });

    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith("addPost", defaultValue);
  });

  it("Will trigger an action with user input obj when button is clicked", async () => {
    const expectedValues = {
      title: "newTitle",
      description: "new description"
    };

    const wrapper = mount(CreatePost, {
      store,
      localVue
    });

    const titleInput = wrapper.find('[data-testId="title"]');
    titleInput.setValue(expectedValues.title);

    const descriptionInput = wrapper.find('[data-testId="description"]');
    descriptionInput.setValue(expectedValues.description);

    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith("addPost", expectedValues);
  });
});

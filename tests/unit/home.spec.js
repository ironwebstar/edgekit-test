import { shallowMount } from "@vue/test-utils";
import LoginPage from "@/views/Home.vue";

describe("HelloWorld.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(LoginPage);
  });

  // snapshot test
  it("should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("call login action when trigger login button.", () => {
    const vm = wrapper.vm;
    const loginMock = jest.fn();
    const validEmailMock = jest.fn();
    vm.checkForm = loginMock;
    vm.validEmail = validEmailMock;

    wrapper.find("button").trigger("click");
    expect(loginMock).toHaveBeenCalled();
    expect(validEmailMock).not.toHaveBeenCalled();
  });
});

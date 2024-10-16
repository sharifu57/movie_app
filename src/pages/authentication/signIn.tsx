import InputForm from "../../components/forms/inputForm";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 light:bg-gray-800 light:border-gray-700">
        <div className="items-center justify-center">
          Logo
        </div>
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium">Sign in to our platform</h5>
          <div>
            <InputForm
              name={"email"}
              type={"email"}
              label={"Email"}
              placeholder={"Enter your email address"}
              value={""}
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div>
            <InputForm
              name={"password"}
              type={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              value={""}
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

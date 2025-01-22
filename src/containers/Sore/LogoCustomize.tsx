// components
import { Button, PageTile, PageDesc } from "../../components";

const LogoCustomize = () => {
  return (
    <section className="w-full h-fit p-3">
      <PageTile title="تخصيص الشعار" />
      <p className="text-zinc-500 text-base font-semibold my-3"></p>
      <PageDesc
        text="من الأفضل أن يكون الشعار بصيغة PNG بخلفية شفافة لرؤية أفضل وأن يكون مربع
        الشكل، على سبيل المثال 300x300 بكسل."
      />
      <form action="" className="p-10">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">إضغط هنا لتحميل صورة</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG (MAX. 300x300)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        {/* btn submit */}
        <Button text="حفظ" className="w-full mt-5" type="submit" />
      </form>
    </section>
  );
};

export default LogoCustomize;

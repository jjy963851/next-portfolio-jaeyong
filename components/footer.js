import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className=" ">
        <div className="">
          <div className=" px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" legacyBehavior>
              <a className="flex  font-medium items-center md:justify-start justify-center  ">
                <span className="ml-3 text-xl text-slate-300  ">
                  JaeYong&apos;s Portfolio
                </span>
              </a>
            </Link>

            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2023 JaeYong Chang —
              <span
                href=""
                className="text-gray-200 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Simple is best
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

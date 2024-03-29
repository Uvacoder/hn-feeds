export const Footer = () => {
  return (
    <footer className="h-32 mt-20 sm:mt-36text-lg font-semibold text-gray-400 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between">
      <span className="">
        abc Code and Design by{" "}
        <a
          href="https://abclinks.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 border-b border-dotted hover:border-solid hover:border-yellow-500 border-gray-400"
        >
          uvacoder
        </a>
      </span>
      <a
        href="https://github.com/uvacoder/hn-feeds"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 border-b border-dotted hover:border-solid hover:border-yellow-500 border-gray-400"
      >
        Source
      </a>
    </footer>
  )
}

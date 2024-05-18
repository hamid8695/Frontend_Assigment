import React from 'react';

const Navbar = () => {
  return (
    <nav
      class="flex-no-wrap relative flex w-full items-center justify-between bg-[#1F2937] py-2 shadow-dark-mild dark:bg-surface-dark lg:flex-wrap lg:justify-start lg:py-4">
      <div class="mx-32 flex w-full flex-wrap items-center justify-between px-3">
        <div
          class=" !visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent12"
          data-twe-collapse-item>

          <ul
            class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
            data-twe-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                class="text-white transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >Dashboard</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                class="text-white transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >Master Price</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                class="text-white transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >Custom Price</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                class="text-white transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >Calender</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                class="text-white transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >Reports</a
              >
            </li>
          </ul>
        </div>
        <div class="relative flex items-center">
          <div
            class="relative"
            data-twe-dropdown-ref
            data-twe-dropdown-alignment="end">
            <a
              class="me-4 flex items-center text-gray-200 transition duration-200 hover:text-secondary-600/70 hover:ease-in-out focus:text-secondary-600/70 active:text-secondary-600/70 motion-reduce:transition-none dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-twe-dropdown-toggle-ref
              aria-expanded="false">
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <div
            class="relative"
            data-twe-dropdown-ref
            data-twe-dropdown-alignment="end">
            <a
              class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-twe-dropdown-toggle-ref
              aria-expanded="false">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                class="rounded-full"
                style={{ height: "25px", width: "25px" }}
                alt=""
                loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
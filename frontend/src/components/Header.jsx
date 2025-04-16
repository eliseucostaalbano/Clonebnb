import React from "react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag"
          />
          <p className="text-primary-400 text-2xl font-bold">ashbnb</p>
        </div>

        <div>
          <p>Qualquer Lugar</p>
          <p>Qualquer semana</p>
          <p>Hóspedes</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div>Perfil</div>
      </div>
    </div>
  );
};

export default Header;

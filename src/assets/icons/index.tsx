import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.59em"
      height="1em"
      viewBox="0 0 256 162"
      {...props}
    >
      <path
        fill="#24339B"
        d="M256 138.739c-133.839 17.491-229.367 38.5-230.78-47.733c0 0 2.92-33.412 43.902-35.516c0 0 1.381-29.676 32.69-33.036c16.832-1.822 35.956 15.513 38.029 33.758c0 0 41.42-7.662 43.21 32.722c.628 14.068-2.544 37.997-42.488 36.96c0 0-23.112-3.14-26.253-38.876c-6.5 69.18 93.518 65.161 94.963 2.324c.628-27.164-16.77-55.112-55.96-49.868c-21.48-54.044-78.665-50.935-99.956-.816c-30.43 0-53.699 23.426-53.353 54.013C1.166 191.119 138.176 161.443 256 138.739"
      ></path>
    </svg>
  );
}

export function HeartOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"
      ></path>
    </svg>
  );
}
export function Badge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="65"
      height="30"
      viewBox="0 0 65 30"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H53V24H0V4Z"
        fill="url(#paint0_linear_260_269)"
      />

      <path
        d="M53 24H61.7639C63.2507 24 64.2177 22.4354 63.5528 21.1056L53 0V24Z"
        fill="#D66F00"
      />
      <path
        d="M53 0H61.7639C63.2507 0 64.2177 1.56462 63.5528 2.89443L53 24V0Z"
        fill="#F7B166"
      />
      <path d="M0 24H4V30L0 24Z" fill="url(#paint1_linear_260_269)" />
      <defs>
        <linearGradient
          id="paint0_linear_260_269"
          x1="53"
          y1="24"
          x2="-1.99253"
          y2="17.8674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA03B" />
          <stop offset="1" stop-color="#F27D00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_260_269"
          x1="2"
          y1="30"
          x2="2"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F7B166" />
          <stop offset="1" stop-color="#D66F00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AddToCart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26"
        ></path>
        <circle cx="19" cy="39" r="3"></circle>
        <circle cx="35" cy="39" r="3"></circle>
      </g>
    </svg>
  );
}

export function Eye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5"
      ></path>
    </svg>
  );
}

export function TrashCanOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"
      ></path>
    </svg>
  );
}

export function OutlineAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
    </svg>
  );
}

export function ShoppingCart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m15.55 11l2.76-5H6.16l2.37 5z"
        opacity=".3"
      ></path>
      <path
        fill="currentColor"
        d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
      ></path>
    </svg>
  );
}

export function Favorite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
      ></path>
    </svg>
  );
}

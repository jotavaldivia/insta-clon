import React from 'react';

const SvgHome = (props) => (
  <svg
    aria-label="Inicio"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1z" />
  </svg>
)

const SvgDirect = (props) => (
  <svg
    aria-label="Direct"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083 2.48 10.25z"
    />
  </svg>
)

const SvgPost = (props) => (
  <svg
    aria-label="Nueva publicaci\xF3n"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <path
      d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552zM6.545 12.001h10.91M12.003 6.545v10.91"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const SvgBrujula = (props) => (
  <svg
    aria-label="Buscar personas"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.941 13.953-6.36 2.471 2.479-6.368 6.36-2.471-2.479 6.368z"
    />
    <path
      fillRule="evenodd"
      d="m10.06 10.056 3.889 3.889-6.368 2.479 2.479-6.368z"
    />
    <circle
      cx={12.001}
      cy={12.005}
      fill="none"
      r={10.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const SvgHeart = (props) => (
  <svg
    aria-label="Feed de actividad"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218z" />
  </svg>
)


const SvgSearch = (props) => (
  <svg
    aria-label="Buscar"
    className="_8-yf5"
    color="#8e8e8e"
    fill="#8e8e8e"
    height={16}
    viewBox="0 0 24 24"
    width={16}
    {...props}
  >
    <path
      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5zM16.511 16.511 22 22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)





let icons = {
  SvgHome,
  SvgDirect,
  SvgPost,
  SvgBrujula,
  SvgHeart,
  SvgSearch
}

export default icons
const paths = {
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  factory: "M3 21V10l6 4v-4l6 4V6h3v15H3z",
  building: "M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3",
  tool: "M14.500 6.500a4 4 0 0 0 5 5L11 20a2 2 0 0 1-3-3l8.500-8.500M14.500 6.500l-2-2",
  wrench: "M4 20l7-7M13 5l6 6M10 8l6 6M12 3l9 9-3 3-9-9z",
  filter: "M4 5h16l-6 8v6l-4-2v-4z",
  chat: "M4 5h16v11H9l-5 4z",
  shield: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6zM9 12l2 2 4-4",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  headset: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3zM20 19c0 2-3 2-6 2",
  drop: "M12 3c4 5 7 8 7 12a7 7 0 0 1-14 0c0-4 3-7 7-12z",
  phone: "M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  whatsapp: "M4 20l1.500-4.500A8 8 0 1 1 8.500 18.500zM9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.500-2.500-2.500l1-1-1-2z",
  plus: "M12 4v16M4 12h16M5 5h14v14H5z",
  book: "M4 5h7a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-7v14a2 2 0 0 1 2-2h5z",
  cup: "M5 8h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 9h2a2 2 0 0 1 0 4h-2M7 21h8",
  check: "M5 12l5 5 9-10",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] || paths.drop} />
    </svg>
  );
}

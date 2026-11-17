import { useState } from "react";

/** Company logo from public/images/logo.png, with a drawn fallback. */
export default function Logo({ size = 40 }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return <img src="/images/logo.png" alt="Aqua Care Solutions logo" width={size} height={size}
      style={{ flexShrink: 0, borderRadius: "50%" }} onError={() => setFailed(true)} />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="22" fill="#EAF7FA" stroke="#269C58" strokeWidth="2.5" />
      <path d="M24 9c5 7 9 11.500 9 17a9 9 0 0 1-18 0c0-5.500 4-10 9-17z" fill="#087EAE" />
    </svg>
  );
}

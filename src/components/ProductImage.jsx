import { useState } from "react";

const BLUE = "#087EAE", DEEP = "#066289", GREEN = "#269C58", LIGHT = "#EAF7FA", WHITE = "#fff", GREY = "#C9D8DF";

const Tank = ({ x, y, w, h, c = BLUE }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={w / 2.500} fill={c} />
    <rect x={x + w * 0.18} y={y + 6} width={w * 0.14} height={h - 12} rx="3" fill={WHITE} opacity=".35" />
    <rect x={x + w * 0.15} y={y - 6} width={w * 0.7} height="8" rx="3" fill={DEEP} />
  </g>
);
const Tap = ({ x, y }) => <g><rect x={x} y={y} width="14" height="10" rx="3" fill={DEEP} /><circle cx={x + 7} cy={y + 18} r="2.500" fill={BLUE} /></g>;

const art = {
  rack: () => (<g><rect x="40" y="150" width="120" height="8" rx="3" fill={GREY} /><rect x="48" y="60" width="6" height="94" fill={GREY} /><rect x="146" y="60" width="6" height="94" fill={GREY} />
    <rect x="46" y="38" width="108" height="20" rx="5" fill={WHITE} stroke={GREY} /><circle cx="70" cy="48" r="5" fill={GREEN} />
    <Tank x={58} y={70} w={26} h={72} c={WHITE} /><Tank x={90} y={70} w={26} h={72} c={WHITE} /><Tank x={122} y={70} w={26} h={72} c={BLUE} /></g>),
  smart: () => (<g><path d="M45 50a55 40 0 0 1 110 0v90a15 15 0 0 1-15 15H60a15 15 0 0 1-15-15z" fill={WHITE} stroke={GREY} strokeWidth="2" />
    <rect x="58" y="42" width="84" height="78" rx="14" fill={BLUE} /><path d="M100 62c10 14 16 20 16 30a16 16 0 0 1-32 0c0-10 6-16 16-30z" fill={LIGHT} /><Tap x={93} y={124} /></g>),
  tall: () => (<g><rect x="50" y="22" width="100" height="136" rx="10" fill={WHITE} stroke={GREY} strokeWidth="2" /><rect x="58" y="30" width="30" height="108" rx="6" fill={BLUE} /><rect x="112" y="30" width="30" height="108" rx="6" fill={BLUE} />
    <rect x="92" y="60" width="16" height="56" rx="4" fill={LIGHT} /><circle cx="100" cy="128" r="5" fill={GREEN} /><Tap x={93} y={138} /></g>),
  prolife: () => (<g><rect x="45" y="22" width="110" height="136" rx="10" fill={WHITE} stroke={GREY} strokeWidth="2" /><rect x="55" y="30" width="90" height="26" rx="6" fill="#33424D" /><circle cx="70" cy="43" r="4" fill="#F59E0B" />
    <rect x="60" y="68" width="80" height="62" rx="6" fill="#F4E4C6" /><rect x="68" y="76" width="64" height="46" rx="4" fill="#E2C38E" /><Tap x={93} y={136} /></g>),
  whale: () => (<g><path d="M48 40a52 20 0 0 1 104 0v110a10 10 0 0 1-10 10H58a10 10 0 0 1-10-10z" fill={BLUE} />
    {[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3].map((c) => <rect key={r + "-" + c} x={58 + c * 22 + (r % 2) * 8} y={60 + r * 16} width="10" height="10" rx="2" fill={WHITE} opacity=".7" />))}<rect x="48" y="30" width="104" height="14" rx="6" fill={DEEP} /><Tap x={93} y={140} /></g>),
  alkaline: () => (<g><rect x="55" y="20" width="90" height="140" rx="8" fill="#2A2F36" /><rect x="64" y="34" width="72" height="42" rx="4" fill={BLUE} /><path d="M100 42c6 8 10 12 10 18a10 10 0 0 1-20 0c0-6 4-10 10-18z" fill={LIGHT} />
    {[0, 1, 2, 3].map((i) => <circle key={i} cx={74 + i * 17} cy="96" r="4" fill={i === 1 ? GREEN : "#58626C"} />)}<rect x="64" y="112" width="72" height="30" rx="4" fill="#3A414A" /></g>),
  plant: () => (<g><rect x="25" y="145" width="150" height="8" rx="3" fill={GREY} /><Tank x={45} y={30} w={34} h={112} /><Tank x={92} y={30} w={34} h={112} />
    <rect x="140" y="95" width="28" height="48" rx="4" fill={WHITE} stroke={GREY} strokeWidth="2" /><path d="M79 120h13M126 120h14" stroke={DEEP} strokeWidth="4" /></g>),
  softener: () => (<g><Tank x={42} y={26} w={56} h={122} /><path d="M98 50c20 0 22 40 22 70" fill="none" stroke={DEEP} strokeWidth="3" /><rect x="108" y="100" width="50" height="48" rx="8" fill={BLUE} /><rect x="108" y="92" width="50" height="10" rx="4" fill={DEEP} /><circle cx="70" cy="40" r="5" fill={GREEN} /></g>),
  pdw: () => (<g><rect x="14" y="146" width="172" height="8" rx="3" fill={GREY} />{[24, 62, 100].map((x) => <rect key={x} x={x} y="50" width="30" height="94" rx="12" fill="#DCE6EA" stroke={GREY} strokeWidth="2" />)}
    <rect x="140" y="62" width="40" height="82" rx="4" fill={WHITE} stroke={GREY} strokeWidth="2" /><path d="M54 80h8M92 80h8M130 80h10" stroke={DEEP} strokeWidth="3" /><circle cx="160" cy="84" r="5" fill={GREEN} /></g>),
  stp: () => (<g><rect x="14" y="70" width="120" height="76" rx="4" fill={BLUE} />{[0, 1, 2].map((i) => <rect key={i} x={24 + i * 38} y="80" width="28" height="56" fill={DEEP} opacity=".25" />)}
    <Tank x={146} y={56} w={22} h={90} /><rect x="14" y="146" width="160" height="8" rx="3" fill={GREY} /></g>),
  parts: () => (<g><circle cx="100" cy="150" r="3" fill="none" /><rect x="40" y="56" width="34" height="90" rx="6" fill={WHITE} stroke={GREY} strokeWidth="2" /><rect x="40" y="56" width="34" height="14" rx="4" fill={DEEP} />
    <rect x="84" y="40" width="34" height="106" rx="6" fill={BLUE} /><rect x="84" y="40" width="34" height="14" rx="4" fill={DEEP} /><rect x="128" y="76" width="34" height="70" rx="6" fill={GREEN} /><rect x="128" y="76" width="34" height="14" rx="4" fill="#1d7d46" /></g>),
};

/** Shows the product photo if one exists, otherwise a built-in illustration. */
export default function ProductImage({ product, className = "" }) {
  const [failed, setFailed] = useState(false);
  const Art = art[product.kind] || art.rack;
  return (
    <div className={`pimg ${className}`}>
      {product.image && !failed ? (
        <img src={product.image} alt={product.name} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <svg viewBox="0 0 200 180" role="img" aria-label={product.name}>
          <circle cx="100" cy="92" r="74" fill={WHITE} opacity=".7" />
          <Art />
        </svg>
      )}
    </div>
  );
}

export default function Spinner() {
    return (
      <div
        className="my-20 mx-auto w-16 aspect-square rounded-full animate-spin"
        style={{
          background:
            `radial-gradient(farthest-side, text-orange 94%, #0000) top/10px 10px no-repeat, ` +
            `conic-gradient(#0000 30%, text-orange) center/100% 100% no-repeat`,
          WebkitMask: `radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)`,
          mask: `radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)`,
        }}
      />
    );
}

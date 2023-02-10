import { useRouter } from "next/router";

export default function Detaile() {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}

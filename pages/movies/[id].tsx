import { useRouter } from "next/router";

export default function Detaile() {
  const router = useRouter();
  console.log(router.query.id);
  return <>Detaile</>;
}

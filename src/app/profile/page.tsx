import PageCsr from "./page_csr";

async function getServerData() {
  const res = await fetch("https://dummyjson.com/todos", {
    cache: "no-store", // 항상 최신 데이터
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Page() {
  const data = await getServerData();

  // console.log("res", data);

  return (
    <div>
      <h2>서버에서 가져온 데이터:</h2>
      <pre>{JSON.stringify(data)}</pre>
      <PageCsr ssrData={data}></PageCsr>
    </div>
  );
}

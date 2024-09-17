import getReports from '@/features/reports/api/getReports';

export default async function ForFirstTimers() {
  // 開催報告一覧を取得
  const reports = await getReports();

  // @TODO: 一旦開催報告一覧をログに出力
  console.log(reports);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Contents */}
      <div className="mx-auto w-screen max-w-4xl px-8 py-20 max-sm:pt-14 sm:p-12 sm:py-20 md:p-24">
        {/* 初めて参加される方へ */}
        <div className="pb-5">
          <h2 className="text-center text-2xl font-bold">開催報告</h2>
        </div>

        {/* @TODO: 開催報告一覧 */}
      </div>
    </main>
  );
}
import { useRouter, useSearchParams } from 'next/navigation'

export default function usePagination({ inputData, pageSize }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const data = inputData || [];
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const updatePage = (page) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page);
    router.push(`?${params.toString()}`);
  };

  const previousPage = () => {
    updatePage(Math.max(1, currentPage - 1));
  };

  const nextPage = () => {
    updatePage(Math.min(totalPages, currentPage + 1));
  };

  return {previousPage, nextPage, updatePage,currentPage,totalPages,paginatedData}
}
